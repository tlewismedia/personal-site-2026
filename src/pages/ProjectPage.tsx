import type { ReactNode } from 'react'
import type { ProjectRecord } from '../types/projects'

type ProjectPageProps = {
  project: ProjectRecord;
  onBack: () => void;
};

const renderDescription = (description: string) => {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(description)) !== null) {
    const [fullMatch, label, href] = match;

    if (match.index > lastIndex) {
      parts.push(description.slice(lastIndex, match.index));
    }

    const isExternal = /^https?:\/\//.test(href);

    parts.push(
      <a
        key={`${href}-${match.index}`}
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
      >
        {label}
      </a>
    );

    lastIndex = match.index + fullMatch.length;
  }

  if (lastIndex < description.length) {
    parts.push(description.slice(lastIndex));
  }

  return parts;
};

export function ProjectPage({ project, onBack }: ProjectPageProps) {
  const projectLink = project.link
    ? project.link.startsWith('http')
      ? project.link
      : `https://${project.link}`
    : '';

  return (
    <main className="project-page">
      <div className="project-page-inner">
        <button type="button" className="project-back-button" onClick={onBack}>
          Back to main page
        </button>

        <article className="project-detail-card">
          <p className="project-detail-kicker">Project</p>
          <div className="project-title-block">
            <h1>{project.title}</h1>
            <p className="project-detail-lead">{project.lead}</p>
          </div>
          <p className="project-detail-description">
            {renderDescription(project.description)}
          </p>
          {project.link && (
            <p className="project-detail-link">
              <a href={projectLink} target="_blank" rel="noreferrer">
                View project demo
              </a>
            </p>
          )}

          {project.tech.length > 0 && (
            <ul className="project-tech-list" aria-label="Project technologies">
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {project.images.length > 0 && (
            <div className="project-carousel" aria-label="Project images">
              {project.images.map((image) => {
                const extension = image.ext === 'gif' ? 'gif' : 'jpg';
                const fullPath = `/img/prj/${image.name}.${extension}`;

                return (
                  <figure key={`${image.name}-${image.title}`} className="project-carousel-item">
                    <img src={fullPath} alt={image.title} loading="lazy" />
                    <span>{image.title}</span>
                  </figure>
                );
              })}
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
