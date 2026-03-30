'use client';

import Link from 'next/link';
import type { ProjectRecord } from '@/types/projects';

const SCROLL_KEY = 'project-return-scroll-y';

type Props = {
  projects: ProjectRecord[];
};

export function ProjectExplorerSection({ projects }: Props) {
  const saveScrollPos = () => {
    sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
  };

  return (
    <section className="project-explorer-section" id="projects-section">
      <h2>Project Explorer</h2>
      <ul className="project-link-list">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}/`}
              onClick={saveScrollPos}
            >
              {project.title}
            </Link>
            <p>{project.lead}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
