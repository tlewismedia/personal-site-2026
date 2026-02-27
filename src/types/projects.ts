export type ProjectImage = {
  name: string;
  title: string;
  ext?: string;
};

export type ProjectRecord = {
  slug: string;
  title: string;
  lead: string;
  description: string;
  tech: string[];
  images: ProjectImage[];
};

export type RawProjectRecord = {
  title?: string;
  lead?: string;
  description?: string;
  tech?: string[];
  images?: ProjectImage[];
};

export const decodeHtmlEntities = (value: string): string => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = value;
  return textarea.value.replace(/\u00ad/g, '');
};

export const slugify = (value: string): string => {
  return decodeHtmlEntities(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};
