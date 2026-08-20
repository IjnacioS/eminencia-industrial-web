// Productos.tsx — Sección "Algunas ideas para empezar"
// Muestra 3 tarjetas de productos con imagen placeholder, título y descripción.
// Las imágenes deben reemplazarse por fotos reales de:
// 1) Pieza cortada con láser  2) Plano técnico de AutoCAD  3) Estructura industrial

import { ArrowUpRight, ImageIcon } from 'lucide-react';
import { products } from '../data';
import { whatsappLink } from '../helpers';
import { SectionHeading } from './SectionHeading';

export function Productos() {
  return (
    <section id="productos" className="bg-[#e9e7df] py-24 md:py-32">
      <div className="section-shell">
        {/* Encabezado con enlace a WhatsApp */}
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Productos a definir"
            title={<>Algunas ideas<br /><span className="bg-[#e5d00e] text-[#17212c] px-2 py-0.5 inline-block">para empezar.</span></>}
            text="Piezas a medida según lo que necesites: material, espesor, cantidad y terminación se conversan directamente."
          />
          <a
            href={whatsappLink('Hola, quiero consultar por un producto a medida.')}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex items-center gap-2 text-sm font-bold text-[#17212c] underline decoration-[#17212c] decoration-2 underline-offset-8 hover:opacity-80"
            data-testid="link-products-whatsapp"
          >
            Consultar una idea <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Tarjetas de productos */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="group overflow-hidden border border-[#bec0ba] bg-[#f1efe8]"
              data-testid={`card-product-${product.id}`}
            >
              {/* Espacio placeholder para la imagen del producto */}
              <div className="product-placeholder">
                <div className="product-placeholder-content">
                  <ImageIcon size={24} className="text-[#e5d00e]/80" />
                  <span className="product-placeholder-label">{product.placeholder}</span>
                </div>
                <span className="product-mark">Producto / 0{index + 1}</span>
              </div>

              {/* Información del producto */}
              <div className="p-6">
                <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-[#17212c] bg-[#e5d00e] px-2 py-0.5 inline-block">{product.tag}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-[#17212c]">{product.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#58636b]">{product.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
