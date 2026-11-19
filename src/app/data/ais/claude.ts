import { AiProfile } from '../ai-model';

export const CLAUDE: AiProfile = {
  slug: 'claude',
  name: 'Claude',
  category: 'Texto',
  summary: 'Análisis largo, escritura clara, razonamiento.',
  title: 'Claude',
  subtitle:
    'IA de Anthropic con estilo “clean” para escribir bien, resumir largo, y razonar sin tanto humo. Muy fina para análisis y coding con contexto.',
  chips: ['Escritura', 'Análisis', 'Código', 'Documentos'],
  theme: {
    mode: 'light',
    accent: '#f97316',
    heroImage: '/img/claude/fondoclaude.png',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Muy buena escribiendo claro: tono natural, menos “robot”.',
        'Suele ir fina en razonamiento y análisis de textos largos.',
        'Buen rendimiento en tareas de programación (explica + refactor).',
        'Va muy bien para documentos: resúmenes, requisitos, specs.',
        'En general, salida “elegante” y fácil de leer.',
      ],
      cons: [
        'Límites de uso: en horas punta o tareas largas puedes chocar.',
        'No es infalible: también puede inventar o equivocarse.',
        'Algunas funciones/modelos dependen del plan/región.',
        'Para datos “en tiempo real”, igual necesitas verificar fuera.',
        'A veces se queda demasiado prudente y toca insistir.',
      ],
    },
    {
      type: 'cards',
      title: 'Lenguajes recomendados (dónde Claude brilla)',
      intro: 'Para tu TFG: te ahorra horas con bugs y estructura.',
      cards: [
        {
          title: 'TypeScript / Angular',
          badge: '🧩 Front',
          text: 'Perfecto para componentes, refactors, formularios, routing y “por qué peta esto”.',
          pills: ['Refactor', 'Validaciones', 'RxJS', 'Estructura TFG'],
        },
        {
          title: 'JavaScript',
          badge: '⚡ Web',
          text: 'Genial para scripts rápidos, lógica de UI y explicación de errores.',
          pills: ['Utils', 'DOM', 'Fetch/API', 'Patrones'],
        },
        {
          title: 'Python',
          badge: '🐍 Datos',
          text: 'Top para automatizar, limpiar datos, scripts y prototipos.',
          pills: ['Pandas', 'ETL', 'Scripts', 'APIs'],
        },
        {
          title: 'Java / C#',
          badge: '🏗️ Backend',
          text: 'Muy útil para capas, arquitectura, validaciones y buenas prácticas.',
          pills: ['DTOs', 'Servicios', 'Repos', 'Tests'],
        },
        {
          title: 'SQL',
          badge: '🗄️ DB',
          text: 'Te ayuda con joins, consultas y entender modelos.',
          pills: ['JOINs', 'GROUP BY', 'Índices', 'Queries'],
        },
        {
          title: 'Bash / CLI',
          badge: '🛠️ DevOps',
          text: 'Para comandos, git y troubleshooting básico.',
          pills: ['Git', 'Scripts', 'Docker básico', 'Logs'],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Ideas reales + recursos',
      intro: 'Links útiles y cosas aplicables.',
      cards: [
        {
          title: 'Comunidad + ideas (casos reales)',
          badge: '🧠 Comunidad',
          links: [
            { label: 'Claude (web oficial)', url: 'https://claude.ai/' },
            { label: 'Anthropic (News / updates)', url: 'https://www.anthropic.com/news' },
          ],
        },
        {
          title: 'TFG: imágenes y mockups gratis',
          badge: '🖼️ Visual',
          links: [
            { label: 'Unsplash', url: 'https://unsplash.com/' },
            { label: 'Pexels', url: 'https://www.pexels.com/' },
          ],
        },
        {
          title: 'Dev: docs y estado',
          badge: '💻 Dev',
          links: [
            { label: 'Docs Claude', url: 'https://docs.claude.com/' },
            { label: 'Status Anthropic', url: 'https://status.anthropic.com/' },
          ],
        },
      ],
    },
    {
      type: 'plans',
      title: 'Planes (resumen)',
      intro:
        'Precios orientativos (USD) y pueden variar por región/impuestos. En general, pagar aporta sobre todo más uso/prioridad; para mucha gente el Gratis ya vale.',
      plans: [
        { tier: 'Gratis', forWho: 'Recomendado. Para la mayoría de usos normales va sobrado.' },
        {
          tier: 'De pago',
          forWho:
            'No suele compensar: pagas por más cuota/prioridad, no por una mejora bestia y los precios son de 20/100/200 euros.',
        },
      ],
      buttons: [{ label: 'Abrir Claude', url: 'https://claude.ai/', variant: 'primary' }],
    },
  ],
};
