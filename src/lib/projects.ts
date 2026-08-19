import { readFileSync } from 'fs';
import { join } from 'path';
import {
  decodeHtmlEntities,
  slugify,
  type ProjectGalleryItem,
  type ProjectImage,
  type ProjectRecord,
  type RawGalleryItem,
  type RawProjectRecord,
} from '@/types/projects';

const readMarkdownContent = (name: string): string => {
  try {
    return readFileSync(join(process.cwd(), 'public', 'md', `${name}.md`), 'utf-8');
  } catch {
    return '';
  }
};

const mapGalleryItem = (item: RawGalleryItem): ProjectGalleryItem => {
  const type = item.type ?? 'image';
  const title = decodeHtmlEntities(item.title);

  if (type === 'markdown') {
    return {
      type: 'markdown',
      name: item.name,
      title,
      content: readMarkdownContent(item.name),
    };
  }

  return {
    type: 'image',
    name: item.name,
    title,
    ext: item.ext,
  };
};

const mapRawProject = (project: RawProjectRecord): ProjectRecord => {
  const title = decodeHtmlEntities(project.title ?? 'Untitled Project');

  const images: ProjectImage[] = (project.images ?? []).map((image) => ({
    name: image.name,
    title: decodeHtmlEntities(image.title),
    ext: image.ext,
  }));

  const gallerySource: RawGalleryItem[] =
    project.gallery ??
    project.images?.map((image) => ({ type: 'image', ...image })) ??
    [];

  return {
    slug: slugify(title),
    title,
    lead: decodeHtmlEntities(project.lead ?? ''),
    description: decodeHtmlEntities(project.description ?? ''),
    link: project.link ? decodeHtmlEntities(project.link) : undefined,
    tech: (project.tech ?? []).map((item) => decodeHtmlEntities(item)),
    images,
    gallery: gallerySource.map(mapGalleryItem),
  };
};

export const getAllProjects = (): ProjectRecord[] => {
  const filePath = join(process.cwd(), 'public', 'projects.json');
  const raw = readFileSync(filePath, 'utf-8');
  const data = JSON.parse(raw) as { projects?: RawProjectRecord[] };
  return (data.projects ?? []).map(mapRawProject);
};

export const getProjectBySlug = (slug: string): ProjectRecord | undefined => {
  return getAllProjects().find((p) => p.slug === slug);
};
