// SobreMi.tsx — Sección "Sobre mí"
// Información personal del director de Eminencia Industrial.
// Muestra la experiencia (+10 años de oficio) y presentación profesional.
// Diseño centrado, sin imagen, en una sola columna.

import { Check } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-[#f1efe8] py-24 md:py-32">
      <div className="section-shell mx-auto max-w-[720px] text-center">

        {/* Texto "Sobre mí" centrado */}
        <div className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Sobre mí"
            title={<>Una persona al otro lado<br />de cada <span className="bg-[#e5d00e] text-[#17212c] px-2 py-0.5 inline-block">presupuesto.</span></>}
            text="Soy Cristóbal Martínez, ingeniero mecánico, con más de 10 años de experiencia como jefe de producción, y actualmente director de Eminencia Industrial."
          />
        </div>

        {/* Estadística destacada: +10 Años de oficio */}
        <div className="mt-12 border-y border-[#c6c7c1] py-6">
          <div className="flex items-baseline justify-center gap-4">
            <strong className="font-display text-4xl font-bold text-[#17212c] md:text-5xl">+10</strong>
            <p className="font-mono text-xs uppercase tracking-widest text-[#69716f] md:text-sm">
              Años de oficio en fabricación y metalmecánica
            </p>
          </div>
        </div>

        <p className="mt-8 flex items-center justify-center gap-3 text-sm font-semibold">
          <Check size={17} className="text-[#17212c]" /> Diseño, fabricación y seguimiento en un mismo lugar.
        </p>
      </div>
    </section>
  );
}
