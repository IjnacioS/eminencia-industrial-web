// App.tsx — Componente principal de la aplicación
// Ensambla todas las secciones del sitio en orden:
// Header -> Hero -> Servicios -> Maquinaria -> Socios -> Galería -> Productos -> Sobre Mí -> Contacto -> Footer

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

// Importación de componentes de cada sección
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Servicios } from './components/Servicios';
import { Maquinaria } from './components/Maquinaria';
import { Socios } from './components/Socios';
import { Galeria } from './components/Galeria';
import { Productos } from './components/Productos';
import { SobreMi } from './components/SobreMi';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';

// Helpers
import { whatsappLink } from './helpers';

// Estilos globales
import './index.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="grain min-h-[100dvh] bg-[#f1efe8]">
      {/* Barra de navegación superior */}
      <Header open={menuOpen} onToggle={() => setMenuOpen((value) => !value)} />

      {/* Secciones de contenido del sitio */}
      <main>
        <Hero />
        <Servicios />
        <Maquinaria />
        <Socios />
        <Galeria />
        <Productos />
        <SobreMi />
        <Contacto />
      </main>

      {/* Pie de página */}
      <Footer />

      {/* Botón flotante oficial de WhatsApp (esquina inferior derecha) */}
      <a
        href={whatsappLink('Hola, quiero hacer una consulta.')}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-pulse focus-ring fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center bg-[#25D366] text-white shadow-xl transition-transform hover:-translate-y-1 md:bottom-8 md:right-8"
        aria-label="Contactar por WhatsApp"
        data-testid="link-floating-whatsapp"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
}

export default App;