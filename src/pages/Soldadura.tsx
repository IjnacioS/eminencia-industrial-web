// Soldadura.tsx — Página de servicio de Soldadura
// Ruta: /soldadura
// Datos confirmados: soldadura de estructuras y ensambles, materiales: acero al carbono, inox, aluminio.

import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PageLayout } from '../components/PageLayout';
import { whatsappLink } from '../helpers';
import { galleryItems } from '../data';

const SERVICE_JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Soldadura de estructuras y ensambles metálicos',
    description:
      'Servicio de soldadura profesional para estructuras y ensambles de acero al carbono, acero inoxidable y aluminio en Santiago, Chile. Fabricación a medida y alta resistencia.',
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
    serviceType: 'Soldadura industrial',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué materiales sueldan en Eminencia Industrial?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Soldamos acero al carbono, acero inoxidable y aluminio. Trabajamos estructuras, ensambles y piezas a medida.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Hacen soldadura junto con corte láser y plegado?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. En Eminencia Industrial ofrecemos la cadena completa: corte láser de fibra, plegado CNC y soldadura en el mismo taller, lo que reduce tiempos y costos de coordinación.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué tipo de estructuras pueden fabricar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fabricamos estructuras industriales, soportes, bastidores, mesas de trabajo, ensambles y cualquier componente metálico que requiera unión por soldadura.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo cotizo un trabajo de soldadura?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Escríbenos por WhatsApp al +56 9 9546 2522 o a EminenciaIndustrial@gmail.com de lunes a viernes de 8:00 a 18:00, describiendo la estructura, material y dimensiones.',
        },
      },
    ],
  },
];

// Tomar imágenes de Proyectos (que involucran soldadura de estructuras)
const soldaduraImages = galleryItems.filter((g) => g.category === 'Proyectos').slice(0, 4);

export default function Soldadura() {
  return (
    <PageLayout>
      <SEO
        title="Soldadura de estructuras metálicas en Santiago | Eminencia Industrial"
        description="Soldadura de estructuras y ensambles de acero al carbono, inoxidable y aluminio en Santiago. Fabricación a medida. Cotiza por WhatsApp al +56 9 9546 2522."
        canonical="/soldadura"
        image="/imagenes/soldadura-hero.jpg"
        jsonLd={SERVICE_JSONLD}
      />

      <div className="pt-[112px]" />

      {/* ── HERO ── */}
      <section className="bg-[#17212c] py-20 text-[#f3f0e8] md:py-28">
        <div className="section-shell">
          <p className="eyebrow mb-4 flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-[#e5d00e]" /> Servicio 03
          </p>
          <h1 className="max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-tight tracking-tight">
            Soldadura de estructuras y ensambles en{' '}
            <span className="text-[#e5d00e]">Santiago</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#bdc4c9] md:text-lg">
            Unimos y fabricamos piezas en <strong className="text-[#f3f0e8]">acero al carbono, acero
            inoxidable y aluminio</strong> con soldadura profesional de alta resistencia.
            Desde soportes simples hasta estructuras industriales completas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink('Hola, quiero cotizar un trabajo de soldadura.')}
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
              Soldadura profesional para fabricación industrial
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#58636b]">
              La soldadura es el proceso que une piezas metálicas mediante calor localizado y material de
              aporte. En Eminencia Industrial aplicamos soldadura profesional para estructuras y ensambles
              que requieren alta resistencia mecánica, con atención a la geometría final y al acabado
              superficial.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#58636b]">
              Trabajamos tanto estructuras simples como proyectos de mayor complejidad: bastidores,
              mesas industriales, jaulas de protección, soportes y ensambles de múltiples piezas. El
              proceso puede incluir como etapas previas el corte láser de fibra y el plegado CNC,
              todo en el mismo taller, reduciendo tiempo de coordinación y costo de flete.
            </p>

            <h3 className="mt-8 font-display text-xl font-bold text-[#17212c]">
              Materiales que soldamos
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
              Aplicaciones típicas de soldadura
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#58636b]">
              Estructuras industriales y de soporte, bastidores, mesas y bancos de trabajo, jaulas de
              protección, ensambles de componentes cortados a láser y plegados, soportes murales, carros
              industriales y cualquier fabricación que requiera unión metálica de alta resistencia con
              acabado prolijo.
            </p>
          </div>

          {/* Grilla de imágenes */}
          <div className="grid grid-cols-2 gap-3">
            {soldaduraImages.map((img, i) => (
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
            Preguntas frecuentes sobre soldadura
          </h2>
          <dl className="mt-10 space-y-8">
            {[
              {
                q: '¿Qué materiales sueldan en Eminencia Industrial?',
                a: 'Soldamos acero al carbono, acero inoxidable y aluminio para estructuras, ensambles y piezas de fabricación a medida.',
              },
              {
                q: '¿Hacen soldadura junto con corte láser y plegado?',
                a: 'Sí. Ofrecemos la cadena completa de fabricación en un solo taller: corte láser de fibra, plegado CNC y soldadura, lo que reduce los tiempos de entrega y coordinación.',
              },
              {
                q: '¿Qué tipo de estructuras pueden fabricar con soldadura?',
                a: 'Fabricamos estructuras industriales, soportes, bastidores, mesas de trabajo, carros industriales, jaulas de protección y cualquier componente que requiera unión soldada.',
              },
              {
                q: '¿Cómo cotizo un trabajo de soldadura?',
                a: 'Contáctanos por WhatsApp al +56 9 9546 2522 o por correo a EminenciaIndustrial@gmail.com de lunes a viernes de 8:00 a 18:00. Descríbenos la estructura, el material y las dimensiones.',
              },
              {
                q: '¿Hacen soldadura de piezas únicas o solo en serie?',
                a: 'Trabajamos tanto piezas únicas como en series. Cuéntanos tu proyecto y te entregamos una cotización.',
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
          <h2 className="font-display text-3xl font-bold">¿Tienes un proyecto de soldadura?</h2>
          <p className="max-w-xl text-sm leading-7 text-[#bdc4c9]">
            Descríbenos el material, la estructura y la cantidad. Atendemos de lunes a viernes de 8:00 a 18:00.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink('Hola, quiero cotizar un trabajo de soldadura.')}
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
            <a href="/plegado-cnc" className="hover:text-[#e5d00e] transition-colors">→ Plegado CNC</a>
            <a href="/proyectos" className="hover:text-[#e5d00e] transition-colors">→ Proyectos</a>
            <a href="/" className="hover:text-[#e5d00e] transition-colors">→ Inicio</a>
          </nav>
        </div>
      </section>
    </PageLayout>
  );
}
