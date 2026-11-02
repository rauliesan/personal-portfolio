import Link from 'next/link';
import { profile } from '@/lib/data/profile';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-warm-gray bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <Link href="/" className="font-serif text-lg text-ink hover:text-red transition-colors">
            Raúl Liébana
          </Link>
          <p className="font-mono text-xs text-muted mt-1 tracking-wide">
            Software Developer · {year}
          </p>
        </div>

        <nav className="flex items-center gap-6" aria-label="Enlaces de pie de página">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-ink transition-colors tracking-wide"
          >
            GitHub
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-ink transition-colors tracking-wide"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="font-mono text-xs text-muted hover:text-ink transition-colors tracking-wide"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
