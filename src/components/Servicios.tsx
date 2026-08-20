// Servicios.tsx — Sección "Del plano a la pieza"
// Muestra 3 tarjetas de servicios: Corte láser, Grabado de piezas, Planimetría.
// Cada tarjeta cuenta con su ilustración técnica representativa y título.

import { serviceItems } from '../data';
import { SectionHeading } from './SectionHeading';

export function Servicios() {
  return (
    <section id="servicios" className="bg-[#e9e7df] py-24 md:py-32">
      <div className="section-shell">
        {/* Encabezado de la sección */}
        <SectionHeading
          eyebrow="Servicios de fabricación"
          title={<>Del plano a la <span className="bg-[#e5d00e] text-[#17212c] px-2 py-0.5 inline-block">pieza.</span></>}
          text="Soluciones de corte, grabado y planimetría para convertir una medida, un dibujo o una necesidad en algo que funciona."
        />

        {/* Tarjetas de servicios — imagen personalizada + título */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {serviceItems.map(({ image, number, title, alt }) => (
            <article
              key={number}
              className="service-card border border-[#b9bbb5] bg-[#f1efe8] p-7 md:p-9 transition-all hover:border-[#e5d00e] hover:-translate-y-1"
              data-testid={`card-service-${number}`}
            >
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
                  />
                </div>
                <span className="font-mono text-xs font-semibold text-[#7a817f]">{number}</span>
              </div>

              {/* Título del servicio */}
              <h3 className="relative mt-14 font-display text-2xl font-bold text-[#17212c]">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
