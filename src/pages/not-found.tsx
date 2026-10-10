// not-found.tsx — Página 404 (no encontrada)
// noindex para que Google no la indexe.
// Ofrece enlaces a las páginas principales del sitio.

import { ArrowUpRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PageLayout } from '../components/PageLayout';

export default function NotFound() {
  return (
    <PageLayout>
      <SEO
        title="Página no encontrada | Eminencia Industrial"
        description="La página que buscas no existe. Vuelve al inicio de Eminencia Industrial."
        canonical="/404"
        noindex
      />

      <div className="pt-[112px]" />

      <section className="bg-[#17212c] min-h-[70vh] py-24 text-[#f3f0e8] flex items-center">
        <div className="section-shell text-center">
          <p className="font-mono text-[#e5d00e] text-sm uppercase tracking-[.2em]">Error 404</p>
          <h1 className="mt-4 font-display text-[clamp(3rem,8vw,6rem)] font-bold leading-none tracking-tight">
            Página no<br />
            <span className="text-[#e5d00e]">encontrada.</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-base leading-7 text-[#bdc4c9]">
            La página que buscas no existe o fue movida. Usa los enlaces de abajo para volver al sitio.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 bg-[#e5d00e] px-8 text-sm font-bold text-[#17212c] transition-transform hover:-translate-y-1"
            >
              Ir al inicio <ArrowUpRight size={18} />
            </a>
            <a
              href="/proyectos"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 border border-[#bdc4c9]/40 px-8 text-sm font-semibold text-[#f3f0e8] transition-colors hover:border-[#e5d00e] hover:text-[#e5d00e]"
            >
              Ver proyectos
            </a>
          </div>

          {/* Navegación de servicios */}
          <nav aria-label="Páginas principales" className="mt-10 flex flex-wrap justify-center gap-4 text-xs text-[#8c979b]">
            <a href="/corte-laser" className="hover:text-[#e5d00e] transition-colors">Corte láser</a>
            <a href="/plegado-cnc" className="hover:text-[#e5d00e] transition-colors">Plegado CNC</a>
            <a href="/soldadura" className="hover:text-[#e5d00e] transition-colors">Soldadura</a>
          </nav>
        </div>
      </section>
    </PageLayout>
  );
}
