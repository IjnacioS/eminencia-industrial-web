// Maquinaria.tsx — Sección "Nuestra Maquinaria"
// Formato original de filas alternadas unidas en un solo bloque continuo,
// con las 3 imágenes y rectángulos exactamente del mismo tamaño y altura fija.

import { machinery } from '../data';
import { SectionHeading } from './SectionHeading';

export function Maquinaria() {
  return (
    <section id="maquinaria" className="bg-[#f1efe8] py-24 md:py-32">
      <div className="section-shell">
        {/* Encabezado de la sección */}
        <SectionHeading
          eyebrow="Nuestra maquinaria"
          title={<>Tecnología para que la <span className="bg-[#e5d00e] text-[#17212c] px-2 py-0.5 inline-block">medida cierre.</span></>}
          text="Equipamiento industrial para corte, plegado y soldadura."
        />

        {/* Bloque continuo de 3 máquinas unidas con rectángulos de tamaño exactamente idéntico */}
        <div className="mt-16 overflow-hidden border border-[#c6c7c1] shadow-lg">
          {machinery.map((machine, index) => (
            <article
              key={machine.name}
              className={`machine-row grid md:grid-cols-2 md:h-[320px] ${
                index < machinery.length - 1 ? 'border-b border-white/10 md:border-b-0' : ''
              }`}
              data-testid={`card-machinery-${index}`}
            >
              {/* Imagen de la máquina (misma altura y proporción exacta en las 3) */}
              <div className={`machine-image relative h-[260px] md:h-full w-full overflow-hidden ${index % 2 ? 'md:order-2' : ''}`}>
                <img
                  src={machine.image}
                  alt={`Máquina ${machine.name} en operación`}
                  width="1600"
                  height="1067"
                  loading="lazy"
                  className="image-tint h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#17212c]/70 via-transparent to-transparent" />
                <span className="absolute left-6 top-6 font-mono text-[10px] uppercase tracking-[.18em] text-[#e5d00e] bg-[#17212c]/80 px-2 py-0.5 border border-[#e5d00e]/30">
                  0{index + 1} / equipo
                </span>
              </div>

              {/* Panel de texto (mismo alto, mismo ancho y mismo padding en los 3) */}
              <div className={`machine-panel flex flex-col justify-center p-8 md:p-12 md:h-full ${index === 1 ? 'accent' : ''} ${index % 2 ? 'md:order-1' : ''}`}>
                <p className="eyebrow">{machine.kicker}</p>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                  {machine.name}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed opacity-85">{machine.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
