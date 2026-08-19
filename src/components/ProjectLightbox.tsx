'use client';

import type { ProjectGalleryItem } from '@/types/projects';
import { MarkdownChart } from './MarkdownChart';

type Props = {
  item: ProjectGalleryItem;
  index: number;
  count: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function ProjectLightbox({
  item,
  index,
  count,
  onClose,
  onPrev,
  onNext,
}: Props) {
  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Media viewer"
    >
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close media viewer"
      >
        <span className="lightbox-close-glyph">&times;</span>
      </button>

      {count > 1 && (
        <>
          <button
            className="lightbox-arrow lightbox-arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous item"
          >
            <span className="lightbox-arrow-glyph">&#8249;</span>
          </button>
          <button
            className="lightbox-arrow lightbox-arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next item"
          >
            <span className="lightbox-arrow-glyph">&#8250;</span>
          </button>
        </>
      )}

      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === 'image' ? (
          <figure className="lightbox-figure">
            <img
              src={`/img/prj/${item.name}.${item.ext ?? 'jpg'}`}
              alt={item.title}
              className="lightbox-image"
            />
            <figcaption className="lightbox-caption">{item.title}</figcaption>
          </figure>
        ) : (
          <div className="lightbox-chart">
            <MarkdownChart
              content={item.content}
              idPrefix={`lightbox-${index}`}
            />
            <div className="lightbox-chart-caption">{item.title}</div>
          </div>
        )}
      </div>
    </div>
  );
}
