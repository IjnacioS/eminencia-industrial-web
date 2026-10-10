// Servicios.tsx — Sección "Del plano a la pieza"
// Tarjetas de servicios: Corte láser, Plegado CNC, Soldadura, Grabado y Planimetría.
// Las tarjetas con página propia tienen enlace interno hacia /corte-laser, /plegado-cnc, /soldadura.

import { ArrowUpRight } from 'lucide-react';
import { serviceItems } from '../data';
import { SectionHeading } from './SectionHeading';

export function Servicios() {
  return (
    <section id="servicios" className="bg-[#e9e7df] py-24 md:py-32">
      <div className="section-shell">
        {/* Encabezado de la sección */}
        <SectionHeading
          eyebrow="Servicios de fabricación"
          title={<>Del plano a la pieza: corte láser y plegado en <span className="bg-[#e5d00e] text-[#17212c] px-2 py-0.5 inline-block">Santiago.</span></>}
          text="Soluciones de corte láser, plegado CNC, soldadura y planimetría para convertir una medida o plano en piezas listas para ensamblar."
        />

        {/* Tarjetas de servicios — imagen personalizada + título + párrafo visible */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map(({ image, number, title, description, alt, href }) => {
            const CardContent = (
              <>
                <div>
                  {/* Imagen/Ícono del servicio y número */}
                  <div className="relative flex items-start justify-between">
                    <div className="service-icon p-2.5">
                      <img
                        src={image}
                        alt={alt}
                        width="56"
                        height="56"
                        className="h-full w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#7a817f]">{number}</span>
                  </div>

                  {/* Título del servicio */}
                  <h3 className="relative mt-7 font-display text-2xl font-bold text-[#17212c]">{title}</h3>

                  {/* Párrafo descriptivo */}
                  <p className="mt-3 text-sm leading-6 text-[#58636b]">{description}</p>
                </div>

                {/* Indicador de enlace si tiene página propia */}
                {href && (
                  <div className="mt-6 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#17212c]">
                    Ver servicio <ArrowUpRight size={14} />
                  </div>
                )}
              </>
            );

            // Si tiene página propia, envolver en <a>; si no, en <article>
            if (href) {
              return (
                <a
                  key={number}
                  href={href}
                  className="service-card flex flex-col justify-between border border-[#b9bbb5] bg-[#f1efe8] p-7 md:p-8 transition-all hover:border-[#e5d00e] hover:-translate-y-1 no-underline"
                  data-testid={`card-service-${number}`}
                  aria-label={`Ver detalles del servicio de ${title}`}
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <article
                key={number}
                className="service-card flex flex-col justify-between border border-[#b9bbb5] bg-[#f1efe8] p-7 md:p-8 transition-all hover:border-[#e5d00e] hover:-translate-y-1"
                data-testid={`card-service-${number}`}
              >
                {CardContent}
              </article>
            );
          })}
        </div>

        {/* Enlace a la página de proyectos */}
        <div className="mt-10 text-center">
          <a
            href="/proyectos"
            className="focus-ring inline-flex items-center gap-2 border border-[#b9bbb5] bg-[#f1efe8] px-6 py-3 text-sm font-bold text-[#17212c] transition-all hover:border-[#e5d00e] hover:text-[#17212c]"
          >
            Ver galería de proyectos <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
