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
  { category: 'Corte láser' as const, title: 'Corte de plancha metálica', meta: 'Detalle de fabricación', image: '/imagenes/cortelaser1.jpg' },
  { category: 'Corte láser' as const, title: 'Fabricación industrial', meta: 'Pieza metálica', image: '/imagenes/cortelaser2.png' },
  { category: 'Corte láser' as const, title: 'Trabajo de precisión', meta: 'Corte técnico', image: '/imagenes/cortelaser3.png' },
  { category: 'Plegado' as const, title: 'Plegadora en operación', meta: 'Chapa doblada', image: '/imagenes/plegado1.webp' },
  { category: 'Plegado' as const, title: 'Pieza plegada', meta: 'Metal formado', image: '/imagenes/plegado2.png' },
  { category: 'Plegado' as const, title: 'Taller de fabricación', meta: 'Proceso industrial', image: '/imagenes/plegado3.png' },
];

// ============================================================
// MAQUINARIA — las 3 máquinas del taller
// ============================================================
export const machinery = [
  {
    name: 'Láser Fibra',
    kicker: 'Corte de precisión',
    description: 'Piezas metálicas de precisión de 1 a 12mm de espesor con tolerancias consistentes y bordes limpios.',
    image: '/imagenes/laserfibra.webp',
  },
  {
    name: 'Plegadora CNC',
    kicker: 'Formado controlado',
    description: 'Capacidad de 125 Toneladas para conformado de chapas y desarrollos a medida para gabinetes, soportes y estructuras listas para ensamblar.',
    image: '/imagenes/plegadoracnc.jpeg',
  },
  {
    name: 'Soldadura',
    kicker: 'Unión y fabricación',
    description: 'Soldadura profesional para estructuras, ensambles y trabajos de fabricación a medida con acabados de alta resistencia.',
    image: '/imagenes/soldadura.jpg',
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

// ============================================
// SOCIOS — empresas con las que se ha trabajado
// ============================================
export const partners = [
  { name: 'nombre empresa 1', logo: '/imagenes/logo-empresa1.png' },
  { name: 'Nombre empresa 2', logo: '/imagenes/logo-empresa2.png' },
  { name: 'Nombre empresa 3', logo: '/imagenes/logo-empresa3.png' },
  { name: 'Nombre empresa 4', logo: '/imagenes/logo-empresa4.png' },
  { name: 'Nombre empresa 5', logo: '/imagenes/logo-empresa5.png' },
];