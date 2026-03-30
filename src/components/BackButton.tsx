'use client';

import { useRouter } from 'next/navigation';

export function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      className="project-back-button"
      onClick={() => router.push('/')}
    >
      Back to main page
    </button>
  );
}
