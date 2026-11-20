import { AiProfile } from '../ai-model';

export const PERPLEXITY: AiProfile = {
  slug: 'perplexity',
  name: 'Perplexity',
  category: 'Productividad',
  summary: 'Respuestas con fuentes, estilo “investigación”.',
  title: 'Perplexity',
  subtitle:
    'IA enfocada en buscar y responder con fuentes. Ideal cuando quieres “respuesta + de dónde sale”, no solo texto bonito.',
  chips: ['Búsqueda', 'Fuentes', 'Resumen', 'Decisiones'],
  lastReviewed: '2026-11-20',
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
      type: 'examples',
      title: 'Ejemplos reales (de la web oficial)',
      intro: 'Demostración de la página oficial de planes: la pregunta tal cual y el arranque de la respuesta, con sus fuentes.',
      examples: [
        {
          title: 'Investigación con fuentes citadas',
          kind: 'texto',
          description:
            'Perplexity combina varios modelos y cita cada dato. Arranque de la respuesta publicada: «La infraestructura nativa de IA lidera la financiación de SaaS en 2025, con 18,7 B$ recaudados en 340 acuerdos, un aumento interanual del 72%.» Fuentes citadas: PitchBook, Statista, Crunchbase y S&P Capital IQ.',
          prompt: '¿Cuáles son los verticales de SaaS de más rápido crecimiento por financiación de venture en 2025?',
          source: { label: 'Ver la demo en perplexity.ai', url: 'https://www.perplexity.ai/pro' },
        },
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
        'Precios de la web oficial en USD, al mes y pagando el año entero (sin impuestos). Si no investigas a diario, el plan gratis suele bastar.',
      plans: [
        {
          tier: 'Gratis',
          price: '0 €',
          notes: ['Perfecto para investigar de vez en cuando.', 'Suficiente para uso normal y consultas puntuales.'],
        },
        {
          tier: 'Pro',
          price: '17 US$ / mes (pago anual)',
          forWho: 'Para quien investiga todos los días.',
          includes: [
            'Investigación profunda y 4000 créditos adicionales',
            'Elegir modelo: GPT-6.2 Sol, Gemini 4 Neon, Claude Sonnet 5.5, Grok 4.7…',
            'Crear documentos y apps con Computer',
            'Más límites de uso y memoria',
          ],
        },
        {
          tier: 'Max',
          price: '167 US$ / mes (pago anual)',
          forWho: 'Uso intensivo y profesional.',
          includes: ['Uso máximo de Computer', '35.000 créditos adicionales y 10.000 al mes', 'Investigación a nivel experto', 'Acceso prioritario a novedades'],
        },
      ],
      buttons: [
        { label: 'Abrir Perplexity', url: 'https://www.perplexity.ai/', variant: 'primary' },
        { label: 'Ver planes oficiales', url: 'https://www.perplexity.ai/pro', variant: 'ghost' },
      ],
    },
  ],
};
