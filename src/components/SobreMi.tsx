// SobreMi.tsx — Sección "Sobre mí"
// Información personal del director de Eminencia Industrial.
// Muestra la experiencia (+10 años de oficio) y presentación profesional.

import { Check, Sparkles } from 'lucide-react';
import { galleryItems } from '../data';
import { SectionHeading } from './SectionHeading';

export function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-[#f1efe8] py-24 md:py-32">
      <div className="section-shell grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">

        {/* Foto del profesional / taller */}
        <div className="relative min-h-[460px] overflow-hidden bg-[#243240]">
          <img
            src={galleryItems[2].image}
            alt="Cristóbal Martínez, director de Eminencia Industrial, en su taller"
            width="1600"
            height="1067"
            loading="lazy"
            className="image-tint absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17212c]/90 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <p className="font-display text-2xl font-bold text-[#f3f0e8]">Eminencia Industrial</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#e5d00e]">Fabricación independiente</p>
            </div>
            <span className="border border-[#e5d00e]/70 p-2 text-[#e5d00e]">
              <Sparkles size={17} />
            </span>
          </div>
        </div>

        {/* Información personal y única métrica solicitada (+10 años de oficio) */}
        <div>
          {/* Texto "Sobre mí" con redacción limpia y sin corchetes */}
          <SectionHeading
            eyebrow="Sobre mí"
            title={<>Una persona al otro lado<br />de cada <span className="text-[#e5d00e]">presupuesto.</span></>}
            text="Soy Cristóbal Martínez, ingeniero mecánico, con más de 10 años de experiencia como jefe de producción, y actualmente director de Eminencia Industrial."
          />

          {/* Estadística destacada: +10 Años de oficio */}
          <div className="mt-12 border-y border-[#c6c7c1] py-6">
            <div className="flex items-baseline gap-4">
              <strong className="font-display text-4xl font-bold text-[#17212c] md:text-5xl">+10</strong>
              <p className="font-mono text-xs uppercase tracking-widest text-[#69716f] md:text-sm">
                Años de oficio en fabricación y metalmecánica
              </p>
            </div>
          </div>

          <p className="mt-8 flex items-center gap-3 text-sm font-semibold">
            <Check size={17} className="text-[#e5d00e]" /> Diseño, fabricación y seguimiento en un mismo lugar.
          </p>
        </div>
      </div>
    </section>
  );
}
