# Eminencia Industrial — Sitio Web Oficial

Sitio web corporativo y landing page de alta conversión para **Eminencia Industrial** (https://eminenciaindustrial.cl), taller especializado en corte láser con fibra óptica, plegado CNC de chapas metálicas, soldadura calificada y desarrollo de proyectos industriales a medida ubicado en Av. María 6513, La Cisterna, Santiago de Chile.

---

## 🛠️ Stack Tecnológico

- **Framework & Bundler:** [Vite](https://vitejs.dev/) (v7)
- **Biblioteca UI:** [React](https://react.dev/) (v19)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos & UI:** [Tailwind CSS](https://tailwindcss.com/) (v4), [shadcn/ui](https://ui.shadcn.com/) y primitivos de [Radix UI](https://www.radix-ui.com/)
- **Iconografía:** [Lucide React](https://lucide.dev/) y [React Icons](https://react-icons.github.io/react-icons/)
- **Despliegue & Hosting:** [Vercel](https://vercel.com/) con soporte para redirecciones DNS, caché inmutable y encabezados de indexación

---

## 📁 Estructura del Proyecto

```text
pag-eminencia-industrial/
├── index.html               # Documento raíz, metadatos SEO, Open Graph y Schema JSON-LD
├── package.json             # Scripts y dependencias del proyecto
├── tsconfig.json            # Configuración de compilación TypeScript
├── vite.config.ts           # Configuración de Vite y plugins
├── vercel.json              # Reglas de redirección www, cabeceras noindex y caché de assets
├── .env.example             # Plantilla de variables de entorno
├── public/                  # Archivos estáticos servidos directamente
│   ├── favicon.svg          # Favicon del sitio
│   ├── robots.txt           # Reglas para motores de búsqueda y sitemap
│   ├── sitemap.xml          # Mapa del sitio XML para indexación
│   ├── imagenes/            # Fotos de maquinaria, galería, logos y productos
│   └── services/            # Ilustraciones técnicas SVG de cada servicio
└── src/
    ├── main.tsx             # Punto de montaje de React
    ├── App.tsx              # Componente principal y ensamble de secciones
    ├── index.css            # Estilos globales, tokens de diseño y tipografías
    ├── data.ts              # DATOS CENTRALIZADOS (contacto, servicios, galería, maquinaria, productos)
    ├── helpers.ts           # Funciones de utilidad (enlaces a WhatsApp, correo, etc.)
    └── components/          # Componentes modulares por sección
        ├── Header.tsx       # Navegación fija y menú responsive
        ├── Hero.tsx         # Portada de alto impacto (único H1 del sitio)
        ├── Galeria.tsx      # Carrusel interactivo filtrable por categoría
        ├── Maquinaria.tsx   # Equipamiento técnico (Láser fibra, Plegadora 125T, Soldadura)
        ├── Socios.tsx       # Empresas asociadas y clientes
        ├── Servicios.tsx    # Tarjetas de servicios técnicos con descripciones
        ├── Productos.tsx    # Proyectos y piezas metálicas a medida
        ├── SobreMi.tsx      # Perfil profesional y dirección técnica
        ├── Contacto.tsx     # Ubicación, mapa, horarios, correo directo y WhatsApp
        ├── Footer.tsx       # Pie de página y enlaces secundarios
        ├── SectionHeading.tsx # Encabezados H2 consistentes
        └── ui/              # Componentes base reutilizables (shadcn/ui)
```

---

## 🚀 Instalación y Ejecución Local

### Prerrequisitos
- **Node.js** 18.x, 20.x LTS o superior.
- **npm** (incluido con Node.js).

### Pasos

1. **Clonar e instalar dependencias:**
   ```bash
   git clone https://github.com/IjnacioS/eminencia-industrial-web.git
   cd pag-eminencia-industrial
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   El sitio estará disponible en `http://localhost:5173`.

3. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Genera el bundle optimizado y minificado en la carpeta `dist/`.

4. **Previsualizar la compilación de producción:**
   ```bash
   npm run preview
   ```

5. **Verificación de tipos TypeScript:**
   ```bash
   npm run typecheck
   ```

---

## ⚙️ Variables de Entorno

El proyecto incluye un archivo de referencia [`.env.example`](file:///.env.example). Si deseas integrar servicios externos opcionales (como mapas de Mapbox en lugar del mapa interactivo integrado):

1. Copia el archivo `.env.example` creando un nuevo `.env`:
   ```bash
   cp .env.example .env
   ```
2. Define las claves necesarias:
   ```env
   # Token público de Mapbox (opcional)
   VITE_MAPBOX_TOKEN=tu_token_aqui
   ```

---

## ☁️ Cómo Desplegar en Vercel

1. **Conectar el repositorio:**
   - Inicia sesión en [Vercel](https://vercel.com/) e importa el repositorio `IjnacioS/eminencia-industrial-web`.
2. **Configuración de Build:**
   - Framework Preset: **Vite** (detectado automáticamente).
   - Build Command: `npm run build` o `vite build`.
   - Output Directory: `dist`.
3. **Dominio personalizado:**
   - En la sección **Settings > Domains** del proyecto en Vercel, agrega `eminenciaindustrial.cl` y `www.eminenciaindustrial.cl`.
   - Configura los registros DNS `CNAME` y `A` indicados por Vercel en tu proveedor de dominio (.cl).
4. **Archivo `vercel.json`:**
   - Ya se encuentra configurado para gestionar la redirección 308 de `www` a la raíz sin subdominio, proteger vistas previas contra duplicación y cachear assets estáticos.

---

## ✍️ Cómo Editar Contenidos

Toda la información del sitio está desacoplada de la lógica visual para permitir modificaciones rápidas:

### 1. Datos Centrales y Contacto (`src/data.ts`)
Para actualizar WhatsApp, correo o teléfono, edita las constantes al inicio de `src/data.ts`:
- `WHATSAPP_PHONE`: Número para la API de WhatsApp (sin signos, ej. `56995462522`).
- `WHATSAPP_LABEL`: Formato legible del teléfono (ej. `+56 9 9546 2522`).
- `CONTACT_EMAIL`: Casilla oficial (ej. `EminenciaIndustrial@gmail.com`).

### 2. Galería de Trabajos (`galleryItems` en `src/data.ts`)
Para agregar o modificar imágenes de la galería:
```ts
{
  category: 'Corte láser' | 'Plegado' | 'Proyectos',
  title: 'Título del trabajo',
  meta: 'Descripción técnica corta',
  image: '/imagenes/nombre-archivo.jpg'
}
```
*Las imágenes deben colocarse en `public/imagenes/`.*

### 3. Servicios (`serviceItems` en `src/data.ts`)
Para editar o agregar servicios:
```ts
{
  image: '/services/corte-laser.svg',
  number: '01',
  title: 'Corte láser',
  description: 'Descripción de 2 a 3 líneas del servicio.',
  alt: 'Texto alternativo para accesibilidad'
}
```
*Los íconos SVG vectoriales se encuentran en `public/services/`.*

### 4. Maquinaria y Productos (`src/data.ts`)
- `machinery`: Datos y fotos de las máquinas del taller.
- `products`: Ideas de proyectos y prototipos a medida.

---

## 🔍 Sección SEO y Optimización para Buscadores

El sitio está estructurado para posicionamiento orgánico local en el rubro metalmecánico:

### 1. `index.html` (Metadatos y Redes Sociales)
- **Title Tag:** `Corte láser, plegado y soldadura en Santiago | Eminencia Industrial` (enfocado en servicios clave y cobertura en toda la Región Metropolitana).
- **Meta Description:** Resumen de servicios, materiales (acero al carbono, inoxidable, aluminio) y llamado a la acción.
- **Canonical:** Apunta a la URL canónica `https://eminenciaindustrial.cl/`.
- **Open Graph & Twitter Cards:** Configurados con imagen representativa (`/imagenes/cortelaser-hero.jpg`), títulos y descripciones armonizados.

### 2. Schema JSON-LD (`LocalBusiness`)
En el `<head>` de `index.html` se incluye marcado estructurado Schema.org que informa a Google sobre el negocio:
- **Nombre:** Eminencia Industrial
- **Dirección:** Av. María 6513, La Cisterna, Región Metropolitana, CL
- **Coordenadas Geo:** Latitud `-33.5185417`, Longitud `-70.6522695`
- **Teléfono:** `+56995462522`
- **Email:** `EminenciaIndustrial@gmail.com`
- **Horario:** Lunes a Viernes de 08:00 a 18:00 (`Mo-Fr 08:00-18:00`)
- **Redes (`sameAs`):** Enlaces oficiales de Instagram.
- **Área servida:** La Cisterna y Santiago.

### 3. Archivos de Rastreo (`robots.txt` y `sitemap.xml`)
- **`public/robots.txt`:** Permite el rastreo completo a los motores de búsqueda (`Allow: /`) e indica la ruta absoluta al mapa del sitio.
- **`public/sitemap.xml`:** Lista la URL canónica principal para acelerar el descubrimiento e indexación.

### 4. Configuración de Servidor (`vercel.json`)
- **Redirección Canónica:** Redirige permanentemente `www.eminenciaindustrial.cl` hacia `https://eminenciaindustrial.cl/` para evitar contenido duplicado.
- **Protección contra indexación de previews (`X-Robots-Tag: noindex`):** Aplica la cabecera `noindex` exclusivamente a los dominios automáticos `*.vercel.app` para que Google solo indexe el dominio oficial.
- **Caché Inmutable de Assets:** Asigna `Cache-Control: public, max-age=31536000, immutable` a los archivos compilados en `/assets/*`.

---

## ⚠️ Qué actualizar si cambian datos comerciales

Si la empresa cambia de dirección, teléfono, horario de atención o redes, debes actualizar los siguientes puntos:

1. **En `src/data.ts`:**
   - Variables `WHATSAPP_PHONE`, `WHATSAPP_LABEL` y `CONTACT_EMAIL`.
2. **En `index.html` (dentro del script JSON-LD):**
   - `"telephone"` y `"email"`.
   - Objeto `"address"` (`streetAddress`, `addressLocality`, `addressRegion`).
   - Objeto `"geo"` (`latitude`, `longitude`).
   - `"openingHours"` (formato estándar, ej. `Mo-Fr 08:00-18:00`).
   - Array `"sameAs"` (si cambian los enlaces de Instagram u otras redes).
3. **En `src/components/Contacto.tsx`:**
   - Texto de la dirección y horario mostrado en el componente visual.
   - Enlace `iframe` de Google Maps (actualizar coordenadas en el atributo `src`).
