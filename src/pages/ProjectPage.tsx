import type { ProjectRecord } from '../types/projects'

type ProjectPageProps = {
  project: ProjectRecord;
  onBack: () => void;
};

export function ProjectPage({ project, onBack }: ProjectPageProps) {
  return (
    <main className="project-page">
      <div className="project-page-inner">
        <button type="button" className="project-back-button" onClick={onBack}>
          Back to main page
        </button>

        <article className="project-detail-card">
          <p className="project-detail-kicker">Project</p>
          <h1>{project.title}</h1>
          <p className="project-detail-lead">{project.lead}</p>
          <p>{project.description}</p>

          {project.tech.length > 0 && (
            <ul className="project-tech-list" aria-label="Project technologies">
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {project.images.length > 0 && (
            <div className="project-image-grid">
              {project.images.map((image) => {
                const extension = image.ext === 'gif' ? 'gif' : 'jpg';
                const fullPath = `/img/prj/${image.name}.${extension}`;
                const thumbPath = `/img/prj/${image.name}-th.${extension}`;

                return (
                  <a
                    key={`${image.name}-${image.title}`}
                    href={fullPath}
                    target="_blank"
                    rel="noreferrer"
                    className="project-image-link"
                    title="Open full image in a new tab"
                  >
                    <img
                      src={thumbPath}
                      alt={image.title}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.src = fullPath;
                      }}
                    />
                    <span>{image.title}</span>
                  </a>
                );
              })}
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
