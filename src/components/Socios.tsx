// Socios.tsx — Sección "Gente con la que hemos trabajado"
// Muestra los logos de empresas asociadas (o un placeholder si aún no tienen logo cargado).
// En Mobile: Carrusel / slider horizontal deslizable (swipeable) uno a uno.
// En Desktop: Cuadrícula fija de 5 columnas.

import { ImageIcon } from 'lucide-react';
import { partners } from '../data';
import { SectionHeading } from './SectionHeading';

export function Socios() {
  return (
    <section id="socios" className="bg-[#e9e7df] py-24 md:py-32">
      <div className="section-shell">
        {/* Encabezado de la sección */}
        <SectionHeading
          eyebrow="Colaboraciones"
          title={<>Empresas que confían en nuestra <span className="bg-[#e5d00e] text-[#17212c] px-2 py-0.5 inline-block">fabricación.</span></>}
          text="Empresas e industrias que han confiado en nuestro trabajo."
        />

        {/* Contenedor: Carrusel horizontal deslizable en móvil, Grid 5 columnas en desktop */}
        <div className="partners-slider mt-14" aria-label="Empresas asociadas">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="partner-card"
              data-testid={`card-partner-${index}`}
            >
              {/* Espacio para el logo de la empresa */}
              <div className={partner.image ? 'partner-logo-loaded' : 'partner-logo-placeholder'}>
                {partner.image ? (
                  <img src={partner.image} alt={partner.name} className="partner-logo-img" />
                ) : (
                  <>
                    <ImageIcon size={28} className="text-[#bdc4c9]" />
                    <span className="partner-logo-text">Logo aquí</span>
                  </>
                )}
              </div>

              {/* Nombre de la empresa */}
              <p className="partner-name">{partner.name}</p>

              {/* Indicador de posición en mobile */}
              <span className="partner-mobile-index font-mono text-[9px] text-[#7a817f] md:hidden">
                0{index + 1} / 0{partners.length}
              </span>
            </div>
          ))}
        </div>

        {/* Indicador visual de desplazamiento táctil para móviles */}
        <div className="mt-4 flex items-center justify-center gap-1.5 md:hidden">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#7a817f]">
            ← Desliza para ver más →
          </span>
        </div>
      </div>
    </section>
  );
}
