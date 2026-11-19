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
2. Cambia `slug`, `name`, `category`, `summary`, textos, `lastReviewed` (fecha `AAAA-MM-DD` en la que revisaste los datos en la web oficial), `theme` (modo claro u oscuro y colores) y `sections`.
   Si no puedes verificar un precio en la web oficial, pon `price: 'Consultar web oficial'` y enlaza la web en `buttons`.
3. Añádela a la lista `AIS` de `src/app/data/ais/index.ts`.
4. Si usa imagen de cabecera, guárdala en `public/img/<slug>/` y ponla en `theme.heroImage`.

La portada, el menú y la ruta `/ia/<slug>` se generan solos. Tipos de sección disponibles:
`prosCons`, `cards`, `prompts`, `plans`, `keyValues`, `gallery` y `promptBuilder`.

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
