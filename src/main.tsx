// main.tsx — Punto de entrada de la aplicación
// Usa ViteReactSSG para prerender estático de todas las rutas.
// En desarrollo: hydrate normalmente. En build: genera HTML estático por ruta.

import { ViteReactSSG } from 'vite-react-ssg';
import type { RouteRecord } from 'vite-react-ssg';
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

// Definición de rutas para prerender.
// ViteReactSSG generará un HTML estático por cada ruta listada aquí.
// La ruta raíz envuelve todo con ErrorBoundary y App (que debe renderizar <Outlet />);
// las páginas son rutas hijas, con path relativo (sin "/" inicial).
const routes: RouteRecord[] = [
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'corte-laser', element: <CorteLaser /> },
      { path: 'plegado-cnc', element: <PlegadoCNC /> },
      { path: 'soldadura', element: <Soldadura /> },
      { path: 'proyectos', element: <Proyectos /> },
      // Genera 404.html estático (si tu versión no lo soporta, elimina esta línea)
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export const createRoot = ViteReactSSG({ routes });
