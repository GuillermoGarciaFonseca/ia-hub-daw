# Design: IA Hub

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: atmospheric
- Shape of the first page: Index-First (the home is the index of AIs, grouped by category)
- Theme: Ribbon (deal 2/3), colourways two-in-the-morning (night) and dawn (light)
- Axes: light/grotesk-sans/chromatic-teal · posture: committed
- Hero: Banner on every route (the index or the AI's first section starts above the fold)
- Chrome: nav as a floating pill (one scrolling row under 60rem) · footer: mast (wordmark large over the category links)

## Tokens
`src/styles/tokens.css` is the source of truth; `src/styles/site.css` holds the two colourways as token blocks on `[data-mode]`. The roles:
```css
:root, [data-mode="dawn"] {
  --color-paper: oklch(98.2% 0.008 82);  --color-paper-2: oklch(95.8% 0.011 82);  --color-paper-3: oklch(92.3% 0.014 82);
  --color-ink: oklch(18% 0.006 80);  --color-ink-2: oklch(30% 0.008 80);  --color-muted: oklch(45% 0.012 80);  --color-rule: oklch(89.5% 0.011 82);
  --color-accent: oklch(44% 0.075 190);  --color-accent-ink: oklch(98% 0.006 85);  --color-focus: oklch(52% 0.09 190);
}
[data-mode="night"] {
  --color-paper: oklch(13.2% 0.022 258);  --color-paper-2: oklch(16.4% 0.022 258);  --color-paper-3: oklch(19.6% 0.022 258);
  --color-ink: oklch(93.5% 0.012 85);  --color-ink-2: oklch(84% 0.014 85);  --color-muted: oklch(74% 0.02 255);  --color-rule: oklch(27% 0.02 258);
  --color-accent: oklch(82% 0.095 68);  --color-accent-ink: oklch(20% 0.03 62);  --color-focus: oklch(82% 0.095 68);
}
:root {
  --font-display: "Instrument Sans", ui-sans-serif, system-ui, sans-serif;  --font-body: "Figtree", ui-sans-serif, system-ui, sans-serif;
  --font-outlier: "JetBrains Mono", ui-monospace, monospace;  /* one role: prompts and code */
  --radius-card: 20px;  --radius-part: 6px;  --radius-pill: 999px;  --rule-hair: 1px;  --shadow-card: none;
}
```
The spacing scale, the type scale, the easings and the durations are the scaffold's and live in `tokens.css`. Weights: 400 and 500 only. Heads at 400, `--tracking-display`, one colour; section heads at `--text-section` (about 52px at 1440).

## Controls
- Primary: a machined pill, the accent fill (`--color-accent`, or `--ai-ink` on an AI page) with `--color-accent-ink` / paper text · `--radius-pill` · 48px (44px for the small copy buttons)
- Secondary: the same pill on a `--color-paper-2` to `--color-paper-3` gradient with a hairline border · same radius and height
- Every control carries hover, active (1px press), focus-visible (2px `--color-focus` ring, instant) and disabled (0.55, not-allowed)

## Motion
- Character: calm. Colour and a 1px press only; no reveal; under reduced motion everything ends at once (`base.css`).

## Variants
- **Each AI page** (`/ia/:slug`) takes its colourway from its data (`theme.mode`: light = dawn, dark = night) and sets `data-mode` on the page and on `<body>`.
- **The AI's colour** (`theme.accent`) never paints text directly: `--ai-ink` = `color-mix(in oklab, accent 55%, --color-ink)` carries links, prices, the primary button and the focus ring; `--ai-wash` (12% on paper) tints chips and the index row hover; one radial bloom of the accent at 24% sits behind the hero. Mix in `oklab`, never `oklch` (the hue drifts toward pink).
- **`theme.accent2` is not painted.** Several pairs (violet with blue or cyan) would be the gradient gate 2a bans.
- **Sections** alternate a `--color-paper-2` band with the plain paper, no boxes; cards are `--color-paper-2`/`-3` wells, never a card in a card. Grids use `auto-fit`, so one or two cards span the width; a single example lays out text left, prompt right; five plans go 3 + 2.
- **Labels from the data** go through `plainLabel()`: emoji used as icons are stripped at render, the data stays as written. No arrows glued to link text, no middle-dot meta strings.
- **Adding an AI**: its data file only; pick an accent that reads at 55% over both inks and keep its hero image's own ratio (it renders as an `<img>`, max 480px tall).

## Exports
`src/styles/tokens.css` in this project. Tailwind, DTCG or shadcn blocks are added here on request, per `export-formats.md`.
