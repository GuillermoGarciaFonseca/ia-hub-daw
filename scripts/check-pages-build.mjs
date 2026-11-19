// Comprobación después de `npm run build` (se ejecuta sola como "postbuild").
// Cloudflare Pages sirve index.html para cualquier ruta (modo SPA) solo si NO hay un
// 404.html en la raíz de la salida. Así recargar /ia/claude no da 404.
// Docs: https://developers.cloudflare.com/pages/configuration/serving-pages/
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = join('dist', 'ia-hub', 'browser');
const errors = [];

if (!existsSync(join(OUTPUT_DIR, 'index.html'))) {
  errors.push(`No existe ${OUTPUT_DIR}/index.html: revisa "outputPath" en angular.json.`);
}
if (existsSync(join(OUTPUT_DIR, '404.html'))) {
  errors.push(
    `Hay un ${OUTPUT_DIR}/404.html: Cloudflare Pages desactivaría el modo SPA y recargar /ia/<slug> daría 404.`,
  );
}

if (errors.length) {
  console.error('\n✘ La salida no está lista para Cloudflare Pages:\n  - ' + errors.join('\n  - '));
  process.exit(1);
}
console.log(`✔ Salida lista para Cloudflare Pages en ${OUTPUT_DIR} (modo SPA: sin 404.html en la raíz).`);
