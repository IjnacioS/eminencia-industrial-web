// Proyectos.tsx — Página de galería completa de proyectos
// Ruta: /proyectos
// Muestra grilla real con TODAS las imágenes de la categoría "Proyectos"
// más un resumen de los servicios utilizados en cada proyecto.

import { ArrowUpRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PageLayout } from '../components/PageLayout';
import { whatsappLink } from '../helpers';
import { galleryItems } from '../data';

const PROJECT_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Proyectos de fabricación metálica | Eminencia Industrial',
  description:
    'Galería de proyectos realizados por Eminencia Industrial: estructuras metálicas, mesas industriales, bastidores y ensambles fabricados con corte láser, plegado CNC y soldadura en Santiago.',
  url: 'https://eminenciaindustrial.cl/proyectos',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Eminencia Industrial',
    url: 'https://eminenciaindustrial.cl/',
  },
};

// Todas las imágenes de todas las categorías para la grilla completa
const allProjectImages = galleryItems.filter((g) => g.category === 'Proyectos');
const allLaserImages = galleryItems.filter((g) => g.category === 'Corte láser').slice(0, 6);
const allPlegadoImages = galleryItems.filter((g) => g.category === 'Plegado').slice(0, 6);

export default function Proyectos() {
  return (
    <PageLayout>
      <SEO
        title="Proyectos de fabricación metálica en Santiago | Eminencia Industrial"
        description="Galería de proyectos de corte láser, plegado CNC y soldadura de estructuras en Santiago. Ver trabajos realizados en acero y aluminio. Cotiza por WhatsApp."
        canonical="/proyectos"
        image="/imagenes/cortelaser-hero.jpg"
        jsonLd={PROJECT_JSONLD}
      />

      <div className="pt-[112px]" />

      {/* ── HERO ── */}
      <section className="bg-[#17212c] py-20 text-[#f3f0e8] md:py-28">
        <div className="section-shell">
          <p className="eyebrow mb-4 flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-[#e5d00e]" /> Galería de trabajos
          </p>
          <h1 className="max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-tight tracking-tight">
            Proyectos de fabricación metálica en{' '}
            <span className="text-[#e5d00e]">Santiago</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#bdc4c9] md:text-lg">
            Muestra real de proyectos terminados: estructuras soldadas, piezas cortadas a láser,
            chapas plegadas y ensambles industriales fabricados en nuestro taller de La Cisterna, Santiago.
          </p>
          <a
            href={whatsappLink('Hola, vi los proyectos y quiero cotizar algo similar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 focus-ring inline-flex min-h-14 items-center justify-center gap-3 bg-[#e5d00e] px-6 text-sm font-bold text-[#17212c] transition-transform hover:-translate-y-1"
          >
            Cotizar un proyecto similar <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* ── SECCIÓN: Proyectos de estructuras y ensambles ── */}
      <section className="bg-[#f1efe8] py-20 md:py-28">
        <div className="section-shell">
          <h2 className="font-display text-3xl font-bold text-[#17212c] md:text-4xl">
            Estructuras y ensambles metálicos
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#58636b]">
            Proyectos que combinan corte láser, plegado CNC y soldadura para fabricar estructuras
            completas: bastidores, mesas de trabajo, soportes y jaulas de protección en acero al
            carbono, acero inoxidable y aluminio.
          </p>

          {/* Grilla real — todas las imágenes en el DOM */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allProjectImages.map((img, i) => (
              <article key={img.image} className="overflow-hidden border border-[#c6c7c1] bg-white group">
                <div className="overflow-hidden">
                  <img
                    src={img.image}
                    alt={img.alt}
                    width="800"
                    height="600"
                    loading={i < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-[#17212c]">{img.title}</h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#e5d00e]">
                    {img.meta}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-[#58636b]">{img.alt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: Corte láser ── */}
      <section className="bg-[#e9e7df] py-20 md:py-28">
        <div className="section-shell">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="font-display text-3xl font-bold text-[#17212c] md:text-4xl">
                Trabajos de corte láser
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#58636b]">
                Piezas, discos, planchas y componentes cortados con láser de fibra en acero al carbono,
                acero inoxidable y aluminio de 1 a 12 mm.
              </p>
            </div>
            <a
              href="/corte-laser"
              className="focus-ring inline-flex items-center gap-2 border border-[#b9bbb5] bg-[#f1efe8] px-5 py-3 text-sm font-bold text-[#17212c] transition-all hover:border-[#e5d00e] shrink-0"
            >
              Ver servicio de corte láser <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allLaserImages.map((img, i) => (
              <article key={img.image} className="overflow-hidden border border-[#c6c7c1] bg-white group">
                <div className="overflow-hidden">
                  <img
                    src={img.image}
                    alt={img.alt}
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-bold text-[#17212c]">{img.title}</h3>
                  <p className="mt-1 text-xs text-[#58636b]">{img.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: Plegado ── */}
      <section className="bg-[#f1efe8] py-20 md:py-28">
        <div className="section-shell">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="font-display text-3xl font-bold text-[#17212c] md:text-4xl">
                Trabajos de plegado CNC
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#58636b]">
                Chapas conformadas con plegadora CNC de 125 toneladas para gabinetes, soportes y
                componentes con ángulos precisos.
              </p>
            </div>
            <a
              href="/plegado-cnc"
              className="focus-ring inline-flex items-center gap-2 border border-[#b9bbb5] bg-[#f1efe8] px-5 py-3 text-sm font-bold text-[#17212c] transition-all hover:border-[#e5d00e] shrink-0"
            >
              Ver servicio de plegado <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allPlegadoImages.map((img) => (
              <article key={img.image} className="overflow-hidden border border-[#c6c7c1] bg-white group">
                <div className="overflow-hidden">
                  <img
                    src={img.image}
                    alt={img.alt}
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-bold text-[#17212c]">{img.title}</h3>
                  <p className="mt-1 text-xs text-[#58636b]">{img.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section className="bg-[#17212c] py-16 text-[#f3f0e8]">
        <div className="section-shell flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl font-bold">
            ¿Quieres fabricar algo parecido?
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[#bdc4c9]">
            Cuéntanos el material, las medidas y la cantidad. Cotizamos corte láser, plegado CNC y soldadura
            de lunes a viernes de 8:00 a 18:00.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink('Hola, vi los proyectos y quiero cotizar algo similar.')}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 bg-[#e5d00e] px-8 text-sm font-bold text-[#17212c] transition-transform hover:-translate-y-1"
            >
              Cotizar por WhatsApp <ArrowUpRight size={18} />
            </a>
            <a
              href="mailto:EminenciaIndustrial@gmail.com"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 border border-[#bdc4c9]/40 px-8 text-sm font-semibold text-[#f3f0e8] transition-colors hover:border-[#e5d00e] hover:text-[#e5d00e]"
            >
              Enviar correo
            </a>
          </div>
          <nav aria-label="Servicios disponibles" className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-[#8c979b]">
            <a href="/corte-laser" className="hover:text-[#e5d00e] transition-colors">→ Corte láser</a>
            <a href="/plegado-cnc" className="hover:text-[#e5d00e] transition-colors">→ Plegado CNC</a>
            <a href="/soldadura" className="hover:text-[#e5d00e] transition-colors">→ Soldadura</a>
            <a href="/" className="hover:text-[#e5d00e] transition-colors">→ Inicio</a>
          </nav>
        </div>
      </section>
    </PageLayout>
  );
}
