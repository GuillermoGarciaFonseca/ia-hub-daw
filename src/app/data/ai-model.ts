/**
 * Modelo de datos del hub.
 *
 * Cada IA es un objeto `AiProfile` en `src/app/data/ais/<slug>.ts`.
 * Para añadir una IA nueva basta con crear ese archivo y registrarlo en `ais/index.ts`:
 * la portada, el menú, la ruta `/ia/<slug>` y la página se generan solos.
 */

export interface Link {
  label: string;
  url: string;
}

export interface ActionButton extends Link {
  /** `primary` = botón relleno con el color de la IA; `ghost` = botón secundario. */
  variant?: 'primary' | 'ghost';
}

/** Tarjeta genérica: sirve para recursos, casos de uso, funciones, lenguajes, accesos… */
export interface InfoCard {
  title: string;
  badge?: string;
  text?: string;
  bullets?: string[];
  pills?: string[];
  links?: Link[];
}

export interface Plan {
  tier: string;
  price?: string;
  img?: string;
  forWho?: string;
  /** Lista corta de "qué cambia" (se muestra destacada). */
  highlights?: string[];
  includes?: string[];
  limitations?: string[];
  notes?: string[];
}

export interface PromptItem {
  title: string;
  badge?: string;
  prompt: string;
}

export interface KeyValue {
  key: string;
  value: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface PromptBuilderStyle {
  id: string;
  name: string;
  vibe: string;
  base: string;
}

export interface PromptBuilderConfig {
  defaultSubject: string;
  styles: PromptBuilderStyle[];
  aspectRatios: { id: string; label: string }[];
  defaultStyle: string;
  defaultAspectRatio: string;
  stylize: { initial: number; min: number; max: number; steps: number[] };
  chaos: { initial: number; min: number; max: number; steps: number[] };
}

interface SectionBase {
  title: string;
  intro?: string;
  buttons?: ActionButton[];
}

export interface ProsConsSection extends SectionBase {
  type: 'prosCons';
  pros: string[];
  cons: string[];
}

export interface CardsSection extends SectionBase {
  type: 'cards';
  cards: InfoCard[];
}

export interface PromptsSection extends SectionBase {
  type: 'prompts';
  prompts: PromptItem[];
  /** Prompt negativo opcional (generadores de imagen). */
  negativePrompt?: string;
}

export interface PlansSection extends SectionBase {
  type: 'plans';
  plans: Plan[];
}

export interface KeyValuesSection extends SectionBase {
  type: 'keyValues';
  items: KeyValue[];
}

export interface GallerySection extends SectionBase {
  type: 'gallery';
  images: GalleryImage[];
}

export interface PromptBuilderSection extends SectionBase {
  type: 'promptBuilder';
  config: PromptBuilderConfig;
}

export type AiSection =
  | ProsConsSection
  | CardsSection
  | PromptsSection
  | PlansSection
  | KeyValuesSection
  | GallerySection
  | PromptBuilderSection;

export interface AiTheme {
  /** `light` = fondo claro; `dark` = fondo oscuro. */
  mode: 'light' | 'dark';
  /** Color principal de la IA (botones, chips, bordes). */
  accent: string;
  /** Segundo color para los degradados del fondo. Si falta, se usa `accent`. */
  accent2?: string;
  /** Imagen de fondo de la cabecera (ruta dentro de `public/`). */
  heroImage?: string;
}

export interface AiProfile {
  /** Identificador en la URL: /ia/<slug>. */
  slug: string;
  /** Nombre corto para el menú y la portada. */
  name: string;
  /** Categoría que se muestra como etiqueta en la portada. */
  category: string;
  /** Descripción corta para la tarjeta de la portada. */
  summary: string;
  /** Título largo de la página de detalle. */
  title: string;
  subtitle: string;
  chips: string[];
  theme: AiTheme;
  sections: AiSection[];
}
