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
  link?: string;
  tech: string[];
  images: ProjectImage[];
};

export type RawProjectRecord = {
  title?: string;
  lead?: string;
  description?: string;
  link?: string;
  tech?: string[];
  images?: ProjectImage[];
};

// Server-compatible HTML entity decoder (no document/DOM required)
export const decodeHtmlEntities = (value: string): string => {
  return value
    .replace(/\u00ad/g, '')   // Unicode soft hyphen
    .replace(/&shy;/g, '')    // HTML soft hyphen entity
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex: string) =>
      String.fromCharCode(parseInt(hex, 16))
    );
};

export const slugify = (value: string): string => {
  return decodeHtmlEntities(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};
