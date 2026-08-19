// helpers.ts — Funciones auxiliares compartidas por varios componentes
// Centraliza la lógica que se repite en distintas partes del sitio.

import { CONTACT_EMAIL, WHATSAPP_PHONE } from './data';

// Genera un enlace de WhatsApp con un mensaje opcional pre-cargado.
export const whatsappLink = (message?: string) =>
  `https://wa.me/${WHATSAPP_PHONE}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

// Detecta si el usuario está en un dispositivo móvil/celular
export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    window.innerWidth < 768
  );
};

// Genera el enlace de correo adecuado:
// - En celular: usa mailto: para abrir la app de correo del teléfono.
// - En computador: abre la versión web de Gmail directamente en una pestaña nueva.
export const getEmailLink = (subject: string = 'Consulta de proyecto - Eminencia Industrial') => {
  const encodedSubject = encodeURIComponent(subject);
  if (isMobileDevice()) {
    return `mailto:${CONTACT_EMAIL}?subject=${encodedSubject}`;
  }
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${encodedSubject}`;
};

// Manejador de click para asegurar apertura limpia en pestaña nueva en PC
export const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>, subject?: string) => {
  if (!isMobileDevice()) {
    e.preventDefault();
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${encodeURIComponent(
      subject || 'Consulta de proyecto - Eminencia Industrial'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};
