import type { ProjectImage } from '@/types/projects';

type Props = {
  images: ProjectImage[];
};

export function ProjectImageList({ images }: Props) {
  return (
    <div className="project-image-list" aria-label="Project images">
      {images.map((image) => {
        const extension = image.ext ?? 'jpg';
        const fullPath = `/img/prj/${image.name}.${extension}`;

        return (
          <figure
            key={`${image.name}-${image.title}`}
            className="project-image-list-item"
          >
            <img src={fullPath} alt={image.title} loading="lazy" />
            <span>{image.title}</span>
          </figure>
        );
      })}
    </div>
  );
}
