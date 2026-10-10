// Hero.tsx — Sección de inicio (Hero)
// H1 optimizado para SEO: "Corte láser y plegado CNC en Santiago"
// Las frases "Piezas que hablan por sí solas" y "Del plano a la pieza" quedan como subtítulos (p)

import { ArrowUpRight, ArrowDownRight, ShieldCheck, Truck } from 'lucide-react';
import { whatsappLink } from '../helpers';

// Etiquetas de las 4 imágenes del hero — primera sin lazy (LCP), resto con lazy
const heroImages = [
  {
    label: 'Corte láser',
    alt: 'Corte láser de precisión en acero, aluminio e inoxidable — Eminencia Industrial',
    image: '/imagenes/cortelaser-hero.jpg',
    priority: true,
  },
  {
    label: 'Soldadura',
    alt: 'Soldadura industrial TIG y MIG de estructuras metálicas en Santiago',
    image: '/imagenes/soldadura-hero.jpg',
    priority: false,
  },
  {
    label: 'Plegado de metales',
    alt: 'Plegado CNC de planchas metálicas con plegadora de 125 toneladas',
    image: '/imagenes/plegado-hero.jpg',
    priority: false,
  },
  {
    label: 'Planimetría 3D',
    alt: 'Planimetría y modelado técnico 3D para proyectos de fabricación industrial',
    image: '/imagenes/planimetria-hero.jpg',
    priority: false,
  },
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
            <span className="inline-block h-px w-10 bg-[#e5d00e]" /> Fabricación digital en Santiago, Chile
          </p>

          {/* H1 optimizado para SEO — único H1 de la home */}
          <h1 className="max-w-[720px] font-display text-[clamp(2.9rem,7.2vw,6.3rem)] font-bold leading-[.92] tracking-[-.07em]">
            Corte láser y plegado CNC en{' '}
            <span className="text-[#e5d00e]">Santiago.</span>
          </h1>

          {/* Subtítulos: frases de marca como párrafos, NO como H1 */}
          <p className="mt-5 font-display text-xl font-semibold text-[#bdc4c9] md:text-2xl">
            Piezas que hablan por sí solas.
          </p>

          <p className="mt-4 max-w-[570px] text-base leading-7 text-[#bdc4c9] md:text-lg">
            Procesamos acero al carbono, acero inoxidable y aluminio de 1 a 12 mm con rapidez,
            precisión y atención directa para que tu proyecto quede perfecto.
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

          {/* Sellos de confianza */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-xs text-[#bdc4c9]">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-[#e5d00e]" /> Calidad de taller, trato directo.
            </div>
            <div className="flex items-center gap-2">
              <Truck size={18} className="text-[#e5d00e]" /> Envíos en todo Santiago.
            </div>
          </div>
        </div>

        {/* Columna derecha: grid 2×2 de imágenes */}
        <div className="hero-grid-images reveal reveal-delay-2">
          {heroImages.map((img) => (
            <div
              key={img.label}
              className="hero-grid-cell group relative overflow-hidden"
            >
              <img
                src={img.image}
                alt={img.alt}
                width="800"
                height="600"
                loading={img.priority ? 'eager' : 'lazy'}
                decoding={img.priority ? 'sync' : 'async'}
                fetchPriority={img.priority ? 'high' : 'auto'}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay degradado oscuro para garantizar legibilidad óptima */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111a23]/90 via-[#111a23]/60 to-transparent px-3 py-2.5 pt-8 text-left">
                <span className="hero-grid-label inline-block">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}