// Footer.tsx — Pie de página del sitio
// Contiene resumen de la empresa, enlaces de navegación rápida, datos de contacto y redes sociales.

import { useEffect, useState } from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { CONTACT_EMAIL, WHATSAPP_LABEL, navItems } from '../data';
import { getEmailLink, handleEmailClick, isMobileDevice, whatsappLink } from '../helpers';
import { Logo } from './Logo';

export function Footer() {
  const [emailHref, setEmailHref] = useState(`mailto:${CONTACT_EMAIL}`);

  useEffect(() => {
    setEmailHref(getEmailLink('Consulta de proyecto - Eminencia Industrial'));
  }, []);

  return (
    <footer className="bg-[#111a23] py-14 text-[#f3f0e8]">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
        {/* Columna 1: Logo y lema */}
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-[#8c979b]">
            Ingeniería en corte láser, plegado, soldadura y proyectos en general. Precisión y compromiso directo.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#e5d00e]"
            data-testid="link-footer-whatsapp"
          >
            <MessageCircle size={16} /> {WHATSAPP_LABEL}
          </a>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div>
          <p className="eyebrow">Explorar</p>
          <div className="mt-4 grid gap-2 text-sm text-[#bdc4c9]">
            {navItems.slice(1).map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="focus-ring w-fit transition-colors hover:text-[#e5d00e]"
                data-testid={`link-footer-${id}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Columna 3: Contacto y redes sociales oficiales */}
        <div>
          <p className="eyebrow">Contacto y Redes</p>
          <div className="mt-4 space-y-3">
            <a
              href={emailHref}
              onClick={(e) => handleEmailClick(e)}
              target={isMobileDevice() ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-2 text-sm text-[#bdc4c9] hover:text-[#e5d00e]"
              data-testid="link-footer-email"
            >
              <Mail size={17} /> {CONTACT_EMAIL}
            </a>
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
        <span>Hecho con precisión</span>
      </div>
    </footer>
  );
}
