// Genera public/sitemap.xml y public/robots.txt antes de cada build ("prebuild").
// Las rutas salen de los datos: una IA nueva entra sola en el sitemap.
// La URL pública se puede cambiar con SITE_URL (por defecto, la de Cloudflare).
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SITE_URL = (process.env.SITE_URL || 'https://web-ia.guillegarfon.workers.dev').replace(/\/$/, '');
const DATA_DIR = join('src', 'app', 'data', 'ais');

const pages = [{ path: '/', lastmod: null }];
for (const file of readdirSync(DATA_DIR).filter((f) => f.endsWith('.ts') && !f.endsWith('.spec.ts') && f !== 'index.ts')) {
  const src = readFileSync(join(DATA_DIR, file), 'utf8');
  const slug = /^\s*slug:\s*'([^']+)'/m.exec(src)?.[1];
  const lastmod = /^\s*lastReviewed:\s*'([^']+)'/m.exec(src)?.[1] ?? null;
  if (slug) pages.push({ path: `/ia/${slug}`, lastmod });
}
pages.sort((a, b) => a.path.localeCompare(b.path));

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.map((p) => `  <url><loc>${SITE_URL}${p.path}</loc>${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ''}</url>`),
  '</urlset>',
  '',
].join('\n');

writeFileSync(join('public', 'sitemap.xml'), xml);
writeFileSync(join('public', 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`✔ sitemap.xml con ${pages.length} páginas (${SITE_URL})`);
