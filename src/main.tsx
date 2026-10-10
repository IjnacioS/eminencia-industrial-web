// main.tsx — Punto de entrada de la aplicación
// Usa ViteReactSSG para prerender estático de todas las rutas.
// En desarrollo: hydrate normalmente. En build: genera HTML estático por ruta.

import { ViteReactSSG } from 'vite-react-ssg';
import { ErrorBoundary } from '@/components/error-boundary';

// Estilos globales
import './index.css';

// Importación de páginas para el router
import App from './App';
import Home from './pages/Home';
import CorteLaser from './pages/CorteLaser';
import PlegadoCNC from './pages/PlegadoCNC';
import Soldadura from './pages/Soldadura';
import Proyectos from './pages/Proyectos';
import NotFound from './pages/not-found';

// Definición de rutas para prerender
// ViteReactSSG generará un HTML estático por cada ruta listada aquí.
export const createRoot = ViteReactSSG(
  // Elemento raíz con ErrorBoundary
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  // Rutas a prerender — se genera HTML estático para cada una
  {
    routes: [
      { path: '/', element: <Home /> },
      { path: '/corte-laser', element: <CorteLaser /> },
      { path: '/plegado-cnc', element: <PlegadoCNC /> },
      { path: '/soldadura', element: <Soldadura /> },
      { path: '/proyectos', element: <Proyectos /> },
      { path: '*', element: <NotFound /> },
    ],
  },
);
