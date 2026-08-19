// Galeria.tsx — Sección de galería de trabajos realizados
// Carrusel con imágenes filtradas por categoría (Corte láser / Plegado).
// Proporción adaptativa (4:3 en mobile, 16:9 en desktop).

import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from '../data';
import { SectionHeading } from './SectionHeading';

export function Galeria() {
  // Estado del tab activo (categoría) y de la imagen seleccionada
  const [tab, setTab] = useState<'Corte láser' | 'Plegado'>('Corte láser');
  const [activeIndex, setActiveIndex] = useState(0);

  // Filtrar imágenes según la categoría seleccionada
  const visible = useMemo(() => galleryItems.filter((item) => item.category === tab), [tab]);
  const active = visible[activeIndex] ?? visible[0];

  // Reiniciar al primer índice cuando cambia la categoría
  useEffect(() => setActiveIndex(0), [tab]);

  // Avanzar o retroceder en el carrusel (con loop circular)
  const move = (direction: number) =>
    setActiveIndex((index) => (index + direction + visible.length) % visible.length);

  return (
    <section id="galeria" className="bg-[#17212c] py-24 text-[#f3f0e8] md:py-32">
      <div className="section-shell">
        {/* Encabezado y pestañas de categoría */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            light
            eyebrow="Trabajo de referencia"
            title={<>Piezas que hablan<br />por sí <span className="text-[#e5d00e]">solas.</span></>}
            text="Muestras de corte técnico, plegado y terminaciones de precisión para proyectos industriales."
          />

          {/* Pestañas para filtrar por categoría */}
          <div className="flex border-b border-white/20" role="tablist" aria-label="Categorías de galería">
            {(['Corte láser', 'Plegado'] as const).map((item) => (
              <button
                type="button"
                key={item}
                role="tab"
                aria-selected={tab === item}
                onClick={() => setTab(item)}
                className={`focus-ring border-b-2 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                  tab === item
                    ? 'border-[#e5d00e] text-[#e5d00e]'
                    : 'border-transparent text-[#8c979b] hover:text-[#f3f0e8]'
                }`}
                data-testid={`button-gallery-tab-${item.toLowerCase().replace(' ', '-')}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Carrusel de imágenes */}
        <div className="carousel-stage mt-14" aria-roledescription="carrusel" aria-label={`Galería de ${tab}`}>
          {/* Flechas de navegación izquierda/derecha */}
          <button type="button" onClick={() => move(-1)} className="carousel-arrow prev focus-ring" aria-label="Imagen anterior" data-testid="button-gallery-prev">
            <ChevronLeft size={23} />
          </button>
          <button type="button" onClick={() => move(1)} className="carousel-arrow next focus-ring" aria-label="Imagen siguiente" data-testid="button-gallery-next">
            <ChevronRight size={23} />
          </button>

          {/* Imagen activa — proporción uniforme con aspect-ratio */}
          <div className="gallery-image-wrapper">
            <img
              src={active.image}
              alt={`${active.title}, ${active.meta}`}
              width="1600"
              height="1067"
              loading="lazy"
              className="image-tint h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111a23] via-transparent to-transparent opacity-95" />
            <div className="absolute bottom-8 left-8">
              <p className="font-display text-2xl font-bold md:text-3xl">{active.title}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-[#e5d00e]">{active.meta}</p>
            </div>
          </div>

          {/* Indicadores de posición (puntos) */}
          <div className="carousel-progress" role="tablist" aria-label="Imágenes de la categoría">
            {visible.map((item, index) => (
              <button
                type="button"
                key={item.title}
                onClick={() => setActiveIndex(index)}
                className="carousel-dot focus-ring"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Ver imagen ${index + 1}: ${item.title}`}
                data-testid={`button-gallery-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
