import { AI_CATEGORIES, AiCategory, AiProfile } from '../ai-model';
import { CHATGPT } from './chatgpt';
import { CLAUDE } from './claude';
import { COPILOT } from './copilot';
import { CURSOR } from './cursor';
import { DEEPSEEK } from './deepseek';
import { ELEVENLABS } from './elevenlabs';
import { FLUX } from './flux';
import { GEMINI } from './gemini';
import { GEMINI_NOTEBOOK } from './gemini-notebook';
import { GROK } from './grok';
import { IDEOGRAM } from './ideogram';
import { KLING } from './kling';
import { LLAMA } from './llama';
import { MIDJOURNEY } from './midjourney';
import { MISTRAL } from './mistral';
import { PERPLEXITY } from './perplexity';
import { QWEN } from './qwen';
import { RUNWAY } from './runway';
import { STABLE_DIFFUSION } from './stable-diffusion';
import { SUNO } from './suno';

/**
 * Registro de todas las IAs del hub. El orden de esta lista es el de la portada
 * y, dentro de cada categoría, el del menú.
 * Para añadir una IA: crea su archivo en esta carpeta y añádela aquí.
 */
export const AIS: readonly AiProfile[] = [
  // Chat
  CHATGPT,
  CLAUDE,
  GEMINI,
  MISTRAL,
  LLAMA,
  GROK,
  DEEPSEEK,
  QWEN,
  // Productividad
  COPILOT,
  PERPLEXITY,
  GEMINI_NOTEBOOK,
  // Código
  CURSOR,
  // Imagen
  MIDJOURNEY,
  STABLE_DIFFUSION,
  IDEOGRAM,
  FLUX,
  // Vídeo
  RUNWAY,
  KLING,
  // Audio
  ELEVENLABS,
  SUNO,
];

export function findAiBySlug(slug: string | null | undefined): AiProfile | undefined {
  return AIS.find((ai) => ai.slug === slug);
}

/** Las IAs agrupadas por categoría, en el orden de `AI_CATEGORIES` (sin categorías vacías). */
export function aisByCategory(): { category: AiCategory; ais: AiProfile[] }[] {
  return AI_CATEGORIES.map((category) => ({
    category,
    ais: AIS.filter((ai) => ai.category === category),
  })).filter((group) => group.ais.length > 0);
}
