'use client';

import { useEffect, useRef, useState } from 'react';
import { marked } from 'marked';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'strict',
});

type Props = {
  content: string;
  idPrefix: string;
  preview?: boolean;
};

export function MarkdownChart({ content, idPrefix, preview }: Props) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [html, setHtml] = useState('');

  const mermaidBlockPattern = /```mermaid\s*\n([\s\S]*?)```/g;

  useEffect(() => {
    let cancelled = false;

    (async () => {
      if (preview) {
        const diagrams = Array.from(content.matchAll(mermaidBlockPattern)).map(
          (m) => m[1].trim()
        );
        if (!cancelled) setHtml(JSON.stringify(diagrams));
        return;
      }

      const rendered = await marked.parse(content);
      if (!cancelled) setHtml(rendered);
    })();

    return () => {
      cancelled = true;
    };
  }, [content, preview]);

  useEffect(() => {
    if (!html || !bodyRef.current) return;

    if (preview) {
      const diagrams = JSON.parse(html) as string[];
      let index = 0;
      const container = bodyRef.current;
      const previews = diagrams
        .map((diagram, i) => {
          const id = `${idPrefix}-${index++}`;
          return { diagram, id, i };
        })
        .map(({ diagram, id, i }) => {
          const holder = document.createElement('div');
          holder.className = 'project-mermaid';
          container.appendChild(holder);
          return { holder, diagram, id, i };
        });

      (async () => {
        for (const { holder, diagram, id } of previews) {
          try {
            const { svg } = await mermaid.render(id, diagram);
            holder.innerHTML = svg;
          } catch (error) {
            console.error('Failed to render mermaid diagram:', error);
          }
        }
      })();

      return () => {
        previews.forEach(({ holder }) => holder.remove());
      };
    }

    const codes = Array.from(
      bodyRef.current.querySelectorAll('pre code.language-mermaid')
    );

    (async () => {
      let index = 0;
      for (const code of codes) {
        const diagram = code.textContent ?? '';
        const id = `${idPrefix}-${index++}`;
        try {
          const { svg } = await mermaid.render(id, diagram);
          const pre = code.closest('pre');
          if (pre) {
            pre.outerHTML = `<div class="project-mermaid">${svg}</div>`;
          }
        } catch (error) {
          console.error('Failed to render mermaid diagram:', error);
        }
      }
    })();
  }, [html, idPrefix, preview]);

  if (preview) {
    return (
      <div
        ref={bodyRef}
        className="project-markdown-body project-markdown-preview"
      />
    );
  }

  return (
    <div
      ref={bodyRef}
      className="project-markdown-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
