// SectionHeading.tsx — Encabezado reutilizable para las secciones del sitio
// Muestra: etiqueta superior (eyebrow), título (h2) y texto descriptivo opcional.
// Se usa en todas las secciones principales para mantener un estilo consistente.

import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;    // Texto pequeño en mayúsculas arriba del título
  title: ReactNode;   // Título principal de la sección (puede incluir JSX)
  text?: string;      // Párrafo descriptivo opcional debajo del título
  light?: boolean;    // Si es true, usa colores claros (para fondos oscuros)
}

export function SectionHeading({ eyebrow, title, text, light = false }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${light ? 'text-[#f3f0e8]' : 'text-[#17212c]'}`}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-display text-4xl font-bold leading-[.98] tracking-[-.05em] md:text-6xl">
        {title}
      </h2>
      {text && (
        <p className={`mt-5 max-w-lg text-base leading-7 ${light ? 'text-[#bdc4c9]' : 'text-[#58636b]'}`}>
          {text}
        </p>
      )}
    </div>
  );
}
