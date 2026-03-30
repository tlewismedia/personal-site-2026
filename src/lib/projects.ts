import { readFileSync } from 'fs';
import { join } from 'path';
import {
  decodeHtmlEntities,
  slugify,
  type ProjectRecord,
  type RawProjectRecord,
} from '@/types/projects';

const mapRawProject = (project: RawProjectRecord): ProjectRecord => {
  const title = decodeHtmlEntities(project.title ?? 'Untitled Project');

  return {
    slug: slugify(title),
    title,
    lead: decodeHtmlEntities(project.lead ?? ''),
    description: decodeHtmlEntities(project.description ?? ''),
    link: project.link ? decodeHtmlEntities(project.link) : undefined,
    tech: (project.tech ?? []).map((item) => decodeHtmlEntities(item)),
    images: project.images ?? [],
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
