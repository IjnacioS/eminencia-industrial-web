#!/usr/bin/env node
// scripts/optimize-images.mjs
// Convierte imágenes de /public/imagenes a WebP (q=80, max 1600px, <250KB).
// Guarda originales en /originales-imagenes.
// Actualiza automáticamente las rutas en src/data.ts.
//
// Uso: node scripts/optimize-images.mjs

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const INPUT_DIR = path.join(ROOT, 'public', 'imagenes');
const OUTPUT_DIR = path.join(ROOT, 'public', 'imagenes');
const ORIGINALS_DIR = path.join(ROOT, 'originales-imagenes');
const DATA_FILE = path.join(ROOT, 'src', 'data.ts');

// Mapa de renombrado: original → nuevo-nombre (sin extensión)
// El script añade .webp al nuevo nombre
const RENAME_MAP = {
  'o1.jpeg': 'carro-con-rodillos-estructura-transporte',
  'o2.jpeg': 'taller-laser-fibra-en-operacion',
  'c1.jpeg': 'plano-diseno-estructura-metalica',
  'c2.jpeg': 'bastidor-soldado-pintado-azul',
  'c3.jpeg': 'jaula-metalica-acero-pintado-azul',
  'c4.jpeg': 'estructura-industrial-soldada-azul',
  'k1.jpeg': 'mesa-trabajo-metalica-con-ruedas',
  'k2.jpeg': 'mesa-trabajo-superficie-malla-metalica',
  'k3.jpeg': 'banco-industrial-vista-frontal',
  'k4.jpeg': 'banco-trabajo-terminado-gris',
  'k5.jpeg': 'modelo-3d-diseno-mesa-industrial',
  'p1.jpeg': 'componentes-metalicos-pintados-azul',
  'p2.jpeg': 'placas-perforadas-corte-laser-azul',
  'p3.jpeg': 'pieza-acero-conformada-pintada-negro',
  'p4.jpeg': 'lote-piezas-cortadas-laser-negro',
  'p5.jpeg': 'soporte-metalico-pata-placa-base',
  'p6.jpeg': 'control-calidad-pieza-pie-de-metro',
  'p7.jpeg': 'conjunto-piezas-soportes-ensamble',
  'cortelaser1.jpg': 'plancha-acero-carbono-cortada-laser',
  'cortelaser2.jpg': 'pieza-metalica-fabricacion-industrial',
  'cortelaser3.jpg': 'corte-tecnico-laser-acero-inoxidable',
  'cortelaser4.jpg': 'discos-acero-carbono-cortados-laser',
  'cortelaser5.jpg': 'proceso-corte-laser-chispas-acero',
  'cortelaser6.jpg': 'pantalla-programacion-cnc-planimetria',
  'cortelaser7.jpg': 'planchas-acero-apiladas-produccion-laser',
  'cortelaser9.jpg': 'piezas-acero-plegadas-en-l-pintadas-negro',
  'cortelaser12.webp': 'piezas-fijacion-perforaciones-laser-inox',
  'plegado1.webp': 'plegadora-cnc-125t-doblando-chapa-acero',
  'plegado2.png': 'pieza-acero-plegada-medida-cnc',
  'plegado3.png': 'taller-plegado-fabricacion-industrial',
  'plegadoracnc.jpeg': 'plegadora-cnc-125-toneladas-taller',
  'cortelaser-hero.jpg': 'cortelaser-hero', // conservar nombre (og:image)
  'soldadura-hero.jpg': 'soldadura-hero',
  'plegado-hero.jpg': 'plegado-hero',
  'planimetria-hero.jpg': 'planimetria-hero',
  'laserfibra.webp': 'maquina-laser-fibra-corte-acero',
  'soldadura.jpg': 'soldador-profesional-estructura-metalica',
  'piezaamedida.webp': 'pieza-metalica-medida-laser-plegado',
  'prototipoindustrial.webp': 'prototipo-industrial-metalico',
  'estructurametalica.webp': 'estructura-metalica-soldada-instalacion',
};

// Imágenes que NO se procesan (logos, socios, íconos)
const SKIP_PATTERNS = ['caf.', 'emecin.', 'geolab.', 'ingomar.', 'pesamatic.', 'logo-icono', 'logo3d'];

async function processImage(inputPath, outputPath) {
  try {
    const info = await sharp(inputPath)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);

    const sizeKB = Math.round(info.size / 1024);
    const flag = sizeKB > 250 ? ' ⚠️  >250KB' : '';
    console.log(`  ✓ ${path.basename(outputPath)} — ${sizeKB}KB${flag}`);
    return true;
  } catch (err) {
    console.error(`  ✗ Error procesando ${path.basename(inputPath)}: ${err.message}`);
    return false;
  }
}

async function main() {
  // Crear directorio de originales si no existe
  if (!fs.existsSync(ORIGINALS_DIR)) {
    fs.mkdirSync(ORIGINALS_DIR, { recursive: true });
    console.log(`Directorio de originales creado: ${ORIGINALS_DIR}`);
  }

  const files = fs.readdirSync(INPUT_DIR).filter((f) => {
    if (SKIP_PATTERNS.some((p) => f.toLowerCase().includes(p.toLowerCase().split('.')[0]))) return false;
    return /\.(jpg|jpeg|png|webp)$/i.test(f);
  });

  console.log(`\nOptimizando ${files.length} imágenes...\n`);

  // Mapa de rutas viejas → nuevas para actualizar data.ts
  const routeMap = {};

  for (const file of files) {
    const baseName = path.parse(file).name;
    const ext = path.parse(file).ext;
    const newBaseName = RENAME_MAP[file];

    if (!newBaseName) {
      console.log(`  - Sin mapeo para ${file}, se optimiza sin renombrar`);
    }

    const outputName = `${newBaseName || baseName}.webp`;
    const inputPath = path.join(INPUT_DIR, file);
    const outputPath = path.join(OUTPUT_DIR, outputName);
    const originalsDest = path.join(ORIGINALS_DIR, file);

    // Copiar original si no es WebP ya procesado
    if (!fs.existsSync(originalsDest)) {
      fs.copyFileSync(inputPath, originalsDest);
    }

    // Procesar imagen
    const ok = await processImage(inputPath, outputPath);

    if (ok && newBaseName) {
      // Registrar mapeo de rutas
      routeMap[`/imagenes/${file}`] = `/imagenes/${outputName}`;

      // Eliminar original si se renombró exitosamente y no es el mismo archivo
      if (outputName !== file) {
        try { fs.unlinkSync(inputPath); } catch (_) { /* ignorar si ya no existe */ }
      }
    }
  }

  // Actualizar data.ts con las nuevas rutas
  if (Object.keys(routeMap).length > 0) {
    let dataContent = fs.readFileSync(DATA_FILE, 'utf-8');
    let updated = 0;
    for (const [oldPath, newPath] of Object.entries(routeMap)) {
      const regex = new RegExp(oldPath.replace('.', '\\.').replace('/', '\\/'), 'g');
      const before = dataContent;
      dataContent = dataContent.replace(new RegExp(`'${escapeRegex(oldPath)}'`, 'g'), `'${newPath}'`);
      dataContent = dataContent.replace(new RegExp(`"${escapeRegex(oldPath)}"`, 'g'), `"${newPath}"`);
      if (dataContent !== before) updated++;
    }
    fs.writeFileSync(DATA_FILE, dataContent, 'utf-8');
    console.log(`\n✓ data.ts actualizado — ${updated} rutas cambiadas`);
  }

  console.log('\n✓ Optimización completa. Originales guardados en /originales-imagenes');
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

main().catch(console.error);
