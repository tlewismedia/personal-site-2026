'use client';

import { useEffect, useRef, useState } from 'react';
import type { ProjectGalleryItem } from '@/types/projects';
import { MarkdownChart } from './MarkdownChart';
import { ProjectLightbox } from './ProjectLightbox';

type Props = {
  gallery: ProjectGalleryItem[];
};

export function ProjectCarousel({ gallery }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpen = activeIndex !== null;
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

  const countRef = useRef(count);
  countRef.current = count;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      } else if (e.key === 'ArrowRight' && countRef.current > 1) {
        setActiveIndex((prev) =>
          prev === null ? prev : (prev + 1) % countRef.current
        );
      } else if (e.key === 'ArrowLeft' && countRef.current > 1) {
        setActiveIndex((prev) =>
          prev === null ? prev : (prev - 1 + countRef.current) % countRef.current
        );
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const activeItem = activeIndex !== null ? gallery[activeIndex] : null;

  return (
    <>
      <div className="project-carousel" aria-label="Project media">
        {gallery.map((item, index) => {
          const open = () => setActiveIndex(index);

          return (
            <figure
              key={`${item.type}-${item.name}`}
              className="project-carousel-item"
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
                    idPrefix={`preview-${index}`}
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

      {isOpen && activeItem && (
        <ProjectLightbox
          item={activeItem}
          index={activeIndex ?? 0}
          count={count}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
