// PlegadoCNC.tsx — Página de servicio de Plegado CNC
// Ruta: /plegado-cnc
// Datos confirmados: plegadora CNC 125 toneladas, materiales: acero al carbono, inox, aluminio.

import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PageLayout } from '../components/PageLayout';
import { whatsappLink } from '../helpers';
import { galleryItems } from '../data';

const SERVICE_JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Plegado CNC de chapas metálicas',
    description:
      'Servicio de plegado CNC con plegadora de 125 toneladas para conformado y doblado de chapas de acero al carbono, acero inoxidable y aluminio en Santiago, Chile.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Eminencia Industrial',
      url: 'https://eminenciaindustrial.cl/',
      telephone: '+56995462522',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. María 6513',
        addressLocality: 'La Cisterna',
        addressRegion: 'Región Metropolitana',
        addressCountry: 'CL',
      },
    },
    areaServed: ['Región Metropolitana', 'Chile'],
    serviceType: 'Plegado CNC',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué capacidad tiene la plegadora CNC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Contamos con una plegadora CNC de 125 toneladas, lo que permite trabajar con chapas de acero al carbono, acero inoxidable y aluminio de distintos espesores.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué materiales pueden plegarse?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trabajamos con acero al carbono, acero inoxidable y aluminio para conformado y doblado de chapas.',
        },
      },
      {
        '@type': 'Question',
        name: '¿El plegado CNC mantiene tolerancias precisas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, el plegado CNC permite repetibilidad y precisión en el ángulo de doblado, garantizando que cada pieza cumpla con las especificaciones del plano técnico.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Puedo pedir plegado junto con corte láser?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Ofrecemos la cadena completa: corte láser, plegado CNC y soldadura en el mismo taller. Cotiza en un solo paso por WhatsApp o correo.',
        },
      },
    ],
  },
];

const plegadoImages = galleryItems.filter((g) => g.category === 'Plegado').slice(0, 4);

export default function PlegadoCNC() {
  return (
    <PageLayout>
      <SEO
        title="Plegado CNC en Santiago | Plegadora 125T | Eminencia Industrial"
        description="Plegado CNC con plegadora de 125 toneladas para acero al carbono, inoxidable y aluminio en Santiago. Gabinetes, soportes y estructuras. Cotiza por WhatsApp."
        canonical="/plegado-cnc"
        image="/imagenes/plegado-hero.jpg"
        jsonLd={SERVICE_JSONLD}
      />

      <div className="pt-[112px]" />

      {/* ── HERO ── */}
      <section className="bg-[#17212c] py-20 text-[#f3f0e8] md:py-28">
        <div className="section-shell">
          <p className="eyebrow mb-4 flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-[#e5d00e]" /> Servicio 02
          </p>
          <h1 className="max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-tight tracking-tight">
            Plegado CNC de chapas metálicas en{' '}
            <span className="text-[#e5d00e]">Santiago</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#bdc4c9] md:text-lg">
            Nuestra plegadora CNC de <strong className="text-[#f3f0e8]">125 toneladas</strong> da forma a
            chapas de acero al carbono, acero inoxidable y aluminio con precisión de ángulo repetible.
            Ideal para gabinetes, soportes, carcasas y estructuras a medida.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink('Hola, quiero cotizar un trabajo de plegado CNC.')}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 bg-[#e5d00e] px-6 text-sm font-bold text-[#17212c] transition-transform hover:-translate-y-1"
            >
              Cotizar por WhatsApp <ArrowUpRight size={18} />
            </a>
            <a
              href="/proyectos"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 border border-[#bdc4c9]/40 px-6 text-sm font-semibold text-[#f3f0e8] transition-colors hover:border-[#e5d00e] hover:text-[#e5d00e]"
            >
              Ver proyectos realizados
            </a>
          </div>
        </div>
      </section>

      {/* ── DESCRIPCIÓN ── */}
      <section className="bg-[#f1efe8] py-20 md:py-28">
        <div className="section-shell grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#17212c] md:text-4xl">
              Conformado de chapa con plegadora CNC de 125 toneladas
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#58636b]">
              El plegado CNC consiste en doblar una chapa metálica aplicando fuerza controlada mediante un
              punzón y una matriz. Con el control numérico, se programa el ángulo, la posición de la
              curvatura y la secuencia de pliegues para obtener resultados precisos y repetibles, sin
              importar si es una pieza o cien.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#58636b]">
              La plegadora CNC de <strong>125 toneladas</strong> de Eminencia Industrial permite
              trabajar con chapas de acero al carbono, acero inoxidable y aluminio. Es el equipo
              adecuado para fabricar gabinetes eléctricos, carcasas de protección, soportes estructurales,
              canales, perfiles y desarrollos a medida que luego pueden soldarse o ensamblarse.
            </p>

            <h3 className="mt-8 font-display text-xl font-bold text-[#17212c]">
              Materiales que trabajamos
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#58636b]">
              {[
                'Acero al carbono',
                'Acero inoxidable',
                'Aluminio',
              ].map((mat) => (
                <li key={mat} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="shrink-0 text-[#e5d00e]" /> {mat}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-xl font-bold text-[#17212c]">
              Proyectos típicos de plegado CNC
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#58636b]">
              Gabinetes industriales, tapas y carcasas de maquinaria, soportes con pliegues en U o Z,
              canales de cable, perfiles de acabado, refuerzos y todo componente que requiera formas
              tridimensionales obtenidas por doblado de chapa plana. Trabajamos tanto con planos técnicos
              como con muestras físicas cuando es necesario.
            </p>
          </div>

          {/* Grilla de imágenes */}
          <div className="grid grid-cols-2 gap-3">
            {plegadoImages.map((img, i) => (
              <div key={img.image} className="overflow-hidden border border-[#c6c7c1]">
                <img
                  src={img.image}
                  alt={img.alt}
                  width="600"
                  height="450"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#e9e7df] py-20 md:py-28">
        <div className="section-shell max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-[#17212c]">
            Preguntas frecuentes sobre plegado CNC
          </h2>
          <dl className="mt-10 space-y-8">
            {[
              {
                q: '¿Qué capacidad tiene la plegadora CNC?',
                a: 'Contamos con una plegadora CNC de 125 toneladas. Esta capacidad permite conformar chapas de acero al carbono, acero inoxidable y aluminio con precisión de ángulo repetible.',
              },
              {
                q: '¿Qué materiales pueden plegarse?',
                a: 'Trabajamos con acero al carbono, acero inoxidable y aluminio para el conformado y doblado de chapas.',
              },
              {
                q: '¿El plegado CNC mantiene tolerancias precisas?',
                a: 'Sí. El control numérico garantiza repetibilidad en el ángulo de doblado, asegurando que cada pieza cumpla con las especificaciones del plano.',
              },
              {
                q: '¿Puedo pedir plegado junto con corte láser?',
                a: 'Sí. Ofrecemos la cadena completa en un solo taller: corte láser de fibra, plegado CNC y soldadura. Cotiza todo en un solo mensaje.',
              },
              {
                q: '¿Cómo cotizo un trabajo de plegado?',
                a: 'Escríbenos por WhatsApp al +56 9 9546 2522 o a EminenciaIndustrial@gmail.com de lunes a viernes de 8:00 a 18:00. Comparte las medidas, el material y la cantidad.',
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <dt className="font-display text-lg font-bold text-[#17212c]">{q}</dt>
                <dd className="mt-2 text-sm leading-7 text-[#58636b]">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section className="bg-[#17212c] py-16 text-[#f3f0e8]">
        <div className="section-shell flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl font-bold">¿Necesitas chapas plegadas a medida?</h2>
          <p className="max-w-xl text-sm leading-7 text-[#bdc4c9]">
            Comparte el material, las medidas y la cantidad. Respondemos de lunes a viernes de 8:00 a 18:00.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink('Hola, quiero cotizar un trabajo de plegado CNC.')}
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
          <nav aria-label="Otros servicios" className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-[#8c979b]">
            <a href="/corte-laser" className="hover:text-[#e5d00e] transition-colors">→ Corte láser</a>
            <a href="/soldadura" className="hover:text-[#e5d00e] transition-colors">→ Soldadura</a>
            <a href="/proyectos" className="hover:text-[#e5d00e] transition-colors">→ Proyectos</a>
            <a href="/" className="hover:text-[#e5d00e] transition-colors">→ Inicio</a>
          </nav>
        </div>
      </section>
    </PageLayout>
  );
}
