import Image from 'next/image';
import { profile } from '@/lib/data/profile';

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="py-24 lg:py-32 px-6 lg:px-12"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <p className="section-number mb-6">02 — Sobre mí</p>
        <div className="editorial-rule mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Foto + datos rápidos */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Placeholder de foto */}
            <div className="relative aspect-[3/4] w-full max-w-xs bg-ivory-dark overflow-hidden border border-warm-gray">
              {/* Fallback visual con monograma editorial */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-ivory-dark p-6 text-center">
                <span className="font-serif text-6xl text-warm-gray-dark tracking-tighter">RL</span>
                <span className="font-mono text-xs text-muted mt-4 tracking-wider uppercase">
                  Espacio reservado
                </span>
                <span className="font-sans text-xs text-muted/70 mt-1">
                  Fotografía profesional
                </span>
              </div>
            </div>

            {/* Contacto rápido */}
            <div className="flex flex-col gap-3">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-muted hover:text-ink transition-colors flex items-center gap-2"
              >
                <span className="text-red">↗</span> GitHub
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-muted hover:text-ink transition-colors flex items-center gap-2"
              >
                <span className="text-red">↗</span> LinkedIn
              </a>
              <a
                href={`mailto:${profile.contact.email}`}
                className="font-mono text-sm text-muted hover:text-ink transition-colors flex items-center gap-2"
              >
                <span className="text-red">↗</span> {profile.contact.email}
              </a>
            </div>
          </div>

          {/* Texto sobre mí */}
          <div className="lg:col-span-8">
            <h2
              id="about-heading"
              className="font-serif text-4xl lg:text-5xl text-ink leading-tight mb-10"
            >
              Construyo soluciones que funcionan y que
              <span className="text-red italic"> se nota que han sido pensadas</span>.
            </h2>

            <div className="flex flex-col gap-5">
              {profile.about.split('\n\n').map((paragraph, i) => (
                <p key={i} className="font-sans text-base text-ink-soft leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Formación en curso */}
            <div className="mt-10 pt-8 border-t border-warm-gray">
              <p className="font-mono text-xs text-muted tracking-wide mb-4">
                Actualmente aprendiendo
              </p>
              <p className="font-serif text-xl text-ink">
                IA y Big Data —{' '}
                <span className="font-sans text-base text-muted font-light">
                  UTAMED, Universidad Online
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

