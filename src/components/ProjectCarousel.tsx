'use client';

import { useEffect, useRef, useState } from 'react';
import type { ProjectImage } from '@/types/projects';

type Props = {
  images: ProjectImage[];
};

export function ProjectCarousel({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpen = activeIndex !== null;

  const close = () => setActiveIndex(null);
  const next = () =>
    setActiveIndex((prev) =>
      prev === null ? prev : (prev + 1) % images.length
    );
  const prev = () =>
    setActiveIndex((prev) =>
      prev === null ? prev : (prev - 1 + images.length) % images.length
    );

  const imagesCountRef = useRef(images.length);
  imagesCountRef.current = images.length;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      } else if (e.key === 'ArrowRight' && imagesCountRef.current > 1) {
        setActiveIndex((prev) =>
          prev === null ? prev : (prev + 1) % imagesCountRef.current
        );
      } else if (e.key === 'ArrowLeft' && imagesCountRef.current > 1) {
        setActiveIndex((prev) =>
          prev === null
            ? prev
            : (prev - 1 + imagesCountRef.current) % imagesCountRef.current
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

  const activeImage =
    activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className="project-carousel" aria-label="Project images">
        {images.map((image, index) => {
          const extension = image.ext ?? 'jpg';
          const fullPath = `/img/prj/${image.name}.${extension}`;

          return (
            <figure
              key={`${image.name}-${image.title}`}
              className="project-carousel-item"
            >
              <img
                src={fullPath}
                alt={image.title}
                loading="lazy"
                onClick={() => setActiveIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveIndex(index);
                  }
                }}
              />
              <span>{image.title}</span>
            </figure>
          );
        })}
      </div>

      {isOpen && activeImage && (
        <div
          className="lightbox-overlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            className="lightbox-close"
            onClick={close}
            aria-label="Close image viewer"
          >
            <span className="lightbox-close-glyph">&times;</span>
          </button>

          {images.length > 1 && (
            <>
              <button
                className="lightbox-arrow lightbox-arrow-left"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
              >
                <span className="lightbox-arrow-glyph">&#8249;</span>
              </button>
              <button
                className="lightbox-arrow lightbox-arrow-right"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next image"
              >
                <span className="lightbox-arrow-glyph">&#8250;</span>
              </button>
            </>
          )}

          <figure
            className="lightbox-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/img/prj/${activeImage.name}.${activeImage.ext ?? 'jpg'}`}
              alt={activeImage.title}
              className="lightbox-image"
            />
            <figcaption className="lightbox-caption">
              {activeImage.title}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}