// data.ts — Datos centralizados del sitio de Eminencia Industrial
// Aquí se definen todas las constantes (contacto, navegación, servicios, etc.)
// que usan los distintos componentes del sitio. Modificar estos valores
// actualiza la información en todas las páginas de una sola vez.

// ============================================================
// DATOS DE CONTACTO
// ============================================================
export const WHATSAPP_PHONE = '56995462522';
export const WHATSAPP_LABEL = '+56 9 9546 2522';
export const CONTACT_EMAIL = 'EminenciaIndustrial@gmail.com';

// ============================================================
// NAVEGACIÓN — menú principal (unificado y sin duplicaciones)
// ============================================================
export const navItems: [string, string][] = [
  ['Inicio', 'inicio'],
  ['Servicios', 'servicios'],
  ['Nuestra maquinaria', 'maquinaria'],
  ['Socios', 'socios'],
  ['Galería', 'galeria'],
  ['Productos', 'productos'],
  ['Sobre mí', 'sobre-mi'],
  ['Contacto', 'contacto'],
];

// ============================================================
// SERVICIOS — sección "Del plano a la pieza"
// Tres tarjetas con imágenes personalizadas y título.
// ============================================================
export interface ServiceItem {
  image: string;
  number: string;
  title: string;
  alt: string;
}

export const serviceItems: ServiceItem[] = [
  {
    image: '/services/corte-laser.svg',
    number: '01',
    title: 'Corte láser',
    alt: 'Ilustración técnica de cabezal de corte láser',
  },
  {
    image: '/services/grabado-piezas.svg',
    number: '02',
    title: 'Grabado de piezas',
    alt: 'Ilustración técnica de grabado y mecanizado de piezas',
  },
  {
    image: '/services/planimetria.svg',
    number: '03',
    title: 'Planimetría',
    alt: 'Ilustración técnica de plano y planimetría',
  },
];

// ============================================================
// IMÁGENES DE GALERÍA (referencias técnicas)
// ============================================================
export const galleryItems = [
  { category: 'Corte láser' as const, title: 'Corte de plancha metálica', meta: 'Detalle de fabricación', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=85' },
  { category: 'Corte láser' as const, title: 'Fabricación industrial', meta: 'Pieza metálica', image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=85' },
  { category: 'Corte láser' as const, title: 'Trabajo de precisión', meta: 'Corte técnico', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=85' },
  { category: 'Plegado' as const, title: 'Plegadora en operación', meta: 'Chapa doblada', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85' },
  { category: 'Plegado' as const, title: 'Pieza plegada', meta: 'Metal formado', image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1600&q=85' },
  { category: 'Plegado' as const, title: 'Taller de fabricación', meta: 'Proceso industrial', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=85' },
];

// ============================================================
// MAQUINARIA — las 3 máquinas del taller
// ============================================================
export const machinery = [
  {
    name: 'Láser Fibra',
    kicker: 'Corte de precisión',
    description: 'Piezas metálicas de precisión de 1 a 12mm de espesor con tolerancias consistentes y bordes limpios.',
    image: galleryItems[0].image,
  },
  {
    name: 'Plegadora CNC',
    kicker: 'Formado controlado',
    description: 'Capacidad de 125 Toneladas para conformado de chapas y desarrollos a medida para gabinetes, soportes y estructuras listas para ensamblar.',
    image: galleryItems[3].image,
  },
  {
    name: 'Soldadura',
    kicker: 'Unión y fabricación',
    description: 'Soldadura profesional para estructuras, ensambles y trabajos de fabricación a medida con acabados de alta resistencia.',
    image: galleryItems[5].image,
  },
];

// ============================================================
// PRODUCTOS — sección "Algunas ideas para empezar"
// ============================================================
export const products = [
  { id: 'pieza-medida', title: 'Pieza a medida', text: 'Una pieza diseñada alrededor de tus medidas, material y forma de uso.', tag: 'Para tu proyecto', placeholder: 'Pieza cortada con láser' },
  { id: 'prototipo', title: 'Prototipo industrial', text: 'Una primera versión para validar proporciones, ensamble y fabricación.', tag: 'Iteración técnica', placeholder: 'Plano técnico de AutoCAD' },
  { id: 'estructura', title: 'Estructura metálica', text: 'Componentes y conjuntos metálicos preparados para resolver una necesidad real.', tag: 'Función y escala', placeholder: 'Estructura industrial de corte láser' },
];

// ============================================================
// SOCIOS — empresas con las que se ha trabajado
// ============================================================
export const partners = [
  { name: 'Nombre empresa 1' },
  { name: 'Nombre empresa 2' },
  { name: 'Nombre empresa 3' },
  { name: 'Nombre empresa 4' },
  { name: 'Nombre empresa 5' },
];
