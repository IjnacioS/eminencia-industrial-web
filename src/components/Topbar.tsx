// Topbar.tsx — Barra superior de información rápida y contacto
// Ubicada arriba del menú principal. Incluye enlaces directos e interactivos:
// - Ubicación -> Abre Google Maps
// - Correo -> Abre Gmail web en PC / App de correo en móvil
// - WhatsApp -> Abre chat de WhatsApp
// - Horario de atención

import { useEffect, useState } from 'react';
import { Clock, Mail, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CONTACT_EMAIL, WHATSAPP_LABEL } from '../data';
import { getEmailLink, handleEmailClick, isMobileDevice, whatsappLink } from '../helpers';

// Enlace directo a Google Maps para la dirección física
const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Av.+Mar%C3%ADa+6513%2C+La+Cisterna%2C+Santiago%2C+Chile';

export function Topbar() {
  const [emailHref, setEmailHref] = useState(`mailto:${CONTACT_EMAIL}`);

  useEffect(() => {
    setEmailHref(getEmailLink('Consulta de proyecto - Eminencia Industrial'));
  }, []);

  return (
    <div className="border-b border-white/10 bg-[#111a23] text-[#bdc4c9] text-[11px] font-medium tracking-wide">
      <div className="section-shell flex min-h-[38px] items-center justify-between overflow-x-auto no-scrollbar py-1.5 md:py-0">
        
        {/* Lado izquierdo: Ubicación interactiva con Google Maps */}
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex shrink-0 items-center gap-1.5 transition-colors hover:text-[#e5d00e] pr-4 py-1"
          title="Ver ubicación en Google Maps"
          data-testid="link-topbar-maps"
        >
          <MapPin size={13} className="shrink-0 text-[#e5d00e]" />
          <span>Av. María 6513, La Cisterna</span>
        </a>

        {/* Lado derecho: Correo, WhatsApp y Horario */}
        <div className="flex shrink-0 items-center gap-4 md:gap-6 pl-2">
          {/* Correo interactivo (Gmail web en PC / App en celular) */}
          <a
            href={emailHref}
            onClick={(e) => handleEmailClick(e, 'Consulta de proyecto - Eminencia Industrial')}
            target={isMobileDevice() ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="focus-ring flex items-center gap-1.5 transition-colors hover:text-[#e5d00e] py-1"
            title="Escribir correo"
            data-testid="link-topbar-email"
          >
            <Mail size={13} className="shrink-0 text-[#e5d00e]" />
            <span className="hidden sm:inline">{CONTACT_EMAIL}</span>
            <span className="sm:hidden">Correo</span>
          </a>

          {/* WhatsApp interactivo */}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex items-center gap-1.5 transition-colors hover:text-[#e5d00e] py-1"
            title="Contactar por WhatsApp"
            data-testid="link-topbar-whatsapp"
          >
            <FaWhatsapp size={13} className="shrink-0 text-[#25D366]" />
            <span>{WHATSAPP_LABEL}</span>
          </a>

          {/* Horario de atención */}
          <div className="hidden lg:flex items-center gap-1.5 text-[#8c979b] border-l border-white/10 pl-4 py-1">
            <Clock size={13} className="shrink-0 text-[#e5d00e]" />
            <span>L-V 8:00 - 18:00 hrs</span>
          </div>
        </div>
      </div>
    </div>
  );
}
