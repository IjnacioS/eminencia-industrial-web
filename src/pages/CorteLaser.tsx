// CorteLaser.tsx — Página de servicio de Corte Láser
// Ruta: /corte-laser
// Datos confirmados: láser de fibra 1-12 mm, materiales: acero al carbono, acero inox, aluminio.

import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PageLayout } from '../components/PageLayout';
import { whatsappLink } from '../helpers';
import { galleryItems } from '../data';

// JSON-LD Service + FAQPage para esta página
const SERVICE_JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Corte láser de fibra',
    description:
      'Servicio de corte láser de fibra para acero al carbono, acero inoxidable y aluminio de 1 a 12 mm de espesor. Alta precisión, bordes limpios y producción en serie o unidades en Santiago, Chile.',
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
    serviceType: 'Corte láser CNC',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué espesores puede cortar el láser de fibra?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nuestro láser de fibra corta metales de 1 a 12 mm de espesor, incluyendo acero al carbono, acero inoxidable y aluminio.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué materiales procesan con corte láser?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trabajamos con acero al carbono, acero inoxidable y aluminio. Todos de 1 a 12 mm de espesor.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo puedo cotizar un trabajo de corte láser?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Puedes contactarnos por WhatsApp al +56 9 9546 2522 o por correo a EminenciaIndustrial@gmail.com, de lunes a viernes de 8:00 a 18:00.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Hacen cortes de una sola pieza o solo en serie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trabajamos tanto piezas únicas como producción en serie. Contáctanos con tus medidas o planos para cotizar.',
        },
      },
    ],
  },
];

// Imágenes de la galería de "Corte láser" para mostrar en esta página
const laserImages = galleryItems.filter((g) => g.category === 'Corte láser').slice(0, 4);

export default function CorteLaser() {
  return (
    <PageLayout>
      <SEO
        title="Corte láser de fibra en Santiago | Eminencia Industrial"
        description="Corte láser de fibra para acero al carbono, inoxidable y aluminio de 1 a 12 mm en Santiago. Piezas únicas o en serie. Cotiza por WhatsApp al +56 9 9546 2522."
        canonical="/corte-laser"
        image="/imagenes/cortelaser-hero.jpg"
        jsonLd={SERVICE_JSONLD}
      />

      {/* Espaciado para compensar el header fijo */}
      <div className="pt-[112px]" />

      {/* ── HERO de la página ── */}
      <section className="bg-[#17212c] py-20 text-[#f3f0e8] md:py-28">
        <div className="section-shell">
          <p className="eyebrow mb-4 flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-[#e5d00e]" /> Servicio 01
          </p>
          {/* H1 único con la palabra clave principal */}
          <h1 className="max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-tight tracking-tight">
            Corte láser de fibra en{' '}
            <span className="text-[#e5d00e]">Santiago</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#bdc4c9] md:text-lg">
            Cortamos acero al carbono, acero inoxidable y aluminio con láser de fibra de alta potencia.
            Espesores de <strong className="text-[#f3f0e8]">1 a 12 mm</strong>, bordes limpios sin rebaba y
            tolerancias consistentes para piezas únicas o producción en serie.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink('Hola, quiero cotizar un trabajo de corte láser.')}
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

      {/* ── DESCRIPCIÓN DEL SERVICIO ── */}
      <section className="bg-[#f1efe8] py-20 md:py-28">
        <div className="section-shell grid gap-14 lg:grid-cols-2">
          <div>
            {/* H2 descriptivo */}
            <h2 className="font-display text-3xl font-bold text-[#17212c] md:text-4xl">
              ¿Qué es el corte láser de fibra?
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#58636b]">
              El láser de fibra es la tecnología de corte más precisa disponible para metales. Un haz de luz
              concentrado de alta potencia funde el material en la trayectoria programada, produciendo cortes
              limpios con mínima zona afectada por calor y sin necesidad de reproceso manual en la mayoría
              de los casos.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#58636b]">
              En Eminencia Industrial trabajamos con materiales de <strong>1 a 12 mm de espesor</strong>.
              Esto nos permite fabricar desde piezas de precisión delgadas hasta componentes estructurales
              de mayor grosor, todos con la misma calidad de borde.
            </p>

            {/* H3: Materiales compatibles */}
            <h3 className="mt-8 font-display text-xl font-bold text-[#17212c]">
              Materiales compatibles
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#58636b]">
              {['Acero al carbono (1–12 mm)', 'Acero inoxidable (1–12 mm)', 'Aluminio (1–12 mm)'].map(
                (mat) => (
                  <li key={mat} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="shrink-0 text-[#e5d00e]" /> {mat}
                  </li>
                ),
              )}
            </ul>

            {/* H3: Para qué tipo de proyectos */}
            <h3 className="mt-8 font-display text-xl font-bold text-[#17212c]">
              Para qué tipo de proyectos sirve
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#58636b]">
              El corte láser es ideal para piezas que requieren alta repetibilidad y precisión dimensional:
              soportes, planchas, flanges, tapas, carcasas, piezas de ensamble, perfiles y cualquier
              geometría que se pueda expresar en un plano técnico. También lo usamos como etapa previa al
              plegado CNC o a la soldadura estructural.
            </p>
          </div>

          {/* Grilla de imágenes del servicio */}
          <div className="grid grid-cols-2 gap-3">
            {laserImages.map((img, i) => (
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
            Preguntas frecuentes sobre corte láser
          </h2>
          <dl className="mt-10 space-y-8">
            {[
              {
                q: '¿Qué espesores puede cortar el láser de fibra?',
                a: 'Nuestro láser de fibra corta metales de 1 a 12 mm de espesor. Cubrimos acero al carbono, acero inoxidable y aluminio dentro de ese rango.',
              },
              {
                q: '¿Qué materiales procesan con corte láser?',
                a: 'Trabajamos con acero al carbono, acero inoxidable y aluminio, todos en espesores de 1 a 12 mm.',
              },
              {
                q: '¿Cómo puedo cotizar un trabajo de corte láser?',
                a: 'Contáctanos por WhatsApp al +56 9 9546 2522 o por correo a EminenciaIndustrial@gmail.com, de lunes a viernes de 8:00 a 18:00. Cuéntanos el material, espesor, cantidad y si tienes planos o medidas.',
              },
              {
                q: '¿Hacen cortes de una sola pieza o solo en serie?',
                a: 'Hacemos tanto piezas únicas como producciones en serie. Escríbenos con los detalles de tu proyecto y te entregamos una cotización.',
              },
              {
                q: '¿El corte láser incluye el plegado o la soldadura?',
                a: 'El corte láser es un servicio independiente, pero también ofrecemos plegado CNC y soldadura. Puedes solicitar una cadena de procesos completa: corte, plegado y soldadura en el mismo taller.',
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
          <h2 className="font-display text-3xl font-bold">¿Tienes un proyecto de corte láser?</h2>
          <p className="max-w-xl text-sm leading-7 text-[#bdc4c9]">
            Cuéntanos el material, espesor y cantidad. Respondemos de lunes a viernes de 8:00 a 18:00.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink('Hola, quiero cotizar un trabajo de corte láser.')}
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
          {/* Enlace interno a otras páginas de servicio */}
          <nav aria-label="Otros servicios" className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-[#8c979b]">
            <a href="/plegado-cnc" className="hover:text-[#e5d00e] transition-colors">→ Plegado CNC</a>
            <a href="/soldadura" className="hover:text-[#e5d00e] transition-colors">→ Soldadura</a>
            <a href="/proyectos" className="hover:text-[#e5d00e] transition-colors">→ Proyectos</a>
            <a href="/" className="hover:text-[#e5d00e] transition-colors">→ Inicio</a>
          </nav>
        </div>
      </section>
    </PageLayout>
  );
}
