# IA Hub

Panel informativo para comparar IAs y aprender a usarlas con cabeza (TFG de DAW, Angular 21).

## Cómo está organizado

Todo el contenido vive en **datos**, no en componentes:

- `src/app/data/ai-model.ts`: tipos (`AiProfile`, secciones, planes, prompts…).
- `src/app/data/ais/<slug>.ts`: un archivo por IA con su texto, colores y secciones.
- `src/app/data/ais/index.ts`: lista de IAs (el orden es el de la portada y el menú).
- `src/app/pages/ai-detail/`: **una sola página** que pinta cualquier IA en `/ia/<slug>`.
- `src/app/components/prompt-builder/`: constructor interactivo de prompts (lo usa Midjourney).

Las rutas antiguas (`/claude`, `/chatgpt`…) redirigen a las nuevas (`/ia/claude`…).

## Cómo añadir una IA

1. Copia un archivo de `src/app/data/ais/` (por ejemplo `claude.ts`) con el nombre de la nueva IA.
2. Cambia `slug`, `name`, `category` (una de `AI_CATEGORIES` en `ai-model.ts`: Chat, Productividad, Código, Imagen, Vídeo o Audio), `summary`, textos, `lastReviewed` (fecha `AAAA-MM-DD` en la que revisaste los datos en la web oficial), `theme` (modo claro u oscuro y colores) y `sections`.
   Si no puedes verificar un precio en la web oficial, pon `price: 'Consultar web oficial'` y enlaza la web en `buttons`.
3. Añádela a la lista `AIS` de `src/app/data/ais/index.ts`.
4. Si usa imagen de cabecera, guárdala en `public/img/<slug>/` y ponla en `theme.heroImage`.

El diseño está fijado en [`design.md`](design.md) (sistema Ribbon de la skill Hallmark): colores, tipografías, controles y cómo se aplica el color de cada IA. Una IA nueva solo necesita su archivo de datos; el estilo sale solo.

La portada (con su filtro por categoría, `/?categoria=Imagen`), el menú desplegable por categoría y la ruta `/ia/<slug>` se generan solos. Tipos de sección disponibles:
`prosCons`, `cards`, `prompts`, `plans`, `keyValues`, `gallery`, `examples` y `promptBuilder`.

`examples` son ejemplos reales publicados en la web oficial de la IA: el resultado se **enlaza** (no se copian
imágenes, vídeos ni audios por derechos de autor) y el `prompt` se copia tal cual lo publican. Si la web no
publica el prompt, se deja vacío; si solo se copia una parte, se marca con `promptExcerpt: true`.

## Publicar en Cloudflare Pages

En **Workers & Pages → Create application → Pages → Import an existing Git repository**, elige este repo y pon:

| Opción | Valor |
|---|---|
| Production branch | `main` |
| Framework preset | `None` (el preset de Angular espera otra carpeta de salida) |
| Build command | `npm run build` |
| Build output directory | `dist/ia-hub/browser` |
| Root directory | *(vacío)* |

- **Node**: el archivo `.node-version` fija Node 22, que es lo que pide Angular 21. Cloudflare lo lee solo. Si tu
  proyecto usa una imagen de build antigua (v1 o v2, con Node 12 o 18), cámbiala a la v3 en *Settings → Build*.
- **Recargar `/ia/claude` no da 404**: como no hay un `404.html` en la raíz de la salida, Cloudflare Pages trata la web
  como SPA y sirve `index.html` en cualquier ruta que no sea un archivo; luego Angular pinta la página correcta. No hace
  falta `_redirects`. Ver [Serving Pages](https://developers.cloudflare.com/pages/configuration/serving-pages/).
- `npm run build` ejecuta después `scripts/check-pages-build.mjs` (`postbuild`), que hace fallar el build si la salida no
  está en `dist/ia-hub/browser` o si alguien añade un `404.html` (eso desactivaría el modo SPA).

### Alternativa: Cloudflare Workers

Si el panel de Cloudflare te lleva al formulario de **Worker** ("Configure your Worker project", con un campo
*Deploy command*), también vale. El archivo `wrangler.jsonc` ya tiene lo necesario: publica `dist/ia-hub/browser`
con `not_found_handling: "single-page-application"`, así que recargar `/ia/claude` tampoco da 404.

| Opción | Valor |
|---|---|
| Project name | `web-ia` (tiene que coincidir con `name` en `wrangler.jsonc`) |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Path | `/` |

Pages ignora `wrangler.jsonc` (no tiene `pages_build_output_dir`), así que no afecta si usas Pages.

Para probarlo en local tal y como lo sirve Cloudflare:

```bash
npm run build
npx wrangler@4.156.0 pages dev dist/ia-hub/browser
```

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
