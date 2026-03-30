'use client';

import { useEffect } from 'react';

export function ScrollReveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'));
    const scrollBlocks = sections
      .slice(1)
      .flatMap((section) => Array.from(section.children));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    scrollBlocks.forEach((block) => {
      block.classList.add('reveal-on-scroll');
      observer.observe(block);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}
