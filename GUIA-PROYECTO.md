# Guía del Proyecto — Eminencia Industrial

Sitio web de landing page para Eminencia Industrial (corte láser, plegado, soldadura y proyectos en general). Este documento explica la estructura del proyecto, cómo correrlo, y qué falta por completar.

---

## 🚀 Cómo correr el proyecto

```bash
# 1. Instalar todas las dependencias
npm install

# 2. Correr el servidor de desarrollo local
npm run dev
# Se abre en http://localhost:5173

# 3. Generar el paquete optimizado para producción (carpeta /dist)
npm run build

# 4. Probar localmente el build de producción antes de subirlo
npm run preview
```

**Requisito**: Node.js versión 18.x, 20.x LTS o superior instalado en el equipo.

---

## 📁 Estructura del proyecto

```text
├── .env.example              # Plantilla de variables de entorno (Token Mapbox)
├── index.html                # Documento HTML raíz con metadatos SEO y tipografías
├── package.json              # Dependencias y scripts del proyecto
├── tsconfig.json             # Configuración del compilador TypeScript
├── vite.config.ts            # Configuración de Vite y plugin Tailwind CSS
└── src/
    ├── App.tsx               # Componente principal que estructura y renderiza las secciones
    ├── main.tsx               # Punto de entrada de React en el DOM
    ├── index.css              # Estilos globales, variables de color y clases utilitarias
    ├── data.ts                # Constantes centrales editables (textos, listas, teléfonos)
    ├── helpers.ts             # Funciones auxiliares reutilizables (link de WhatsApp, etc.)
    └── components/
        ├── Header.tsx         # Barra de navegación superior con menú responsive
        ├── Hero.tsx           # Portada: título principal y grid 2×2 de fotos
        ├── Servicios.tsx      # "Del plano a la pieza": 3 tarjetas de servicio
        ├── Maquinaria.tsx     # "Nuestra Maquinaria": 3 máquinas del taller
        ├── Socios.tsx         # "Gente con la que hemos trabajado": 5 espacios de logos
        ├── Galeria.tsx        # Carrusel de fotos filtrable por técnica
        ├── Productos.tsx      # "Algunas ideas para empezar": 3 tarjetas de productos
        ├── SobreMi.tsx        # Perfil profesional de Cristóbal Martínez
        ├── Contacto.tsx       # Dirección, horarios, teléfono, correo, formulario y mapa
        ├── Footer.tsx         # Pie de página: copyright, enlaces, redes
        ├── Logo.tsx           # Isotipo "EI / Eminencia Industrial" (Header y Footer)
        ├── SectionHeading.tsx # Encabezado reutilizable (usado en todas las secciones)
        └── ui/                # Componentes base de interfaz (botones, badges, diálogos)
```

**Orden de las secciones en el sitio**: Hero → Servicios → Maquinaria → Socios → Galería → Productos → Sobre mí → Contacto.

---

## 🧩 Qué hace cada componente

| Componente | Qué muestra |
|---|---|
| `Hero.tsx` | Título principal, botones de acción (WhatsApp / Ver galería), grid de 4 fotos |
| `Servicios.tsx` | Corte láser, Grabado de piezas, Planimetría — solo ícono y título |
| `Maquinaria.tsx` | Láser Fibra, Plegadora CNC 125T, Soldadura — foto y descripción |
| `Socios.tsx` | 5 recuadros de logos de empresas colaboradoras |
| `Galeria.tsx` | Carrusel de fotos de trabajos, filtrable por técnica |
| `Productos.tsx` | 3 ideas de productos a medida, con botón de cotización por WhatsApp |
| `SobreMi.tsx` | Presentación de Cristóbal Martínez y métricas del taller |
| `Contacto.tsx` | Dirección, horario, teléfono, correo, formulario y mapa Mapbox |
| `Header.tsx` | Menú de navegación fijo, con versión mobile (hamburguesa) |
| `Footer.tsx` | Cierre del sitio: copyright, enlaces rápidos, redes sociales |
| `Logo.tsx` | Isotipo de la marca, usado en Header y Footer |
| `SectionHeading.tsx` | Encabezado estándar (usado por todas las secciones para mantener coherencia visual) |

---

## ✏️ Cómo editar el contenido

La mayoría de los textos, teléfonos, correos y listas (servicios, maquinaria, productos, socios) están centralizados en:
```
src/data.ts
```
Para cambiar un dato (ej. el teléfono o el correo), se edita **una sola vez ahí** y se actualiza en todo el sitio automáticamente.

---

## 🗺️ Cómo activar el mapa (Mapbox)

El mapa actualmente muestra un placeholder estilizado porque falta el token de acceso. Para activarlo:

1. Crear una cuenta gratuita en [mapbox.com](https://account.mapbox.com/) y copiar el **"Default public token"**.
2. Crear un archivo llamado `.env` en la raíz del proyecto (usar `.env.example` como base).
3. Agregar la línea:
   ```env
   VITE_MAPBOX_TOKEN=pk.eyJ1Ijo...tu_token_real_aqui...
   ```
4. Reiniciar el servidor (`npm run dev`).

Si no se configura el token, el sitio sigue funcionando normal, solo se ve el placeholder en vez del mapa real — no genera errores.

---

## 🖼️ Pendiente: reemplazar imágenes y logos

Esto es lo único que falta para que el sitio esté 100% terminado:

| Qué falta | Dónde está en el código | Cantidad |
|---|---|---|
| Fotos del Hero (corte láser, soldadura, plegado, planimetría) | `src/components/Hero.tsx` (dentro de `.hero-grid-images`) | 4 fotos |
| Logos de Socios | `src/components/Socios.tsx` (dentro de cada `.partner-logo-placeholder`) | 5 logos |
| Fotos de Productos (pieza cortada, plano AutoCAD, estructura industrial) | `src/components/Productos.tsx` (dentro de `.product-placeholder`) | 3 fotos |
| Fotos de Galería y Maquinaria | `src/data.ts`, dentro de la constante `galleryItems` | Varias |
| Logo del sitio (si el cliente tiene uno) | `src/components/Logo.tsx` | 1 logo |
| Token de Mapbox | Archivo `.env` (ver sección de arriba) | — |

Para reemplazar una imagen, basta con pedirle a la IA (Antigravity, o cualquier otra) algo como: *"Reemplaza el placeholder de [sección] por este archivo de imagen que te subo."*

---

## 🛠️ Stack técnico

React 19 · TypeScript · Vite 7 · Tailwind CSS v4 · Lucide React (íconos) · Mapbox GL

---

## ✅ Estado actual

- [x] Estructura y contenido del sitio completos
- [x] Datos reales de contacto cargados
- [x] Código modularizado y comentado en español
- [x] Sin rastros de Replit/IA
- [x] `npm run build` verificado sin errores
- [ ] Reemplazar imágenes y logos placeholder (ver tabla arriba)
- [ ] Configurar token de Mapbox
- [ ] Subir a GitHub
- [ ] Conectar con Vercel + dominio
