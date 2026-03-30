import type { Metadata } from 'next';
import './globals.css';
import { ScrollRestoration } from '@/components/ScrollRestoration';

export const metadata: Metadata = {
  title: 'Tom Lewis — Front-End Engineer',
  description:
    'Product-minded front-end engineer building clean, reliable, and human-centered digital experiences.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <div id="root">
          <ScrollRestoration />
          {children}
        </div>
      </body>
    </html>
  );
}
