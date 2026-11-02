import Link from 'next/link';
import type { Metadata } from 'next';
import { projects } from '@/lib/data/projects';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Todos los proyectos de Raúl Liébana: aplicaciones móviles, plataformas web y herramientas de automatización.',
};

export default function ProyectosPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="section-number mb-6">Proyectos</p>
          <div className="editorial-rule mb-16" />

          <h1 className="font-serif text-5xl lg:text-7xl text-ink leading-tight mb-20">
            Todo el trabajo<span className="text-red italic">.</span>
          </h1>

          <div className="flex flex-col gap-px bg-warm-gray">
            {projects
              .sort((a, b) => a.order - b.order)
              .map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/${project.slug}`}
                  className="group bg-ivory hover:bg-ivory-dark transition-colors duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-8 lg:p-10">
                    <div className="lg:col-span-1 flex items-start pt-1">
                      <span className="font-mono text-xs text-muted tracking-wider">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
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
                      <h2 className="font-serif text-3xl lg:text-4xl text-ink group-hover:text-red transition-colors duration-200 mb-3">
                        {project.name}
                      </h2>
                      <p className="font-sans text-base text-muted leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>
                    <div className="lg:col-span-4 flex flex-col justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs text-ink-soft bg-warm-gray px-2 py-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="font-mono text-xs text-muted mt-4">{project.year}</p>
                    </div>
                    <div className="lg:col-span-1 flex items-center justify-end">
                      <span className="text-muted group-hover:text-red group-hover:translate-x-1 transition-all duration-200 text-lg">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

