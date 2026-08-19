'use client';

import type { ProjectGalleryItem } from '@/types/projects';
import { useMediaQuery } from '@/lib/useMediaQuery';
import { ProjectCarousel } from './ProjectCarousel';
import { ProjectImageList } from './ProjectImageList';

type Props = {
  gallery: ProjectGalleryItem[];
};

export function ProjectImages({ gallery }: Props) {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return isMobile ? (
    <ProjectImageList gallery={gallery} />
  ) : (
    <ProjectCarousel gallery={gallery} />
  );
}
