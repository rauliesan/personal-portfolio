import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Página no encontrada',
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="text-center">
          <p className="font-mono text-xs text-muted tracking-widest mb-6">404</p>
          <h1 className="font-serif text-6xl lg:text-8xl text-ink mb-6">
            No encontrado<span className="text-red">.</span>
          </h1>
          <p className="font-sans text-base text-muted mb-10">
            Esta página no existe o ha sido movida.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-ink text-ivory font-sans text-sm font-medium px-6 py-3 hover:bg-ink-soft transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

