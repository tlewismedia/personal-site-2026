import { useEffect, useMemo, useState } from 'react'
import { TopSection } from './sections/TopSection'
import { ArtDesignSection } from './sections/ArtDesignSection'
import { DigitalHarborSection } from './sections/DigitalHarborSection'
import { ProjectExplorerSection } from './sections/ProjectExplorerSection'
import { RicochetSection } from './sections/RicochetSection'
import { PrincicplesSection } from './sections/PrincicplesSection'
import { HowHelpSection } from './sections/HowHelpSection'
import { FreelanceSection } from './sections/FreelanceSection'
import { ProjectPage } from './pages/ProjectPage'
import {
  decodeHtmlEntities,
  slugify,
  type ProjectRecord,
  type RawProjectRecord,
} from './types/projects'
import './App.css'

type RouteState =
  | { type: 'home' }
  | { type: 'project'; slug: string };

const parseRouteFromHash = (hash: string): RouteState => {
  const prefix = '#/projects/';

  if (hash.startsWith(prefix)) {
    const slug = decodeURIComponent(hash.slice(prefix.length));
    return { type: 'project', slug };
  }

  return { type: 'home' };
};

const mapRawProject = (project: RawProjectRecord): ProjectRecord => {
  const title = decodeHtmlEntities(project.title ?? 'Untitled Project');

  return {
    slug: slugify(title),
    title,
    lead: decodeHtmlEntities(project.lead ?? ''),
    description: decodeHtmlEntities(project.description ?? ''),
    tech: (project.tech ?? []).map((item) => decodeHtmlEntities(item)),
    images: project.images ?? [],
  };
};

function App() {
  const [route, setRoute] = useState<RouteState>(() =>
    parseRouteFromHash(window.location.hash)
  );
  const [projects, setProjects] = useState<ProjectRecord[]>([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseRouteFromHash(window.location.hash));
    };

    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const loadProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}projects.json`);
        const data = (await response.json()) as { projects?: RawProjectRecord[] };

        if (!isCancelled) {
          const mappedProjects = (data.projects ?? []).map(mapRawProject);
          setProjects(mappedProjects);
        }
      } catch (error) {
        console.error('Failed to load projects.json', error);
      } finally {
        if (!isCancelled) {
          setIsLoadingProjects(false);
        }
      }
    };

    void loadProjects();

    return () => {
      isCancelled = true;
    };
  }, []);

  const projectsBySlug = useMemo(() => {
    return new Map(projects.map((project) => [project.slug, project]));
  }, [projects]);

  useEffect(() => {
    if (route.type !== 'home') {
      return;
    }

    const sections = Array.from(document.querySelectorAll('section'));
    const scrollBlocks = sections
      .slice(1)
      .flatMap((section) => Array.from(section.children));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    scrollBlocks.forEach((block) => {
      block.classList.add('reveal-on-scroll');
      observer.observe(block);
    });

    return () => {
      observer.disconnect();
    };
  }, [route.type]);

  if (route.type === 'project') {
    const selectedProject = projectsBySlug.get(route.slug);

    if (isLoadingProjects) {
      return (
        <main className="project-page">
          <div className="project-page-inner">
            <button
              type="button"
              className="project-back-button"
              onClick={() => {
                window.location.hash = '#/';
              }}
            >
              Back to main page
            </button>
            <article className="project-detail-card">
              <p className="project-detail-kicker">Project</p>
              <h1>Loading project...</h1>
              <p>Retrieving project data.</p>
            </article>
          </div>
        </main>
      );
    }

    if (!selectedProject) {
      return (
        <main className="project-page">
          <div className="project-page-inner">
            <button
              type="button"
              className="project-back-button"
              onClick={() => {
                window.location.hash = '#/';
              }}
            >
              Back to main page
            </button>
            <article className="project-detail-card">
              <p className="project-detail-kicker">Project</p>
              <h1>Project not found</h1>
              <p>The requested project link is unavailable.</p>
            </article>
          </div>
        </main>
      );
    }

    return (
      <ProjectPage
        project={selectedProject}
        onBack={() => {
          window.location.hash = '#/';
        }}
      />
    );
  }

  return (
    <>
      <TopSection />
      <PrincicplesSection />
      <HowHelpSection />
      <ArtDesignSection />
      <FreelanceSection />
      <RicochetSection />
      <DigitalHarborSection />
      <ProjectExplorerSection projects={projects} isLoading={isLoadingProjects} />
    </>
  )
}

export default App
