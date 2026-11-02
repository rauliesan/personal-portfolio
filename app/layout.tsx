import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rauliebana.dev'),
  title: {
    default: 'Raúl Liébana — Software Developer',
    template: '%s | Raúl Liébana',
  },
  description:
    'Software developer especializado en backend, automatización y producto digital. Java, Spring Boot, Python, FastAPI.',
  keywords: ['desarrollador', 'backend', 'java', 'spring boot', 'python', 'automatización', 'rpa'],
  authors: [{ name: 'Raúl Liébana Sánchez' }],
  creator: 'Raúl Liébana Sánchez',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://rauliebana.dev',
    siteName: 'Raúl Liébana',
    title: 'Raúl Liébana — Software Developer',
    description:
      'Software developer especializado en backend, automatización y producto digital.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Raúl Liébana — Software Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raúl Liébana — Software Developer',
    description: 'Software developer especializado en backend, automatización y producto digital.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${dmSerifDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-ivory text-ink antialiased">{children}</body>
    </html>
  );
}
