// Galeria.tsx — Sección de galería de trabajos realizados
// CAMBIO SEO: Todas las imágenes de TODAS las categorías existen en el DOM.
// Las inactivas se ocultan visualmente con CSS (aria-hidden + hidden class) pero
// el motor de búsqueda puede indexarlas al leer el HTML prerenderizado.
// Proporción adaptativa (4:3 en mobile, 16:9 en desktop).

import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from '../data';
import { SectionHeading } from './SectionHeading';

type GalleryCategory = 'Corte láser' | 'Plegado' | 'Proyectos';
const CATEGORIES: GalleryCategory[] = ['Corte láser', 'Plegado', 'Proyectos'];

export function Galeria() {
  const [tab, setTab] = useState<GalleryCategory>('Corte láser');
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
            title={<>Trabajos de corte láser, plegado y <span className="text-[#e5d00e]">soldadura.</span></>}
            text="Muestras de corte técnico, plegado y terminaciones de precisión para proyectos industriales."
          />

          {/* Pestañas para filtrar por categoría */}
          <div className="flex border-b border-white/20" role="tablist" aria-label="Categorías de galería">
            {CATEGORIES.map((item) => (
              <button
                type="button"
                key={item}
                role="tab"
                aria-selected={tab === item}
                onClick={() => setTab(item)}
                className={`focus-ring border-b-2 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${tab === item
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
          <button
            type="button"
            onClick={() => move(-1)}
            className="carousel-arrow prev focus-ring z-20 cursor-pointer"
            aria-label="Ver imagen anterior de la galería"
            data-testid="button-gallery-prev"
          >
            <ChevronLeft size={23} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            className="carousel-arrow next focus-ring z-20 cursor-pointer"
            aria-label="Ver imagen siguiente de la galería"
            data-testid="button-gallery-next"
          >
            <ChevronRight size={23} />
          </button>

          {/* Contenedor de imágenes — TODAS en el DOM para indexación */}
          <div className="gallery-image-wrapper">
            {/*
             * SEO: todas las imágenes de TODAS las categorías están en el DOM.
             * Las inactivas usan aria-hidden y visibility:hidden para que el HTML
             * prerenderizado las incluya pero no interfieran con el usuario.
             * La primera imagen de cada categoría no lleva lazy (puede ser LCP).
             */}
            {galleryItems.map((item, globalIndex) => {
              const categoryItems = galleryItems.filter((g) => g.category === item.category);
              const localIndex = categoryItems.indexOf(item);
              const isActiveCategory = item.category === tab;
              const isActiveImage = isActiveCategory && localIndex === activeIndex;
              const isFirstOfCategory = localIndex === 0;

              return (
                <div
                  key={item.image}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    visibility: isActiveImage ? 'visible' : 'hidden',
                    // Mantener en el DOM pero fuera del viewport visual cuando no activa
                  }}
                  aria-hidden={!isActiveImage}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    width="1600"
                    height="1067"
                    loading={isFirstOfCategory && item.category === 'Corte láser' ? 'eager' : 'lazy'}
                    decoding="async"
                    className="image-tint h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111a23] via-transparent to-transparent opacity-95 pointer-events-none" />
                  <div className="absolute bottom-8 left-8 pointer-events-none">
                    <p className="font-display text-2xl font-bold md:text-3xl">{item.title}</p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-[#e5d00e]">{item.meta}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicadores de posición (puntos) — solo para la categoría activa */}
          <div className="carousel-progress z-20" role="tablist" aria-label="Imágenes de la categoría">
            {visible.map((item, index) => (
              <button
                type="button"
                key={`${item.image}-${index}`}
                onClick={() => setActiveIndex(index)}
                className="carousel-dot focus-ring cursor-pointer"
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
