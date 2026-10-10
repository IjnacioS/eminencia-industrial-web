// Footer.tsx — Pie de página del sitio
// Contiene datos NAP (nombre, dirección, teléfono, correo, horario) en texto visible,
// enlaces de navegación rápida, datos de contacto y mapa de Google.
// Los datos NAP son idénticos en todas las páginas.

import { useEffect, useState } from 'react';
import { Instagram, Mail, MapPin, MessageCircle, Phone, Clock } from 'lucide-react';
import { CONTACT_EMAIL, WHATSAPP_LABEL } from '../data';
import { getEmailLink, handleEmailClick, isMobileDevice, whatsappLink } from '../helpers';
import { Logo } from './Logo';

// Ítems de navegación para el footer (sin "Inicio" porque ya está el logo)
const FOOTER_NAV: [string, string][] = [
  ['Galería', '#galeria'],
  ['Nuestra maquinaria', '#maquinaria'],
  ['Socios', '#socios'],
  ['Servicios', '#servicios'],
  ['Corte láser', '/corte-laser'],
  ['Plegado CNC', '/plegado-cnc'],
  ['Soldadura', '/soldadura'],
  ['Proyectos', '/proyectos'],
  ['Contacto', '#contacto'],
];

export function Footer() {
  const [emailHref, setEmailHref] = useState(`mailto:${CONTACT_EMAIL}`);

  useEffect(() => {
    setEmailHref(getEmailLink('Consulta de proyecto - Eminencia Industrial'));
  }, []);

  return (
    <footer className="bg-[#111a23] py-14 text-[#f3f0e8]">
      <div className="section-shell grid gap-10 md:grid-cols-[1.3fr_.8fr_.9fr]">

        {/* Columna 1: Logo + descripción + NAP */}
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-[#8c979b]">
            Taller de corte láser de fibra, plegado CNC y soldadura en Santiago, Chile.
          </p>

          {/* NAP en texto real — importante para SEO local */}
          <address className="mt-6 not-italic space-y-2 text-sm text-[#8c979b]">
            <p className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-[#e5d00e]" />
              <span>
                <strong className="text-[#bdc4c9]">Eminencia Industrial</strong><br />
                Av. María 6513, La Cisterna<br />
                Región Metropolitana, Chile
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={15} className="shrink-0 text-[#e5d00e]" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring font-bold text-[#e5d00e] hover:underline"
                data-testid="link-footer-whatsapp"
              >
                {WHATSAPP_LABEL}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={15} className="shrink-0 text-[#e5d00e]" />
              <a
                href={emailHref}
                onClick={(e) => handleEmailClick(e)}
                target={isMobileDevice() ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="focus-ring hover:text-[#e5d00e] hover:underline"
                data-testid="link-footer-email"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Clock size={15} className="shrink-0 text-[#e5d00e]" />
              <span>Lunes a viernes, 08:00–18:00</span>
            </p>
          </address>
        </div>

        {/* Columna 2: Navegación rápida */}
        <div>
          <p className="eyebrow">Explorar</p>
          <nav aria-label="Navegación secundaria" className="mt-4 grid gap-2 text-sm text-[#bdc4c9]">
            {FOOTER_NAV.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="focus-ring w-fit transition-colors hover:text-[#e5d00e]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Columna 3: Redes sociales */}
        <div>
          <p className="eyebrow">Redes sociales</p>
          <div className="mt-4 space-y-3">
            {/* TODO: confirmar con el dueño si estas cuentas están verificadas */}
            <a
              href="https://instagram.com/eminencia.industrial"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-2 text-sm text-[#bdc4c9] hover:text-[#e5d00e]"
              data-testid="link-footer-instagram-1"
            >
              <Instagram size={17} /> @eminencia.industrial
            </a>
            <a
              href="https://instagram.com/eminencia.industrial.home"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-2 text-sm text-[#bdc4c9] hover:text-[#e5d00e]"
              data-testid="link-footer-instagram-2"
            >
              <Instagram size={17} /> @eminencia.industrial.home
            </a>
          </div>
        </div>
      </div>

      {/* Barra inferior de copyright */}
      <div className="section-shell mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-wider text-[#68757b] sm:flex-row">
        <span>© {new Date().getFullYear()} Eminencia Industrial · Todos los derechos reservados</span>
        <span>Av. María 6513, La Cisterna · Santiago, Chile</span>
      </div>
    </footer>
  );
}
