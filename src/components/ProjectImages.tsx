'use client';

import type { ProjectImage } from '@/types/projects';
import { useMediaQuery } from '@/lib/useMediaQuery';
import { ProjectCarousel } from './ProjectCarousel';
import { ProjectImageList } from './ProjectImageList';

type Props = {
  images: ProjectImage[];
};

export function ProjectImages({ images }: Props) {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return isMobile ? (
    <ProjectImageList images={images} />
  ) : (
    <ProjectCarousel images={images} />
  );
}
