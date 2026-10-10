// Home.tsx — Página de inicio (/)
// Ensambla todas las secciones del sitio en orden con SEO y JSON-LD LocalBusiness.

import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { Galeria } from '../components/Galeria';
import { Maquinaria } from '../components/Maquinaria';
import { Socios } from '../components/Socios';
import { Servicios } from '../components/Servicios';
import { Productos } from '../components/Productos';
import { SobreMi } from '../components/SobreMi';
import { Contacto } from '../components/Contacto';

// JSON-LD LocalBusiness para la home
const LOCAL_BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eminencia Industrial',
  url: 'https://eminenciaindustrial.cl/',
  // TODO: confirmar con el dueño — usar la URL correcta del logo
  logo: 'https://eminenciaindustrial.cl/imagenes/logo-icono-v2.png',
  image: 'https://eminenciaindustrial.cl/imagenes/cortelaser-hero.jpg',
  telephone: '+56995462522',
  email: 'EminenciaIndustrial@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. María 6513',
    addressLocality: 'La Cisterna',
    addressRegion: 'Región Metropolitana',
    addressCountry: 'CL',
  },
  // TODO: confirmar con el dueño — coordenadas GPS verificadas
  // geo: { '@type': 'GeoCoordinates', latitude: -33.xxx, longitude: -70.xxx },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Santiago' },
    { '@type': 'AdministrativeArea', name: 'Región Metropolitana' },
    { '@type': 'Country', name: 'Chile' },
  ],
  // TODO: confirmar con el dueño — verificar que estos perfiles de Instagram son los oficiales
  sameAs: [
    'https://www.instagram.com/eminencia.industrial',
    'https://www.instagram.com/eminencia.industrial.home',
  ],
  description:
    'Taller de corte láser de fibra, plegado CNC y soldadura en Santiago. Procesamos acero al carbono, acero inoxidable y aluminio de 1 a 12 mm. Ubicados en Av. María 6513, La Cisterna.',
  priceRange: '$$',
  currenciesAccepted: 'CLP',
  paymentAccepted: 'Transferencia, efectivo',
};

export default function Home() {
  return (
    <>
      <SEO
        title="Corte láser y plegado CNC en Santiago | Eminencia Industrial"
        description="Corte láser de fibra, plegado CNC y soldadura de acero al carbono, inoxidable y aluminio en Santiago. Taller en La Cisterna. Cotiza por WhatsApp: +56 9 9546 2522."
        canonical="/"
        image="/imagenes/cortelaser-hero.jpg"
        jsonLd={LOCAL_BUSINESS_JSONLD}
      />
      <Hero />
      <Galeria />
      <Maquinaria />
      <Socios />
      <Servicios />
      <Productos />
      <SobreMi />
      <Contacto />
    </>
  );
}
