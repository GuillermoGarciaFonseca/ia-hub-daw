import { AiProfile } from '../ai-model';

export const PERPLEXITY: AiProfile = {
  slug: 'perplexity',
  name: 'Perplexity',
  category: 'Búsqueda',
  summary: 'Respuestas con fuentes, estilo “investigación”.',
  title: 'Perplexity',
  subtitle:
    'IA enfocada en buscar y responder con fuentes. Ideal cuando quieres “respuesta + de dónde sale”, no solo texto bonito.',
  chips: ['Búsqueda', 'Fuentes', 'Resumen', 'Decisiones'],
  lastReviewed: '2026-11-19',
  theme: {
    mode: 'dark',
    accent: '#14b8a6',
    accent2: '#60a5fa',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Responde con enlaces y fuentes (más verificable).',
        'Genial para investigar rápido temas nuevos.',
        'Te ahorra tiempo filtrando resultados.',
        'Perfecto para comparar opciones y sacar conclusiones.',
        'Modo “resumen” muy útil para noticias/temas largos.',
      ],
      cons: [
        'Las fuentes pueden variar en calidad: hay que mirar bien.',
        'A veces interpreta de más y conviene contrastar.',
        'Para creatividad pura suele ser mejor otro chat.',
        'Si la pregunta es vaga, te devuelve un mix raro.',
        'Algunas funciones avanzadas dependen del plan.',
      ],
    },
    {
      type: 'cards',
      title: 'Para qué sirve de verdad',
      cards: [
        {
          title: 'Investigar con fuentes',
          badge: '🔎',
          bullets: [
            'Comparar productos/servicios',
            'Buscar normativa / documentación',
            'Resumir artículos y quedarte con lo importante',
          ],
        },
        {
          title: 'Aprender rápido un tema',
          badge: '🧠',
          bullets: ['Conceptos + ejemplos', 'Definiciones con enlaces', 'Resumen “para entenderlo en 5 min”'],
        },
        {
          title: 'Tomar decisiones',
          badge: '⚖️',
          bullets: ['Pros/contras con referencias', 'Ranking por criterios', 'Checklist y plan de acción'],
        },
        {
          title: 'Noticias y actualidad',
          badge: '📰',
          bullets: ['Resumen de lo que ha pasado', 'Contexto + enlaces', 'Qué se sabe / qué no'],
        },
      ],
    },
    {
      type: 'prompts',
      title: 'Prompts útiles',
      prompts: [
        {
          title: 'Comparador con fuentes',
          badge: '⚡',
          prompt:
            'Compárame X vs Y para Z (contexto: ...). Dame:\n' +
            '- tabla comparativa\n' +
            '- pros/contras\n' +
            '- recomendación final\n' +
            'Incluye 5-8 fuentes fiables al final.',
        },
        {
          title: 'Resumen de una noticia',
          badge: '📰',
          prompt:
            'Resúmeme esta noticia/tema: “...”\n' +
            'Formato:\n' +
            '- qué ha pasado (5 bullets)\n' +
            '- por qué importa\n' +
            '- lo que falta por confirmar\n' +
            '- fuentes',
        },
        {
          title: 'Plan paso a paso',
          badge: '🧭',
          prompt:
            'Quiero hacer X. Hazme un plan paso a paso (8-12 pasos),\n' +
            'con riesgos típicos, cómo evitarlos y recursos para aprender.\n' +
            'Añade fuentes/referencias.',
        },
        {
          title: 'Checklist rápido',
          badge: '✅',
          prompt:
            'Necesito un checklist corto para X.\n' +
            'Quiero 10-12 puntos máximo, ordenados y con 1 consejo final.\n' +
            'Incluye enlaces útiles al final.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Recursos',
      cards: [
        {
          title: 'Oficial',
          badge: '🏁',
          links: [
            { label: 'Perplexity (web)', url: 'https://www.perplexity.ai/' },
            { label: 'Planes', url: 'https://www.perplexity.ai/pro' },
          ],
        },
        {
          title: 'Tips de búsqueda',
          badge: '📚',
          links: [
            { label: 'Google Search operators', url: 'https://support.google.com/websearch/answer/2466433' },
            { label: 'Wikipedia (para arrancar un tema)', url: 'https://www.wikipedia.org/' },
          ],
        },
      ],
    },
    {
      type: 'plans',
      title: 'Planes (simple)',
      intro:
        'La web de Perplexity bloquea las comprobaciones automáticas, así que no hemos podido verificar los precios a fecha de esta revisión: míralos en su web oficial. Si no investigas a diario, el plan gratis suele bastar.',
      plans: [
        {
          tier: 'Gratis',
          price: 'Consultar web oficial',
          notes: ['Perfecto para investigar de vez en cuando.', 'Suficiente para uso normal y consultas puntuales.'],
        },
        {
          tier: 'De pago',
          price: 'Consultar web oficial',
          notes: ['Más potencia y funciones avanzadas.', 'Para quien investiga todo el día.'],
        },
      ],
      buttons: [
        { label: 'Abrir Perplexity', url: 'https://www.perplexity.ai/', variant: 'primary' },
        { label: 'Ver planes oficiales', url: 'https://www.perplexity.ai/pro', variant: 'ghost' },
      ],
    },
  ],
};
