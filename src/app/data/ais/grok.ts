import { AiProfile } from '../ai-model';

export const GROK: AiProfile = {
  slug: 'grok',
  name: 'Grok',
  category: 'Social',
  summary: 'Estilo directo, integrado en X (según plan).',
  title: 'Grok',
  subtitle:
    'IA integrada en X (Twitter) con tono más “directo” y buen rollo para ideas, tendencias y respuestas rápidas.',
  chips: ['Tendencias', 'Brainstorm', 'Copy', 'Rápido'],
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
        'Depende del ecosistema X (acceso/condiciones).',
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
          links: [{ label: 'X Premium', url: 'https://help.x.com/en/using-x/x-premium' }],
        },
      ],
    },
    {
      type: 'plans',
      title: 'Acceso',
      intro: 'Acceso y precios pueden variar por región y por cambios en X. Mejor mirarlo en X Premium.',
      plans: [
        {
          tier: 'Acceso (X Premium)',
          price: 'Depende del plan de X',
          notes: [
            'Grok suele estar ligado a X Premium (según región/condiciones).',
            'Si solo lo usas ocasionalmente, quizá no te compensa pagar.',
          ],
        },
      ],
      buttons: [
        { label: 'xAI', url: 'https://x.ai/', variant: 'primary' },
        { label: 'X Premium', url: 'https://help.x.com/en/using-x/x-premium', variant: 'ghost' },
      ],
    },
  ],
};
