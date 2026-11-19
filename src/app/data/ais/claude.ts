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
  lastReviewed: '2026-11-19',
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
        'Opus y Claude Code solo están en los planes de pago.',
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
      title: 'Planes y precios',
      intro:
        'Precios de la web oficial en USD, sin impuestos (en España se suma el IVA). Para la mayoría de usos normales, el Gratis ya va sobrado.',
      plans: [
        {
          tier: 'Gratis',
          price: '$0',
          forWho: 'Recomendado para empezar y para un uso normal del día a día.',
          includes: [
            'Chat en web, escritorio y móvil',
            'Búsqueda web, creación de archivos y ejecución de código',
            'Memoria entre conversaciones y Artifacts',
          ],
          limitations: ['Uso limitado cada 5 horas y cada semana', 'Sin Opus ni Claude Code'],
        },
        {
          tier: 'Pro',
          price: '$20 / mes ($17 / mes en pago anual)',
          forWho: 'Si lo usas a diario para estudiar, escribir o programar.',
          highlights: ['Más uso que el Gratis', 'Incluye Claude Code y Projects', 'Acceso a más modelos, incluido Opus'],
          includes: ['Claude en Chrome y en Microsoft 365', 'Programar y delegar tareas'],
        },
        {
          tier: 'Max',
          price: '$100 / mes',
          forWho: 'Uso intensivo: si te quedas sin cupo con Pro a menudo.',
          highlights: ['5 veces el uso de Pro', 'Acceso prioritario en horas punta', 'Acceso anticipado a novedades'],
          includes: ['$100 al mes en créditos de API'],
        },
        {
          tier: 'Ultra',
          price: '$200 / mes',
          forWho: 'Profesionales que lo exprimen todo el día. Para un TFG, no compensa.',
          highlights: ['10 veces el uso semanal de Pro', 'Sin límite de 5 horas (cuentas verificadas)'],
          includes: ['$200 al mes en créditos de API', 'Todo lo de Max'],
        },
      ],
      buttons: [
        { label: 'Ver precios oficiales', url: 'https://claude.com/pricing', variant: 'primary' },
        { label: 'Abrir Claude', url: 'https://claude.ai/', variant: 'ghost' },
      ],
    },
  ],
};
