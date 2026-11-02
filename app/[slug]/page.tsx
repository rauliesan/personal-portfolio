import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProjectBySlug, getPrevNextProjects, projects } from '@/lib/data/projects';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Genera las rutas estáticas para todos los proyectos
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// SEO por proyecto
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.seo.title,
    description: project.seo.description,
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      images: [{ url: project.images.cover }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getPrevNextProjects(slug);

  return (
    <>
      <Header />
      <main>
        {/* ── HERO DEL PROYECTO ── */}
        <section className="pt-32 pb-20 px-6 lg:px-12 relative">
          {/* Línea de acento vertical */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden lg:block"
            style={{ backgroundColor: project.accentColor }}
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-12">
              <Link
                href="/#proyectos"
                className="font-mono text-xs text-muted hover:text-ink transition-colors tracking-wide flex items-center gap-1"
              >
                ← Proyectos
              </Link>
              <span className="font-mono text-xs text-warm-gray">/</span>
              <span className="font-mono text-xs text-muted">{project.name}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                {/* Categoría + estado */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="font-mono text-xs tracking-wide px-2 py-0.5 border"
                    style={{ borderColor: project.accentColor, color: project.accentColor }}
                  >
                    {project.statusLabel}
                  </span>
                  <span className="font-mono text-xs text-muted">{project.category}</span>
                  <span className="font-mono text-xs text-muted">{project.year}</span>
                </div>

                {/* Título */}
                <h1 className="font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-ink tracking-tight mb-6">
                  {project.name}
                </h1>

                {/* Tagline */}
                <p className="font-serif text-xl lg:text-2xl text-ink-soft italic leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Tecnologías */}
              <div className="lg:col-span-4">
                <p className="section-number mb-4">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-ink-soft bg-warm-gray px-3 py-1.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3 mt-8">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-ink text-ivory font-sans text-sm font-medium px-5 py-2.5 hover:bg-ink-soft transition-colors"
                    >
                      Ver demo ↗
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-ink text-ink font-sans text-sm font-medium px-5 py-2.5 hover:bg-ink hover:text-ivory transition-colors"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── IMAGEN PORTADA ── */}
        <section className="px-6 lg:px-12 mb-0">
          <div className="max-w-7xl mx-auto">
            <div className="relative w-full aspect-[16/7] bg-ivory-dark overflow-hidden border border-warm-gray">
              {project.images.cover ? (
                <Image
                  src={project.images.cover}
                  alt={`Portada de ${project.name}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              ) : (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ backgroundColor: `${project.accentColor}10` }}
                >
                  <span
                    className="font-serif text-8xl font-normal"
                    style={{ color: `${project.accentColor}40` }}
                  >
                    {project.name[0]}
                  </span>
                  <span className="font-mono text-xs text-muted mt-4 uppercase tracking-widest">
                    {project.name} · Vista Previa de Arquitectura
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── DESCRIPCIÓN COMPLETA ── */}
        <section className="py-24 lg:py-32 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="editorial-rule mb-16" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <p className="section-number">El proyecto</p>
              </div>
              <div className="lg:col-span-7">
                <div className="flex flex-col gap-5">
                  {project.fullDescription.split('\n\n').map((para, i) => (
                    <p key={i} className="font-sans text-base text-ink-soft leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HIGHLIGHTS ── */}
        <section className="py-24 lg:py-32 px-6 lg:px-12 bg-ivory-dark">
          <div className="max-w-7xl mx-auto">
            <div className="editorial-rule mb-16" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <p className="section-number">Características</p>
              </div>
              <div className="lg:col-span-7">
                <ul className="flex flex-col gap-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-4 py-4 border-b border-warm-gray last:border-0">
                      <span
                        className="font-mono text-xs mt-1 shrink-0"
                        style={{ color: project.accentColor }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-sans text-sm text-ink-soft leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── GALERÍA ── */}
        {project.images.gallery && project.images.gallery.length > 0 && (
          <section className="py-24 lg:py-32 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <p className="section-number mb-8">Capturas</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.images.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[9/16] md:aspect-[3/5] bg-ivory-dark overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`Captura ${i + 1} de ${project.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── NAV ANTERIOR / SIGUIENTE ── */}
        <nav
          className="border-t border-warm-gray"
          aria-label="Navegación entre proyectos"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-2">
            {prev ? (
              <Link
                href={`/${prev.slug}`}
                className="group p-8 lg:p-12 border-r border-warm-gray hover:bg-ivory-dark transition-colors"
              >
                <p className="section-number mb-3">← Anterior</p>
                <p className="font-serif text-2xl lg:text-3xl text-ink group-hover:text-red transition-colors">
                  {prev.name}
                </p>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/${next.slug}`}
                className="group p-8 lg:p-12 text-right hover:bg-ivory-dark transition-colors"
              >
                <p className="section-number mb-3">Siguiente →</p>
                <p className="font-serif text-2xl lg:text-3xl text-ink group-hover:text-red transition-colors">
                  {next.name}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      </main>
      <Footer />
    </>
  );
}

