import { AiProfile } from '../ai-model';
import { CHATGPT } from './chatgpt';
import { CLAUDE } from './claude';
import { COPILOT } from './copilot';
import { GEMINI } from './gemini';
import { GROK } from './grok';
import { LLAMA } from './llama';
import { MIDJOURNEY } from './midjourney';
import { MISTRAL } from './mistral';
import { PERPLEXITY } from './perplexity';
import { STABLE_DIFFUSION } from './stable-diffusion';

/**
 * Registro de todas las IAs del hub. El orden de esta lista es el de la portada y el menú.
 * Para añadir una IA: crea su archivo en esta carpeta y añádela aquí.
 */
export const AIS: readonly AiProfile[] = [
  CHATGPT,
  CLAUDE,
  GEMINI,
  COPILOT,
  MISTRAL,
  LLAMA,
  PERPLEXITY,
  GROK,
  MIDJOURNEY,
  STABLE_DIFFUSION,
];

export function findAiBySlug(slug: string | null | undefined): AiProfile | undefined {
  return AIS.find((ai) => ai.slug === slug);
}
