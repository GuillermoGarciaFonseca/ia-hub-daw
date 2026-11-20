import { AiProfile } from '../ai-model';

export const GROK: AiProfile = {
  slug: 'grok',
  name: 'Grok',
  category: 'Chat',
  summary: 'Estilo directo, con búsqueda en tiempo real en la web y en X.',
  title: 'Grok',
  subtitle:
    'La IA de xAI: tiene app propia (grok.com, iOS y Android) y también está dentro de X. Tono más “directo”, busca en la web y en X en tiempo real y genera imágenes y vídeo.',
  chips: ['Tendencias', 'Brainstorm', 'Copy', 'Rápido'],
  lastReviewed: '2026-11-20',
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
      type: 'examples',
      title: 'Ejemplos reales (de la web oficial)',
      intro:
        'Ejemplo del anuncio oficial de Grok Imagine Image 2.0. La página enseña una galería de imágenes y este prompt en su ejemplo de código de la API.',
      examples: [
        {
          title: 'Póster de concierto synthwave',
          kind: 'imagen',
          description:
            'Ejemplo de código oficial para generar un póster con tipografía retro usando el modelo grok-imagine-image-2.0.',
          prompt:
            'A concert poster for a synthwave band, bold retro typography, sharp small print',
          source: { label: 'Ver el anuncio en x.ai', url: 'https://x.ai/news/grok-imagine-image-2' },
        },
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
          links: [{ label: 'Planes de Grok', url: 'https://grok.com/plans' }],
        },
      ],
    },
    {
      type: 'plans',
      title: 'Acceso y planes',
      intro:
        'Se puede probar gratis. Los planes de pago son una sola suscripción que incluye Grok, Cursor y ventajas de X. Precios de la web oficial en USD, sin impuestos; las ofertas solo duran el primer mes.',
      plans: [
        {
          tier: 'Gratis',
          price: '0 €',
          forWho: 'Para probarlo y usarlo de vez en cuando.',
          includes: ['Chat, búsqueda en la web y en X', 'Imágenes y vídeo con Grok Imagine', 'Web, iOS y Android'],
          notes: ['Si solo lo usas ocasionalmente, no te hace falta pagar.'],
        },
        {
          tier: 'Plus',
          price: '8 US$ / mes',
          forWho: 'El plan de entrada.',
          includes: ['Grok Chat, Voice, Imagine y Build', 'API de Grok y Cursor', 'Ventajas de X: verificación y menos anuncios'],
        },
        {
          tier: 'Premium',
          price: '30 US$ / mes',
          forWho: 'El más popular si lo usas a diario.',
          highlights: ['4 veces más uso que Plus', 'Los modelos de Grok más recientes'],
          includes: ['Grok Bot', 'Agentes y automatizaciones en la nube'],
          notes: ['Oferta: 15 US$ el primer mes'],
        },
        {
          tier: 'Super',
          price: '100 US$ / mes',
          forWho: 'Uso intensivo.',
          includes: ['15 veces más uso que Plus', 'Acceso prioritario en horas punta'],
          notes: ['Oferta: 50 US$ el primer mes'],
        },
        {
          tier: 'Ultra',
          price: '200 US$ / mes',
          forWho: 'Lo máximo: profesionales que lo exprimen todo el día.',
          includes: ['50 veces más uso que Plus', 'Los modelos de chat más potentes', 'Acceso anticipado a todo'],
          notes: ['Oferta: 100 US$ el primer mes'],
        },
      ],
      buttons: [
        { label: 'Abrir Grok', url: 'https://grok.com/', variant: 'primary' },
        { label: 'Ver planes oficiales', url: 'https://grok.com/plans', variant: 'ghost' },
      ],
    },
  ],
};
