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
  ['Galería', 'galeria'],
  ['Nuestra maquinaria', 'maquinaria'],
  ['Socios', 'socios'],
  ['Servicios', 'servicios'],
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
  { category: 'Plegado' as const, title: 'Corte de plancha metálica', meta: 'Detalle de fabricación', image: '/imagenes/cortelaser1.jpg' },
  { category: 'Plegado' as const, title: 'Fabricación industrial', meta: 'Pieza metálica', image: '/imagenes/cortelaser2.jpg' },
  { category: 'Corte láser' as const, title: 'Trabajo de precisión', meta: 'Corte técnico', image: '/imagenes/cortelaser3.jpg' },
  { category: 'Corte láser' as const, title: 'Piezas circulares cortadas', meta: 'Discos de acero', image: '/imagenes/cortelaser4.jpg' },
  { category: 'Corte láser' as const, title: 'Corte en proceso', meta: 'Chispas de precisión', image: '/imagenes/cortelaser5.jpg' },
  { category: 'Corte láser' as const, title: 'Programación de corte', meta: 'Planimetría en pantalla', image: '/imagenes/cortelaser6.jpg' },
  { category: 'Corte láser' as const, title: 'Planchas cortadas apiladas', meta: 'Lote de producción', image: '/imagenes/cortelaser7.jpg' },
  { category: 'Plegado' as const, title: 'Piezas plegadas en L', meta: 'Terminación en negro', image: '/imagenes/cortelaser9.jpg' },
  { category: 'Corte láser' as const, title: 'Carro con rodillos', meta: 'Estructura de transporte', image: '/imagenes/o1.jpeg' },
  { category: 'Corte láser' as const, title: 'Taller en operación', meta: 'Línea de producción', image: '/imagenes/o2.jpeg' },
  { category: 'Corte láser' as const, title: 'Piezas pintadas en azul', meta: 'Componentes terminados', image: '/imagenes/p1.jpeg' },
  { category: 'Corte láser' as const, title: 'Placas perforadas', meta: 'Corte y pintura azul', image: '/imagenes/p2.jpeg' },
  { category: 'Corte láser' as const, title: 'Pieza conformada en negro', meta: 'Terminación pintada', image: '/imagenes/p3.jpeg' },
  { category: 'Corte láser' as const, title: 'Componentes en negro', meta: 'Lote de piezas', image: '/imagenes/p4.jpeg' },
  { category: 'Corte láser' as const, title: 'Pata con placa base', meta: 'Soporte metálico', image: '/imagenes/p5.jpeg' },
  { category: 'Corte láser' as const, title: 'Control de medidas', meta: 'Verificación con pie de metro', image: '/imagenes/p6.jpeg' },
  { category: 'Corte láser' as const, title: 'Piezas y soportes', meta: 'Conjunto para ensamble', image: '/imagenes/p7.jpeg' },
  { category: 'Corte láser' as const, title: 'Piezas de fijación', meta: 'Componentes con perforaciones', image: '/imagenes/cortelaser12.webp' },
  { category: 'Plegado' as const, title: 'Plegadora en operación', meta: 'Chapa doblada', image: '/imagenes/plegado1.webp' },
  { category: 'Plegado' as const, title: 'Pieza plegada', meta: 'Metal formado', image: '/imagenes/plegado2.png' },
  { category: 'Plegado' as const, title: 'Taller de fabricación', meta: 'Proceso industrial', image: '/imagenes/plegado3.png' },
  { category: 'Proyectos' as const, title: 'Diseño de estructura', meta: 'Plano y vistas del proyecto', image: '/imagenes/c1.jpeg' },
  { category: 'Proyectos' as const, title: 'Bastidor azul', meta: 'Estructura soldada', image: '/imagenes/c2.jpeg' },
  { category: 'Proyectos' as const, title: 'Jaula metálica azul', meta: 'Estructura a medida', image: '/imagenes/c3.jpeg' },
  { category: 'Proyectos' as const, title: 'Estructura industrial azul', meta: 'Fabricación y pintura', image: '/imagenes/c4.jpeg' },
  { category: 'Proyectos' as const, title: 'Mesa de trabajo metálica', meta: 'Estructura con ruedas', image: '/imagenes/k1.jpeg' },
  { category: 'Proyectos' as const, title: 'Mesa con malla', meta: 'Superficie reforzada', image: '/imagenes/k2.jpeg' },
  { category: 'Proyectos' as const, title: 'Banco industrial', meta: 'Vista frontal', image: '/imagenes/k3.jpeg' },
  { category: 'Proyectos' as const, title: 'Banco de trabajo terminado', meta: 'Acabado en gris', image: '/imagenes/k4.jpeg' },
  { category: 'Proyectos' as const, title: 'Diseño de mesa', meta: 'Modelo 3D del proyecto', image: '/imagenes/k5.jpeg' },
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
  { id: 'pieza-medida', title: 'Pieza a medida', text: 'Una pieza diseñada alrededor de tus medidas, material y forma de uso.', tag: 'Para tu proyecto', image: '/imagenes/piezaamedida.webp' },
  { id: 'prototipo', title: 'Prototipo industrial', text: 'Una primera versión para validar proporciones, ensamble y fabricación.', tag: 'Iteración técnica', image: '/imagenes/prototipoindustrial.webp' },
  { id: 'estructura', title: 'Estructura metálica', text: 'Componentes y conjuntos metálicos preparados para resolver una necesidad real.', tag: 'Función y escala', image: '/imagenes/estructurametalica.webp' },
];

// ============================================
// SOCIOS — empresas con las que se ha trabajado
// ============================================
export const partners = [
  { name: 'Caf', image: '/imagenes/caf.png' },
  { name: 'Emecin Limitada', image: '/imagenes/emecin.png' },
  { name: 'Geolab', image: '/imagenes/geolab.png' },
  { name: 'Ingomar', image: '/imagenes/ingomar.png' },
  { name: 'Pesamatic', image: '/imagenes/pesamatic.png' },
];
