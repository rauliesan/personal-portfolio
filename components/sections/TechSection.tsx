import { profile } from '@/lib/data/profile';

export default function TechSection() {
  return (
    <section
      id="tecnologias"
      className="py-24 lg:py-32 px-6 lg:px-12 bg-ivory-dark"
      aria-labelledby="tech-heading"
    >
      <div className="max-w-7xl mx-auto">
        <p className="section-number mb-6">03 — Tecnologías</p>
        <div className="editorial-rule mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Título */}
          <div className="lg:col-span-4">
            <h2 id="tech-heading" className="font-serif text-4xl lg:text-5xl text-ink leading-tight">
              Herramientas con
              <span className="text-red italic"> las que trabajo</span>.
            </h2>
            <p className="font-sans text-sm text-muted mt-6 leading-relaxed">
              Distingo entre experiencia profesional directa, proyectos propios y tecnologías que
              estoy incorporando activamente.
            </p>
          </div>

          {/* Grid de áreas */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-warm-gray">
            {profile.technologies.map((area) => (
              <div key={area.area} className="bg-ivory p-6 lg:p-8">
                <p className="font-mono text-xs text-muted tracking-widest mb-5 uppercase">
                  {area.area}
                </p>
                <ul className="flex flex-col gap-4">
                  {area.items.map((item) => (
                    <li key={item.name} className="flex items-start justify-between gap-4">
                      <span className="font-sans text-sm font-medium text-ink">{item.name}</span>
                      <span className="font-mono text-xs text-muted text-right shrink-0">
                        {item.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

