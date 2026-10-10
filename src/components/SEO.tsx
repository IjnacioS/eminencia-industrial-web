// SEO.tsx — Componente de metadatos SEO por página
// Inyecta dinámicamente: <title>, meta description, canonical, OG, Twitter Card y JSON-LD.
// Funciona tanto en client-side rendering como en el HTML generado por vite-ssg.

import { useEffect } from 'react';

const BASE_URL = 'https://eminenciaindustrial.cl';
const DEFAULT_IMAGE = `${BASE_URL}/imagenes/cortelaser-hero.jpg`;
const SITE_NAME = 'Eminencia Industrial';

export interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  /** Ruta relativa o URL absoluta de la imagen OG (1200×630). Por defecto usa la imagen hero. */
  image?: string;
  /** Si es true no indexa la página (para 404, etc.) */
  noindex?: boolean;
  /** JSON-LD adicional (objeto JS ya armado, se serializa automáticamente) */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jsonLd?: Record<string, any> | Record<string, any>[];
}

/**
 * Establece o actualiza una etiqueta <meta> en el <head>.
 * Si ya existe con ese atributo/valor la reutiliza; si no, la crea.
 */
function setMeta(attr: string, value: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${value}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id: string, data: object | object[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data, null, 2);
}

export function SEO({ title, description, canonical, image, noindex = false, jsonLd }: SEOProps) {
  const absoluteCanonical = canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical}`;
  const absoluteImage = image
    ? image.startsWith('http')
      ? image
      : `${BASE_URL}${image}`
    : DEFAULT_IMAGE;

  useEffect(() => {
    // Title
    document.title = title;

    // Robots
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Description
    setMeta('name', 'description', description);

    // Canonical
    setLink('canonical', absoluteCanonical);

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', absoluteCanonical);
    setMeta('property', 'og:image', absoluteImage);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', 'es_CL');

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', absoluteImage);

    // JSON-LD adicional
    if (jsonLd) {
      setJsonLd('page-jsonld', jsonLd);
    }
  }, [title, description, absoluteCanonical, absoluteImage, noindex, jsonLd]);

  return null;
}
