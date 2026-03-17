import type { ProjectRecord } from '../types/projects'

type ProjectExplorerSectionProps = {
  projects: ProjectRecord[];
  isLoading: boolean;
  onProjectSelect: () => void;
};

export function ProjectExplorerSection({
  projects,
  isLoading,
  onProjectSelect,
}: ProjectExplorerSectionProps) {
  return (
    <section className="project-explorer-section" id="projects-section">
      <h2>Project Explorer</h2>

      {isLoading ? (
        <p>Loading projects...</p>
      ) : (
        <ul className="project-link-list">
          {projects.map((project) => (
            <li key={project.slug}>
              <a
                href={`#/projects/${project.slug}`}
                onClick={() => {
                  onProjectSelect();
                }}
              >
                {project.title}
              </a>
              <p>{project.lead}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
