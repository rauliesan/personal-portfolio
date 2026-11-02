'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/#sobre-mi', label: 'Sobre mí' },
  { href: '/#proyectos', label: 'Proyectos' },
  { href: '/#experiencia', label: 'Experiencia' },
  { href: '/#contacto', label: 'Contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-warm-gray bg-ivory/95 backdrop-blur-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-lg text-ink hover:text-red transition-colors duration-200"
        >
          RL
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm font-medium text-muted hover:text-ink transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botón contacto desktop */}
        <Link
          href="/#contacto"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink border border-ink px-4 py-2 hover:bg-ink hover:text-ivory transition-all duration-200"
        >
          Contactar
        </Link>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Menú mobile */}
      {menuOpen && (
        <div className="md:hidden bg-ivory border-t border-warm-gray">
          <nav className="flex flex-col px-6 py-6 gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-2xl text-ink hover:text-red transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contacto"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink border border-ink px-4 py-2 w-fit hover:bg-ink hover:text-ivory transition-all duration-200 mt-2"
            >
              Contactar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

