import { AiProfile } from '../ai-model';

export const GROK: AiProfile = {
  slug: 'grok',
  name: 'Grok',
  category: 'Social',
  summary: 'Estilo directo, con búsqueda en tiempo real en la web y en X.',
  title: 'Grok',
  subtitle:
    'La IA de xAI: tiene app propia (grok.com, iOS y Android) y también está dentro de X. Tono más “directo”, busca en la web y en X en tiempo real y genera imágenes y vídeo.',
  chips: ['Tendencias', 'Brainstorm', 'Copy', 'Rápido'],
  lastReviewed: '2026-11-19',
  theme: {
    mode: 'dark',
    accent: '#ff2bd6',
    accent2: '#22d3ee',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Muy buena para brainstorming y respuestas rápidas.',
        'Encaja bien para “qué está pasando” en temas/tendencias.',
        'Estilo más directo (menos texto relleno).',
        'Buena para listas, planes y resúmenes cortos.',
        'Ideal para contenido y copy si quieres un tono con personalidad.',
      ],
      cons: [
        'Su punto fuerte (X en tiempo real) también es su sesgo: contrasta fuentes.',
        'Si te hace falta precisión seria, toca verificar.',
        'Puede ser demasiado “valiente” en afirmaciones si no lo guías.',
        'No es la mejor para documentos ultra largos tipo “paper”.',
        'Cambios de producto frecuentes (planes/acceso).',
      ],
    },
    {
      type: 'cards',
      title: 'Para qué sirve',
      cards: [
        {
          title: 'Tendencias / resumen rápido',
          badge: '📡',
          bullets: ['Qué se está hablando y por qué', 'Resumen en 8 bullets', 'Qué es ruido vs qué es real'],
        },
        {
          title: 'Brainstorming creativo',
          badge: '⚡',
          bullets: ['Ideas para posts', 'Ganchos y titulares', 'Guiones cortos y punchy'],
        },
        {
          title: 'Decisiones express',
          badge: '🧠',
          bullets: ['Checklist rápido', 'Pros/contras en 1 minuto', 'Recomendación final + “por qué”'],
        },
        {
          title: 'Copy / estilo',
          badge: '📝',
          bullets: ['Reescribe con tono', '3 versiones (soft/medio/agresivo)', 'Optimiza para redes'],
        },
      ],
    },
    {
      type: 'prompts',
      title: 'Prompts “modo Grok”',
      prompts: [
        {
          title: 'Resumen de tema caliente',
          badge: '📡',
          prompt:
            'Explícame qué está pasando con “X” en 10 bullets.\n' +
            'Luego: 3 conclusiones + 3 cosas que aún no están claras.\n' +
            'Termina con: “qué harías tú si…”',
        },
        {
          title: 'Ideas para redes',
          badge: '⚡',
          prompt:
            'Dame 12 ideas de posts sobre “X”.\n' +
            'Formato: gancho (1 línea) + 3 bullets.\n' +
            'Tono: directo, divertido y útil.',
        },
        {
          title: 'Comparador rápido',
          badge: '⚖️',
          prompt:
            'Comparo A vs B para objetivo C.\n' +
            'Haz: tabla corta + pros/contras + recomendación final.\n' +
            'No me sueltes chapa: directo.',
        },
        {
          title: 'Reescritura con estilo',
          badge: '📝',
          prompt:
            'Reescribe este texto con 3 tonos:\n' +
            '1) profesional\n2) cercano\n3) “Grok mode” (más atrevido)\n' +
            'Texto: “...”',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Links',
      cards: [
        {
          title: 'Oficial',
          badge: '🏁',
          links: [
            { label: 'xAI', url: 'https://x.ai/' },
            { label: 'X (Twitter)', url: 'https://x.com/' },
          ],
        },
        {
          title: 'Acceso / planes',
          badge: '💳',
          links: [{ label: 'Planes de Grok (SuperGrok)', url: 'https://grok.com/plans' }],
        },
      ],
    },
    {
      type: 'plans',
      title: 'Acceso y planes',
      intro:
        'Se puede probar gratis en la web y en las apps. El precio de SuperGrok no aparece en la web pública de xAI, así que consúltalo en el enlace oficial.',
      plans: [
        {
          tier: 'Gratis',
          price: '0 €',
          forWho: 'Para probarlo y usarlo de vez en cuando.',
          includes: ['Chat, búsqueda en la web y en X', 'Imágenes y vídeo con Grok Imagine', 'Web, iOS y Android'],
          notes: ['Si solo lo usas ocasionalmente, no te hace falta pagar.'],
        },
        {
          tier: 'SuperGrok',
          price: 'Consultar web oficial',
          forWho: 'Si lo usas a diario y te quedas sin cupo.',
          highlights: ['Límites más altos', 'Acceso prioritario', 'Modo multiagente (varios agentes razonando en paralelo)'],
        },
      ],
      buttons: [
        { label: 'Abrir Grok', url: 'https://grok.com/', variant: 'primary' },
        { label: 'Ver planes oficiales', url: 'https://grok.com/plans', variant: 'ghost' },
      ],
    },
  ],
};
