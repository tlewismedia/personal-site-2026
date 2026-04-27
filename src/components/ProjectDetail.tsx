import type { ReactNode } from 'react';
import type { ProjectRecord } from '@/types/projects';
import { BackButton } from './BackButton';

const renderInline = (text: string): ReactNode[] => {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(text)) !== null) {
    const [fullMatch, label, href] = match;

    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
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

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

const renderDescription = (description: string) =>
  description
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 0)
    .map((paragraph, index) => <p key={index}>{renderInline(paragraph)}</p>);

type Props = {
  project: ProjectRecord;
};

export function ProjectDetail({ project }: Props) {
  const projectLink = project.link
    ? project.link.startsWith('http')
      ? project.link
      : `https://${project.link}`
    : '';

  return (
    <main className="project-page">
      <div className="project-page-inner">
        <BackButton />

        <article className="project-detail-card">
          <p className="project-detail-kicker">Project</p>
          <div className="project-title-block">
            <h1>{project.title}</h1>
            <p className="project-detail-lead">{project.lead}</p>
          </div>
          <div className="project-detail-description">
            {renderDescription(project.description)}
          </div>
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
                const extension = image.ext ?? 'jpg';
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
