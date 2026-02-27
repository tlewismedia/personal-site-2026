import type { ProjectRecord } from '../types/projects'

type ProjectExplorerSectionProps = {
  projects: ProjectRecord[];
  isLoading: boolean;
};

export function ProjectExplorerSection({
  projects,
  isLoading,
}: ProjectExplorerSectionProps) {
  return (
    <section className="project-explorer-section" id="projects-section">
      <h2>Project Explorer</h2>
      <p>
        Explore selected projects from product, UX, and full-stack work. Open a
        project to view details, technologies, and screenshots.
      </p>

      {isLoading ? (
        <p>Loading projects...</p>
      ) : (
        <ul className="project-link-list">
          {projects.map((project) => (
            <li key={project.slug}>
              <a href={`#/projects/${project.slug}`}>{project.title}</a>
              <p>{project.lead}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
