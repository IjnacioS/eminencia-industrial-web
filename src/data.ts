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
  description: string;
  alt: string;
  /** Ruta interna de la página de servicio (si existe) */
  href?: string;
}

export const serviceItems: ServiceItem[] = [
  {
    image: '/services/corte-laser.svg',
    number: '01',
    title: 'Corte láser',
    description: 'Corte de alta precisión con láser de fibra de 1 a 12 mm de espesor en acero al carbono, acero inoxidable y aluminio.',
    alt: 'Ilustración técnica de cabezal de corte láser de fibra',
    href: '/corte-laser',
  },
  {
    image: '/services/plegado-cnc.svg',
    number: '02',
    title: 'Plegado CNC',
    description: 'Conformado y doblado de chapas con plegadora CNC de 125 toneladas para acero al carbono, acero inoxidable y aluminio.',
    alt: 'Ilustración técnica de plegadora CNC de 125 toneladas',
    href: '/plegado-cnc',
  },
  {
    image: '/services/soldadura.svg',
    number: '03',
    title: 'Soldadura',
    description: 'Unión y armado de piezas y estructuras en acero al carbono, acero inoxidable y aluminio con alta resistencia.',
    alt: 'Ilustración técnica de proceso de soldadura de estructuras metálicas',
    href: '/soldadura',
  },
  {
    image: '/services/grabado-piezas.svg',
    number: '04',
    title: 'Grabado de piezas',
    description: 'Marcado y grabado técnico para identificación de componentes, numeración de piezas y detalles de fabricación.',
    alt: 'Ilustración técnica de grabado y marcado de piezas metálicas',
  },
  {
    image: '/services/planimetria.svg',
    number: '05',
    title: 'Planimetría',
    description: 'Modelado 3D, desarrollo y adaptación de planos técnicos para optimizar el corte y fabricación de cada pieza.',
    alt: 'Ilustración técnica de planimetría y modelado 3D de planos industriales',
  },
];

// ============================================================
// IMÁGENES DE GALERÍA (referencias técnicas)
// ============================================================
export const galleryItems = [
  // --- Plegado ---
  {
    category: 'Plegado' as const,
    title: 'Corte de plancha metálica',
    meta: 'Acero al carbono',
    alt: 'Plancha de acero al carbono cortada con láser de fibra en taller Eminencia Industrial',
    image: '/imagenes/cortelaser1.jpg',
  },
  {
    category: 'Plegado' as const,
    title: 'Fabricación industrial',
    meta: 'Pieza metálica conformada',
    alt: 'Pieza metálica conformada en proceso de fabricación industrial, acero inoxidable',
    image: '/imagenes/cortelaser2.jpg',
  },
  {
    category: 'Plegado' as const,
    title: 'Piezas plegadas en L',
    meta: 'Acero pintado en negro',
    alt: 'Piezas de acero plegadas en forma de L con terminación pintada en negro, plegadora CNC 125T',
    image: '/imagenes/cortelaser9.jpg',
  },
  {
    category: 'Plegado' as const,
    title: 'Plegadora en operación',
    meta: 'Doblado de chapa metálica',
    alt: 'Plegadora CNC de 125 toneladas en operación doblando chapa de acero al carbono',
    image: '/imagenes/plegado1.webp',
  },
  {
    category: 'Plegado' as const,
    title: 'Pieza plegada terminada',
    meta: 'Metal formado a medida',
    alt: 'Pieza de acero plegada a medida con acabado liso, resultado de plegado CNC',
    image: '/imagenes/plegado2.png',
  },
  {
    category: 'Plegado' as const,
    title: 'Taller de fabricación',
    meta: 'Proceso industrial de plegado',
    alt: 'Vista interior del taller de plegado y fabricación industrial de Eminencia Industrial, Santiago',
    image: '/imagenes/plegado3.png',
  },
  // --- Corte láser ---
  {
    category: 'Corte láser' as const,
    title: 'Trabajo de precisión',
    meta: 'Corte técnico láser fibra',
    alt: 'Detalle de corte técnico con láser de fibra en plancha de acero inoxidable, alta precisión',
    image: '/imagenes/cortelaser3.jpg',
  },
  {
    category: 'Corte láser' as const,
    title: 'Piezas circulares cortadas',
    meta: 'Discos de acero al carbono',
    alt: 'Discos circulares de acero al carbono cortados con láser de fibra, bordes limpios sin rebaba',
    image: '/imagenes/cortelaser4.jpg',
  },
  {
    category: 'Corte láser' as const,
    title: 'Corte láser en proceso',
    meta: 'Chispas de corte de precisión',
    alt: 'Proceso de corte láser de fibra en operación con chispas visibles sobre plancha de acero',
    image: '/imagenes/cortelaser5.jpg',
  },
  {
    category: 'Corte láser' as const,
    title: 'Programación de corte',
    meta: 'Planimetría en pantalla CNC',
    alt: 'Pantalla de programación CNC con plano de corte láser y anidado de piezas optimizado',
    image: '/imagenes/cortelaser6.jpg',
  },
  {
    category: 'Corte láser' as const,
    title: 'Planchas cortadas apiladas',
    meta: 'Lote de producción terminado',
    alt: 'Lote de planchas de acero apiladas luego de corte láser de fibra, producción en serie',
    image: '/imagenes/cortelaser7.jpg',
  },
  {
    category: 'Corte láser' as const,
    title: 'Carro con rodillos',
    meta: 'Estructura de transporte industrial',
    alt: 'Carro metálico con rodillos fabricado con corte láser y soldadura, acero al carbono pintado',
    image: '/imagenes/o1.jpeg',
  },
  {
    category: 'Corte láser' as const,
    title: 'Taller en operación',
    meta: 'Línea de producción industrial',
    alt: 'Vista del taller industrial de Eminencia Industrial en operación, máquina láser de fibra activa',
    image: '/imagenes/o2.jpeg',
  },
  {
    category: 'Corte láser' as const,
    title: 'Piezas pintadas en azul',
    meta: 'Componentes terminados con pintura',
    alt: 'Componentes metálicos terminados con pintura azul industrial, fabricados con corte láser',
    image: '/imagenes/p1.jpeg',
  },
  {
    category: 'Corte láser' as const,
    title: 'Placas perforadas',
    meta: 'Corte láser y pintura azul',
    alt: 'Placas de acero con perforaciones cortadas a láser y pintadas en azul, acabado industrial',
    image: '/imagenes/p2.jpeg',
  },
  {
    category: 'Corte láser' as const,
    title: 'Pieza conformada en negro',
    meta: 'Terminación pintada industrial',
    alt: 'Pieza de acero al carbono conformada y pintada en negro, resultado de corte láser y plegado',
    image: '/imagenes/p3.jpeg',
  },
  {
    category: 'Corte láser' as const,
    title: 'Componentes en negro',
    meta: 'Lote de piezas terminadas',
    alt: 'Lote de componentes metálicos cortados a láser con terminación pintada en negro',
    image: '/imagenes/p4.jpeg',
  },
  {
    category: 'Corte láser' as const,
    title: 'Pata con placa base',
    meta: 'Soporte metálico soldado',
    alt: 'Soporte metálico con pata y placa base soldada, fabricado con corte láser y soldadura estructural',
    image: '/imagenes/p5.jpeg',
  },
  {
    category: 'Corte láser' as const,
    title: 'Control de medidas',
    meta: 'Verificación con pie de metro',
    alt: 'Verificación de medidas de pieza metálica con pie de metro, control de calidad en taller',
    image: '/imagenes/p6.jpeg',
  },
  {
    category: 'Corte láser' as const,
    title: 'Piezas y soportes',
    meta: 'Conjunto de ensamble industrial',
    alt: 'Conjunto de piezas y soportes metálicos cortados a láser listos para ensamble industrial',
    image: '/imagenes/p7.jpeg',
  },
  {
    category: 'Corte láser' as const,
    title: 'Piezas de fijación',
    meta: 'Componentes con perforaciones de precisión',
    alt: 'Piezas de fijación con perforaciones de precisión cortadas a láser en acero inoxidable',
    image: '/imagenes/cortelaser12.webp',
  },
  // --- Proyectos ---
  {
    category: 'Proyectos' as const,
    title: 'Diseño de estructura',
    meta: 'Plano y vistas del proyecto',
    alt: 'Plano técnico con vistas y detalles de estructura metálica a medida diseñada en planimetría',
    image: '/imagenes/c1.jpeg',
  },
  {
    category: 'Proyectos' as const,
    title: 'Bastidor azul',
    meta: 'Estructura soldada y pintada',
    alt: 'Bastidor metálico pintado en azul, estructura soldada a medida fabricada en Eminencia Industrial',
    image: '/imagenes/c2.jpeg',
  },
  {
    category: 'Proyectos' as const,
    title: 'Jaula metálica azul',
    meta: 'Estructura personalizada a medida',
    alt: 'Jaula metálica de acero al carbono pintada en azul, fabricación a medida con soldadura estructural',
    image: '/imagenes/c3.jpeg',
  },
  {
    category: 'Proyectos' as const,
    title: 'Estructura industrial azul',
    meta: 'Fabricación y pintura industrial',
    alt: 'Estructura industrial de acero soldada y pintada en azul, proyecto completo de fabricación',
    image: '/imagenes/c4.jpeg',
  },
  {
    category: 'Proyectos' as const,
    title: 'Mesa de trabajo metálica',
    meta: 'Estructura con ruedas industriales',
    alt: 'Mesa de trabajo metálica con ruedas industriales, fabricada con corte láser y soldadura',
    image: '/imagenes/k1.jpeg',
  },
  {
    category: 'Proyectos' as const,
    title: 'Mesa con malla metálica',
    meta: 'Superficie de trabajo reforzada',
    alt: 'Mesa de trabajo con superficie de malla metálica soldada, resistente para uso industrial',
    image: '/imagenes/k2.jpeg',
  },
  {
    category: 'Proyectos' as const,
    title: 'Banco industrial',
    meta: 'Vista frontal del banco de trabajo',
    alt: 'Banco de trabajo industrial vista frontal, estructura de acero fabricada a medida en Santiago',
    image: '/imagenes/k3.jpeg',
  },
  {
    category: 'Proyectos' as const,
    title: 'Banco de trabajo terminado',
    meta: 'Acabado en gris industrial',
    alt: 'Banco de trabajo metálico terminado con acabado pintado en gris, listo para instalación',
    image: '/imagenes/k4.jpeg',
  },
  {
    category: 'Proyectos' as const,
    title: 'Diseño de mesa',
    meta: 'Modelo 3D del proyecto',
    alt: 'Modelo 3D de diseño de mesa industrial de acero, planimetría previa a fabricación en taller',
    image: '/imagenes/k5.jpeg',
  },
];

// ============================================================
// MAQUINARIA — las 3 máquinas del taller
// ============================================================
export const machinery = [
  {
    name: 'Láser Fibra',
    kicker: 'Corte de precisión',
    description: 'Piezas metálicas de precisión de 1 a 12 mm de espesor con tolerancias consistentes y bordes limpios.',
    image: '/imagenes/laserfibra.webp',
    alt: 'Máquina láser de fibra en operación cortando plancha de acero en taller Eminencia Industrial',
  },
  {
    name: 'Plegadora CNC',
    kicker: 'Formado controlado',
    description: 'Capacidad de 125 Toneladas para conformado de chapas y desarrollos a medida para gabinetes, soportes y estructuras listas para ensamblar.',
    image: '/imagenes/plegadoracnc.jpeg',
    alt: 'Plegadora CNC de 125 toneladas doblando chapa metálica en taller industrial Santiago',
  },
  {
    name: 'Soldadura',
    kicker: 'Unión y fabricación',
    description: 'Soldadura profesional para estructuras, ensambles y trabajos de fabricación a medida con acabados de alta resistencia.',
    image: '/imagenes/soldadura.jpg',
    alt: 'Soldador profesional realizando soldadura de arco en estructura metálica industrial',
  },
];

// ============================================================
// PRODUCTOS — sección "Algunas ideas para empezar"
// ============================================================
export const products = [
  {
    id: 'pieza-medida',
    title: 'Pieza a medida',
    text: 'Una pieza diseñada alrededor de tus medidas, material y forma de uso.',
    tag: 'Para tu proyecto',
    image: '/imagenes/piezaamedida.webp',
    alt: 'Pieza metálica a medida fabricada con corte láser y plegado CNC en Santiago',
  },
  {
    id: 'prototipo',
    title: 'Prototipo industrial',
    text: 'Una primera versión para validar proporciones, ensamble y fabricación.',
    tag: 'Iteración técnica',
    image: '/imagenes/prototipoindustrial.webp',
    alt: 'Prototipo industrial metálico para validación de diseño, fabricado en Eminencia Industrial',
  },
  {
    id: 'estructura',
    title: 'Estructura metálica',
    text: 'Componentes y conjuntos metálicos preparados para resolver una necesidad real.',
    tag: 'Función y escala',
    image: '/imagenes/estructurametalica.webp',
    alt: 'Estructura metálica industrial soldada y terminada para instalación en Santiago',
  },
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
