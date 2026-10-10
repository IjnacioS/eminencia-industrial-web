// App.tsx — Componente principal de la aplicación con routing
// Usa wouter para rutas reales (/corte-laser, /plegado-cnc, /soldadura, /proyectos).
// La home usa el layout SPA completo; las páginas internas usan PageLayout.

import { useState } from 'react';
import { Route, Switch } from 'wouter';
import { FaWhatsapp } from 'react-icons/fa';

// Componentes del layout principal (home)
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Páginas
import Home from './pages/Home';
import CorteLaser from './pages/CorteLaser';
import PlegadoCNC from './pages/PlegadoCNC';
import Soldadura from './pages/Soldadura';
import Proyectos from './pages/Proyectos';
import NotFound from './pages/not-found';

// Helpers
import { whatsappLink } from './helpers';

// Estilos globales
import './index.css';

/**
 * Wrapper de la home — incluye Header, Footer y botón WA flotante
 * porque la home los necesita integrados con el estado del menú.
 */
function HomeWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="grain min-h-[100dvh] bg-[#f1efe8]">
      <Header open={menuOpen} onToggle={() => setMenuOpen((v) => !v)} />
      <main>
        <Home />
      </main>
      <Footer />

      {/* Botón flotante oficial de WhatsApp (esquina inferior derecha) */}
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

function App() {
  return (
    <Switch>
      {/* Home — SPA completa con todas las secciones */}
      <Route path="/" component={HomeWrapper} />

      {/* Páginas de servicio — usan PageLayout internamente */}
      <Route path="/corte-laser" component={CorteLaser} />
      <Route path="/plegado-cnc" component={PlegadoCNC} />
      <Route path="/soldadura" component={Soldadura} />
      <Route path="/proyectos" component={Proyectos} />

      {/* 404 — catch-all */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;