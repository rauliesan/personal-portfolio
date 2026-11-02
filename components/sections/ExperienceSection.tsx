import { profile } from '@/lib/data/profile';

export default function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="py-24 lg:py-32 px-6 lg:px-12 bg-ivory-dark"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto">
        <p className="section-number mb-6">05 — Experiencia</p>
        <div className="editorial-rule mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2
              id="experience-heading"
              className="font-serif text-4xl lg:text-5xl text-ink leading-tight"
            >
              Trayectoria
              <span className="text-red italic"> profesional</span>.
            </h2>
          </div>

          <div className="lg:col-span-8">
            {/* Línea temporal */}
            <div className="relative">
              {/* Línea vertical */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-warm-gray" aria-hidden="true" />

              <div className="flex flex-col gap-12">
                {profile.experience.map((exp, i) => (
                  <div key={i} className="relative pl-8">
                    {/* Punto */}
                    <div
                      className="absolute left-0 top-1 w-2 h-2 rounded-full bg-ink -translate-x-[calc(50%-0.5px)]"
                      aria-hidden="true"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Fechas */}
                      <div>
                        <p className="font-mono text-xs text-muted tracking-wide">{exp.period}</p>
                        <p className="font-mono text-xs text-muted mt-0.5">{exp.duration}</p>
                      </div>

                      {/* Contenido */}
                      <div className="md:col-span-2">
                        <div className="flex items-start flex-wrap gap-2 mb-2">
                          <h3 className="font-serif text-xl text-ink">{exp.role}</h3>
                          <span className="font-mono text-xs text-muted bg-warm-gray px-2 py-0.5 self-center">
                            {exp.type}
                          </span>
                        </div>
                        <p className="font-sans text-sm font-medium text-ink-soft mb-1">
                          {exp.company} · {exp.location}
                        </p>
                        <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="font-mono text-xs text-ink-soft border border-warm-gray px-2 py-0.5"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

