import Link from 'next/link';
import { getFeaturedProjects } from '@/lib/data/projects';

const STATUS_LABELS: Record<string, string> = {
  ready: 'Listo para publicar',
  'in-development': 'En desarrollo',
  archived: 'Archivado',
};

export default function ProjectsSection() {
  const projects = getFeaturedProjects();

  return (
    <section
      id="proyectos"
      className="py-24 lg:py-32 px-6 lg:px-12"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        <p className="section-number mb-6">04 — Proyectos</p>
        <div className="editorial-rule mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-6">
            <h2
              id="projects-heading"
              className="font-serif text-4xl lg:text-5xl text-ink leading-tight"
            >
              Trabajos que
              <span className="text-red italic"> demuestran el criterio</span>.
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="font-sans text-base text-muted leading-relaxed">
              Cada proyecto resuelve un problema real. El diseño y la implementación están pensados
              desde el principio, no añadidos al final.
            </p>
          </div>
        </div>

        {/* Lista de proyectos */}
        <div className="flex flex-col gap-px bg-warm-gray">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/${project.slug}`}
              className="group relative bg-ivory hover:bg-ivory-dark transition-colors duration-300"
              aria-label={`Ver proyecto ${project.name}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-8 lg:p-10">
                {/* Número */}
                <div className="lg:col-span-1 flex items-start pt-1">
                  <span className="font-mono text-xs text-muted tracking-wider">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Info principal */}
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="font-mono text-xs tracking-wide px-2 py-0.5 border"
                      style={{ borderColor: project.accentColor, color: project.accentColor }}
                    >
                      {project.statusLabel}
                    </span>
                    <span className="font-mono text-xs text-muted">{project.category}</span>
                  </div>
                  <h3 className="font-serif text-3xl lg:text-4xl text-ink group-hover:text-red transition-colors duration-200 mb-3">
                    {project.name}
                  </h3>
                  <p className="font-sans text-base text-muted leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tecnologías */}
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="font-mono text-xs text-ink-soft bg-warm-gray px-2 py-1"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <p className="font-mono text-xs text-muted mt-4">{project.year}</p>
                </div>

                {/* Arrow */}
                <div className="lg:col-span-1 flex items-center justify-end">
                  <span
                    className="text-muted group-hover:text-red group-hover:translate-x-1 transition-all duration-200 text-lg"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

