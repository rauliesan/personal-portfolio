import { profile } from '@/lib/data/profile';

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="py-24 lg:py-40 px-6 lg:px-12 bg-ink text-ivory"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-warm-gray tracking-widest mb-6 uppercase">
          07 — Contacto
        </p>
        <div className="w-full h-px bg-warm-gray-dark mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h2
              id="contact-heading"
              className="font-serif text-5xl lg:text-7xl text-ivory leading-tight mb-8"
            >
              Hablemos
              <span className="text-red italic">.</span>
            </h2>
            <p className="font-sans text-base text-warm-gray leading-relaxed max-w-xl">
              Si tienes un proyecto interesante, una oportunidad o simplemente quieres conectar,
              puedes escribirme. Leo todos los mensajes.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Email */}
            <a
              href={`mailto:${profile.contact.email}`}
              className="group flex items-center justify-between border border-warm-gray-dark px-6 py-4 hover:border-ivory transition-colors duration-200"
            >
              <div>
                <p className="font-mono text-xs text-warm-gray tracking-wide mb-1">Email</p>
                <p className="font-sans text-sm text-ivory">{profile.contact.email}</p>
              </div>
              <span className="text-warm-gray group-hover:text-ivory group-hover:translate-x-1 transition-all duration-200">
                →
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-warm-gray-dark px-6 py-4 hover:border-ivory transition-colors duration-200"
            >
              <div>
                <p className="font-mono text-xs text-warm-gray tracking-wide mb-1">LinkedIn</p>
                <p className="font-sans text-sm text-ivory">Raúl Liébana Sánchez</p>
              </div>
              <span className="text-warm-gray group-hover:text-ivory group-hover:translate-x-1 transition-all duration-200">
                ↗
              </span>
            </a>

            {/* GitHub */}
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-warm-gray-dark px-6 py-4 hover:border-ivory transition-colors duration-200"
            >
              <div>
                <p className="font-mono text-xs text-warm-gray tracking-wide mb-1">GitHub</p>
                <p className="font-sans text-sm text-ivory">@rauliesan</p>
              </div>
              <span className="text-warm-gray group-hover:text-ivory group-hover:translate-x-1 transition-all duration-200">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

