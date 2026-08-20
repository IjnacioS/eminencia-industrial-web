// Contacto.tsx — Sección de ubicación, contacto directo y mapa Mapbox
// Incluye datos de contacto reales, enlaces a Instagram, botón inteligente de correo (Gmail en PC / App en Móvil) y mapa Mapbox.
// Para que el mapa funcione: crear archivo .env con VITE_MAPBOX_TOKEN=tu_token

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Clock3, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_EMAIL, WHATSAPP_LABEL } from '../data';
import { getEmailLink, handleEmailClick, isMobileDevice, whatsappLink } from '../helpers';
import { SectionHeading } from './SectionHeading';

// Coordenadas aproximadas de Av. María 6513, La Cisterna, Santiago
const MAP_CENTER: [number, number] = [-70.653, -33.528];
const MAP_ZOOM = 15;

export function Contacto() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);
  const [emailHref, setEmailHref] = useState(`mailto:${CONTACT_EMAIL}`);

  // Actualizar el href al montar en el cliente
  useEffect(() => {
    setEmailHref(getEmailLink('Consulta de proyecto - Eminencia Industrial'));
  }, []);

  // Inicializar mapa Mapbox con estilo oscuro/minimalista
  // Solo se activa si existe un token en las variables de entorno
  useEffect(() => {
    const token = import.meta.env.VITE_MAPBOX_TOKEN;
    if (!token || !mapContainer.current || mapRef.current) return;

    let map: unknown;

    import('mapbox-gl').then((mapboxgl) => {
      const mb = mapboxgl.default || mapboxgl;
      (mb as any).accessToken = token;

      map = new (mb as any).Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: MAP_CENTER,
        zoom: MAP_ZOOM,
        attributionControl: false,
      });

      // Marcador amarillo en la ubicación del taller
      new (mb as any).Marker({ color: '#e5d00e' })
        .setLngLat(MAP_CENTER)
        .addTo(map);

      mapRef.current = map;
    });

    return () => {
      if (mapRef.current) {
        (mapRef.current as any).remove();
        mapRef.current = null;
      }
    };
  }, []);

  const hasToken = !!import.meta.env.VITE_MAPBOX_TOKEN;

  return (
    <section id="contacto" className="bg-[#f1efe8] py-24 md:py-32">
      <span id="ubicacion" className="sr-only" tabIndex={-1} />
      <div className="section-shell grid gap-14 lg:grid-cols-[.85fr_1.15fr]">

        {/* Columna izquierda: datos de contacto y redes sociales */}
        <div>
          <SectionHeading
            eyebrow="Ubicación y contacto"
            title={<>Un taller cerca,<br /><span className="bg-[#e5d00e] text-[#17212c] px-2 py-0.5 inline-block">una respuesta rápida.</span></>}
            text="Coordinemos para que conozcas el espacio o conversemos tu proyecto desde la Región Metropolitana, Chile."
          />

          {/* Datos de contacto: dirección, horario, teléfono, correo y cuentas de Instagram */}
          <div className="mt-10 space-y-4 border-t border-[#c6c7c1] pt-7 text-sm">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-[#17212c]" size={19} />
              <span>Av. María 6513, La Cisterna<br /><span className="text-xs text-[#7c8583]">Santiago, Chile</span></span>
            </p>
            <p className="flex items-center gap-3">
              <Clock3 className="shrink-0 text-[#17212c]" size={19} />
              <span>Lunes a viernes, de 8:00 a 18:00</span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="shrink-0 text-[#17212c]" size={19} />
              <span>{WHATSAPP_LABEL}</span>
            </p>
            <a
              href={emailHref}
              onClick={(e) => handleEmailClick(e)}
              target={isMobileDevice() ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="contact-link flex items-center gap-3"
            >
              <Mail className="shrink-0 text-[#17212c]" size={19} />
              <span>{CONTACT_EMAIL}</span>
            </a>

            {/* Cuentas oficiales de Instagram */}
            <div className="border-t border-[#c6c7c1]/60 pt-4 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#7c8583]">Redes sociales</p>
              <a
                href="https://instagram.com/eminencia.industrial"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link flex items-center gap-3"
              >
                <Instagram className="shrink-0 text-[#17212c]" size={18} />
                <span>@eminencia.industrial</span>
              </a>
              <a
                href="https://instagram.com/eminencia.industrial.home"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link flex items-center gap-3"
              >
                <Instagram className="shrink-0 text-[#17212c]" size={18} />
                <span>@eminencia.industrial.home</span>
              </a>
            </div>
          </div>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-9 inline-flex items-center gap-3 border-b-2 border-[#17212c] pb-2 text-sm font-bold hover:opacity-80"
            data-testid="link-location-whatsapp"
          >
            Coordinar por WhatsApp <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Columna derecha: mapa y botón directo para escribir correo */}
        <div className="grid gap-5 md:grid-cols-2">

          {/* Mapa Mapbox (estilo oscuro) o placeholder si no hay token */}
          <div className="min-h-[280px] overflow-hidden border border-[#c6c7c1] bg-[#1a1a2e] md:col-span-2">
            {hasToken ? (
              <div ref={mapContainer} className="h-full min-h-[280px] w-full" />
            ) : (
              /* Placeholder estilizado cuando no hay token de Mapbox */
              <div className="map-placeholder">
                <MapPin size={36} className="text-[#e5d00e]" />
                <p className="map-placeholder-title">Mapa no disponible</p>
                <p className="map-placeholder-text">
                  Configura <code>VITE_MAPBOX_TOKEN</code> en tu archivo <code>.env</code> para activar el mapa.
                </p>
                <p className="map-placeholder-address">📍 Av. María 6513, La Cisterna, Santiago</p>
              </div>
            )}
          </div>

          {/* Bloque de contacto por correo directo:
              - En computador: abre directamente la redacción de Gmail en una nueva pestaña
              - En celular: abre la aplicación nativa de correo del teléfono */}
          <div className="border border-[#c6c7c1] bg-[#e9e7df] p-8 md:col-span-2 flex flex-col justify-between gap-6">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Mail size={22} className="text-[#e5d00e]" />
                <h3 className="font-display text-2xl font-bold text-[#17212c]">Contacto directo por correo</h3>
              </div>
              <p className="text-sm leading-6 text-[#58636b]">
                ¿Tienes planos técnicos, archivos CAD o especificaciones para cotizar? Escríbenos directamente a nuestra casilla de correo para una respuesta rápida y detallada.
              </p>
            </div>

            <a
              href={emailHref}
              onClick={(e) => handleEmailClick(e, 'Consulta de proyecto - Eminencia Industrial')}
              target={isMobileDevice() ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="focus-ring flex min-h-14 items-center justify-center gap-3 bg-[#17212c] px-6 text-sm font-bold text-[#f3f0e8] transition-colors hover:bg-[#263847] hover:text-[#e5d00e]"
              data-testid="button-mail-direct"
            >
              <Mail size={18} /> Escríbenos un correo <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
