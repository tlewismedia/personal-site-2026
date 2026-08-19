'use client';

import { useState } from 'react';
import type { ProjectGalleryItem } from '@/types/projects';
import { MarkdownChart } from './MarkdownChart';
import { ProjectLightbox } from './ProjectLightbox';

type Props = {
  gallery: ProjectGalleryItem[];
};

export function ProjectImageList({ gallery }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const count = gallery.length;
  const close = () => setActiveIndex(null);
  const next = () =>
    setActiveIndex((prev) =>
      prev === null ? prev : (prev + 1) % count
    );
  const prev = () =>
    setActiveIndex((prev) =>
      prev === null ? prev : (prev - 1 + count) % count
    );

  const activeItem = activeIndex !== null ? gallery[activeIndex] : null;

  return (
    <>
      <div className="project-image-list" aria-label="Project media">
        {gallery.map((item, index) => {
          const open = () => setActiveIndex(index);

          return (
            <figure
              key={`${item.type}-${item.name}`}
              className="project-image-list-item"
              onClick={open}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  open();
                }
              }}
            >
              {item.type === 'image' ? (
                <img
                  src={`/img/prj/${item.name}.${item.ext ?? 'jpg'}`}
                  alt={item.title}
                  loading="lazy"
                />
              ) : (
                <div className="project-chart-preview">
                  <MarkdownChart
                    content={item.content}
                    idPrefix={`list-preview-${index}`}
                    preview
                  />
                  <div className="project-chart-fade" aria-hidden="true" />
                </div>
              )}
              <span>{item.title}</span>
            </figure>
          );
        })}
      </div>

      {activeItem && activeIndex !== null && (
        <ProjectLightbox
          item={activeItem}
          index={activeIndex}
          count={count}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
