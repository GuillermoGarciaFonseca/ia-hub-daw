import { AiProfile } from '../ai-model';

export const CURSOR: AiProfile = {
  slug: 'cursor',
  name: 'Cursor',
  category: 'Código',
  summary: 'Editor de código con agentes de IA que programan contigo.',
  title: 'Cursor',
  subtitle:
    'Un editor de código con agentes de IA dentro: le pides una funcionalidad, planifica, toca varios archivos y te deja los cambios listos para revisar. Desde agosto de 2026 es de SpaceX y usa los modelos Grok.',
  chips: ['Agentes', 'Editor', 'CLI', 'Grok 4.7'],
  lastReviewed: '2026-11-19',
  theme: {
    mode: 'dark',
    accent: '#0891b2',
    accent2: '#a855f7',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Agentes que hacen tareas completas: planifican, editan varios archivos y te piden revisión.',
        'Lo tienes en escritorio (Windows, macOS y Linux) y en la terminal (CLI).',
        'Cloud Agents: tareas que siguen trabajando sin tener tu ordenador encendido (en Premium).',
        'Cursor Rules para que el agente respete las normas de tu proyecto.',
        'Hay plan gratis para probarlo.',
      ],
      cons: [
        'Desde la compra por SpaceX, los planes van unidos a X y a Grok (en Plus, solo modelos Grok).',
        'Los modelos de otras empresas se pagan aparte, según el uso.',
        'Si no revisas lo que hace el agente, puedes acabar con código que no entiendes.',
        'En noviembre de 2026 informaron de un incidente de seguridad: lee su actualización.',
        'Para aprender a programar desde cero, puede hacerte demasiado el trabajo.',
      ],
    },
    {
      type: 'examples',
      title: 'Ejemplos reales (de la web oficial)',
      intro:
        'La portada de Cursor tiene una demo interactiva con tareas reales del agente. El prompt completo de cada tarea no se publica.',
      examples: [
        {
          title: 'Crear una landing page',
          kind: 'web',
          description:
            'En la demo, el agente termina la tarea “Crear landing page” y explica lo que ha hecho: precarga las fuentes en el head, mete el CSS crítico en línea y añade una etiqueta meta. Al lado se ven otras tareas, como planificar una funcionalidad en feature-prd.md.',
          source: { label: 'Ver la demo en cursor.com', url: 'https://cursor.com/' },
        },
      ],
    },
    {
      type: 'cards',
      title: 'Cómo usarlo bien en DAW',
      intro: 'El truco es tratarlo como a un compañero: tareas pequeñas, claras y revisadas.',
      cards: [
        {
          title: 'Plan antes de código',
          badge: '🗺️ Planificar',
          text: 'Pídele primero un plan en un archivo (por ejemplo, feature-prd.md) y revísalo antes de que programe.',
          pills: ['Requisitos', 'Pasos', 'Preguntas'],
        },
        {
          title: 'Reglas del proyecto',
          badge: '📏 Cursor Rules',
          text: 'Explícale tus convenciones: Angular, nombres, tests… y las seguirá siempre.',
          pills: ['Estilo', 'Arquitectura', 'Tests'],
        },
        {
          title: 'Revisión de cambios',
          badge: '✅ Revisar',
          text: 'Mira el diff antes de aceptar. Si no lo entiendes, pídele que te lo explique.',
          pills: ['Diff', 'Explicaciones', 'Commits pequeños'],
        },
      ],
      buttons: [{ label: 'Blog oficial (novedades)', url: 'https://cursor.com/blog', variant: 'ghost' }],
    },
    {
      type: 'plans',
      title: 'Planes y precios',
      intro:
        'Precios de la web oficial en USD, sin impuestos (en España se suma el IVA). Los planes incluyen también ventajas de X, como la insignia de verificación.',
      plans: [
        {
          tier: 'Gratis',
          price: '$0 / mes',
          forWho: 'Para probarlo.',
          limitations: ['Solicitudes limitadas al agente y al chat'],
        },
        {
          tier: 'Plus',
          price: '$8 / mes',
          forWho: 'El plan de entrada.',
          includes: ['Bolsa de uso de IA compartida', 'Grok Chat, Voice, Imagine y Build', 'Acceso a la API de Grok'],
          limitations: ['Solo modelos de Grok'],
        },
        {
          tier: 'Premium',
          price: '$30 / mes',
          forWho: 'El más popular si programas a diario.',
          highlights: ['4 veces más uso que Plus', 'Los últimos modelos de Grok'],
          includes: ['Cloud Agents y automatizaciones', 'Revisiones de código con IA', 'Modelos de otras empresas a precio de API'],
        },
        {
          tier: 'Super',
          price: '$100 / mes',
          forWho: 'Uso muy intensivo.',
          includes: ['15 veces más uso que Plus', 'Acceso prioritario en horas punta'],
        },
      ],
      buttons: [
        { label: 'Ver precios oficiales', url: 'https://cursor.com/pricing', variant: 'primary' },
        { label: 'Descargar Cursor', url: 'https://cursor.com/', variant: 'ghost' },
      ],
    },
    {
      type: 'prompts',
      title: 'Prompts que funcionan (copiar/pegar)',
      prompts: [
        {
          title: 'Planificar una funcionalidad',
          badge: '🗺️',
          prompt:
            'Quiero añadir un filtro por categoría en la portada de mi app Angular. Antes de tocar código, escribe un plan en plan.md con los archivos que vas a cambiar, los pasos y las dudas que tengas. Espera mi OK.',
        },
        {
          title: 'Tests primero',
          badge: '🧪',
          prompt:
            'Escribe primero los tests (Vitest) para este servicio y comprueba que fallan. Después implementa lo mínimo para que pasen. No cambies nada fuera de src/app/services.',
        },
        {
          title: 'Explícame el cambio',
          badge: '🧠',
          prompt:
            'Explícame el diff que acabas de hacer como si fuera mi primer año de DAW: qué hace cada cambio, por qué y qué podría romperse.',
        },
      ],
    },
  ],
};
