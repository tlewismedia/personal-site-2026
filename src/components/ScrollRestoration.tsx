'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SCROLL_KEY = 'project-return-scroll-y';

export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;

    const savedY = sessionStorage.getItem(SCROLL_KEY);
    if (savedY === null) return;

    sessionStorage.removeItem(SCROLL_KEY);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: Number(savedY), behavior: 'auto' });
      });
    });
  }, [pathname]);

  return null;
}
