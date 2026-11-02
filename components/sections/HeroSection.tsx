import Link from 'next/link';
import { profile } from '@/lib/data/profile';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 lg:px-12"
      aria-labelledby="hero-heading"
    >
      {/* Línea roja vertical izquierda */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px bg-red hidden lg:block"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full">
        {/* Número de sección */}
        <p className="section-number mb-8">01 — Presentación</p>

        {/* Grid asimétrico: nombre grande + descripción */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          {/* Nombre en serif editorial grande */}
          <div className="lg:col-span-8">
            <h1
              id="hero-heading"
              className="font-serif text-[clamp(3rem,10vw,8rem)] leading-[0.9] text-ink tracking-tight"
            >
              Raúl
              <br />
              <span className="text-red italic">Liébana</span>
              <br />
              Sánchez
            </h1>
          </div>

          {/* Posicionamiento + CTAs */}
          <div className="lg:col-span-4 flex flex-col gap-8 pb-3">
            <div>
              <p className="font-sans text-lg font-light text-ink-soft leading-relaxed mb-2">
                Software Developer
              </p>
              <p className="font-sans text-base text-muted leading-relaxed">
                Backend, automatización y producto digital. Java, Spring Boot, Python, FastAPI.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/#proyectos"
                className="inline-flex items-center justify-center gap-2 bg-ink text-ivory font-sans text-sm font-medium px-6 py-3 hover:bg-ink-soft transition-colors duration-200"
              >
                Ver proyectos
                <ArrowDown />
              </Link>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-warm-gray text-ink font-sans text-sm font-medium px-6 py-3 hover:border-ink transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria inferior */}
        <div className="editorial-rule mt-16 lg:mt-20" />

        {/* Datos rápidos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
          {[
            { label: 'Experiencia', value: '+10 meses' },
            { label: 'Proyectos activos', value: '2' },
            { label: 'Especialidad', value: 'Backend' },
            { label: 'Formación', value: 'DAW + IA' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-mono text-xs text-muted tracking-wide mb-1">{label}</p>
              <p className="font-serif text-xl text-ink">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

