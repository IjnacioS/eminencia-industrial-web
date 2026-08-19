// Hero.tsx — Sección de inicio (Hero)
// Es lo primero que se ve al abrir el sitio. Contiene el título principal
// y un grid de 4 imágenes placeholder que deben reemplazarse por fotos reales de:
// 1) Corte láser  2) Soldadura  3) Plegado de metales  4) Planimetría 3D

import { ArrowUpRight, ArrowDownRight, ShieldCheck, ImageIcon } from 'lucide-react';
import { whatsappLink } from '../helpers';

// Etiquetas de las 4 imágenes placeholder del hero
const heroImages = [
  { label: 'Corte láser', alt: 'Foto placeholder para corte láser' },
  { label: 'Soldadura', alt: 'Foto placeholder para soldadura' },
  { label: 'Plegado de metales', alt: 'Foto placeholder para plegado de metales' },
  { label: 'Planimetría 3D', alt: 'Foto placeholder para planimetría 3D' },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#17212c] pt-[112px] text-[#f3f0e8]">
      {/* Fondo decorativo: grilla de líneas y resplandor amarillo */}
      <div className="absolute inset-0 opacity-25 hero-grid" />
      <div className="absolute right-[-12%] top-20 h-[520px] w-[520px] rounded-full bg-[#e5d00e]/10 blur-3xl" />

      {/* Contenido principal: texto a la izquierda, grid de 4 fotos a la derecha */}
      <div className="hero-layout section-shell relative grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">

        {/* Columna izquierda: título, subtexto y botones de acción */}
        <div className="reveal">
          <p className="eyebrow mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-[#e5d00e]" /> Fabricación digital en Chile
          </p>

          {/* Título principal del sitio (único h1 de toda la página) */}
          <h1 className="max-w-[720px] font-display text-[clamp(2.9rem,7.2vw,6.3rem)] font-bold leading-[.92] tracking-[-.07em]">
            Ingeniería en corte láser, plegado, soldadura y proyectos en{' '}
            <span className="text-[#e5d00e]">general.</span>
          </h1>

          <p className="mt-8 max-w-[570px] text-base leading-7 text-[#bdc4c9] md:text-lg">
            Procesamos acero, acero inoxidable, aluminio y acrílico con rapidez, precisión y atención directa para que tu proyecto encaje a la primera.
          </p>

          {/* Botones principales de acción */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink('Hola, quiero consultar por un proyecto de corte o plegado.')}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 bg-[#e5d00e] px-6 text-sm font-bold text-[#17212c] transition-transform hover:-translate-y-1"
              data-testid="link-hero-whatsapp"
            >
              Hablemos de tu proyecto <ArrowUpRight size={18} />
            </a>
            <a
              href="#galeria"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 border border-[#bdc4c9]/40 px-6 text-sm font-semibold text-[#f3f0e8] transition-colors hover:border-[#e5d00e] hover:text-[#e5d00e]"
              data-testid="link-hero-gallery"
            >
              Ver trabajos <ArrowDownRight size={17} />
            </a>
          </div>

          {/* Sello de confianza debajo de los botones */}
          <div className="mt-12 flex items-center gap-3 text-xs text-[#bdc4c9]">
            <ShieldCheck size={18} className="text-[#e5d00e]" /> Calidad de taller, trato directo.
          </div>
        </div>

        {/* Columna derecha: grid 2×2 de imágenes placeholder */}
        <div className="hero-grid-images reveal reveal-delay-2">
          {heroImages.map((img) => (
            <div key={img.label} className="hero-grid-cell" role="img" aria-label={img.alt}>
              <ImageIcon size={32} className="text-[#e5d00e]/60" />
              <span className="hero-grid-label">{img.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
