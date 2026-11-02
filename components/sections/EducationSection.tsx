import { profile } from '@/lib/data/profile';

export default function EducationSection() {
  return (
    <section
      id="formacion"
      className="py-24 lg:py-32 px-6 lg:px-12"
      aria-labelledby="education-heading"
    >
      <div className="max-w-7xl mx-auto">
        <p className="section-number mb-6">06 — Formación</p>
        <div className="editorial-rule mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2
              id="education-heading"
              className="font-serif text-4xl lg:text-5xl text-ink leading-tight"
            >
              Base
              <span className="text-red italic"> académica</span>.
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-px bg-warm-gray">
            {profile.education.map((edu, i) => (
              <div key={i} className="bg-ivory p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="font-mono text-xs text-muted tracking-wide">{edu.period}</p>
                  <p className="font-mono text-xs text-muted mt-0.5">{edu.type}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-serif text-xl text-ink mb-1">{edu.degree}</h3>
                  <p className="font-sans text-sm text-muted">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

