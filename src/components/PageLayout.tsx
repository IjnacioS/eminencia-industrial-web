// PageLayout.tsx — Layout compartido por todas las páginas internas de servicio.
// Incluye Header, slot para contenido, Footer y el botón flotante de WhatsApp.
// Úsalo envolviendo el contenido de cada página para mantener la coherencia visual.

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Header } from './Header';
import { Footer } from './Footer';
import { whatsappLink } from '../helpers';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="grain min-h-[100dvh] bg-[#f1efe8]">
      <Header open={menuOpen} onToggle={() => setMenuOpen((v) => !v)} isServicePage />
      <main>{children}</main>
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <a
        href={whatsappLink('Hola, quiero hacer una consulta.')}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-pulse focus-ring fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center bg-[#25D366] text-white shadow-xl transition-transform hover:-translate-y-1 md:bottom-8 md:right-8"
        aria-label="Contactar a Eminencia Industrial por WhatsApp"
        data-testid="link-floating-whatsapp"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
}
