import { AiProfile } from '../ai-model';

export const COPILOT: AiProfile = {
  slug: 'copilot',
  name: 'Copilot',
  category: 'Código',
  summary: 'Asistente en IDE, autocompletado inteligente.',
  title: 'Microsoft Copilot (365)',
  subtitle:
    'IA integrada en Word/Excel/PowerPoint/Outlook/Teams. Su punto fuerte no es “ser el más listo”, sino estar dentro del flujo de trabajo y ayudarte con documentos, mails, tablas y reuniones.',
  chips: ['Word', 'Excel', 'PowerPoint', 'Teams'],
  theme: {
    mode: 'light',
    accent: '#2563eb',
    accent2: '#3b82f6',
    heroImage: '/img/microsoft365/fondodeaguamicrosoft365.png',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Integración brutal con Microsoft 365: Word, Excel, PowerPoint, Outlook, Teams.',
        'Ideal para cosas de oficina: informes, emails, resúmenes y presentaciones.',
        'Convierte texto → slide deck / documento con estructura muy rápido.',
        'Para reuniones: resumir hilos, decisiones, tareas y próximos pasos.',
        'Bueno para “trabajo con contexto” (archivos y entorno de M365, si tu org lo permite).',
      ],
      cons: [
        'No siempre está disponible: depende de licencia/empresa y configuración.',
        'Si no le das contexto (documento, tabla, mail), el resultado se queda genérico.',
        'Excel “potente” requiere prompts concretos (campos, columnas, objetivo).',
        'Como cualquier IA: puede equivocarse → hay que revisar antes de enviar.',
        'En empresas, a veces hay políticas que limitan qué puede leer/usar.',
      ],
    },
    {
      type: 'cards',
      title: 'Dónde brilla (Microsoft 365)',
      intro: 'La gracia está en usarlo dentro de Word/Excel/PowerPoint/Teams con contexto.',
      cards: [
        {
          title: 'Word',
          badge: '📝 Docs',
          text: 'Te monta documentos con estructura, tono y resumen. Perfecto para memorias/TFG.',
          pills: ['Índice + secciones', 'Resumen ejecutivo', 'Reescritura formal', 'Corrección estilo'],
        },
        {
          title: 'PowerPoint',
          badge: '🎯 Slides',
          text: 'Convierte una idea o un doc en una presentación presentable en minutos.',
          pills: ['Guion + slides', 'Resumen de documento', 'Puntos clave', 'Storytelling'],
        },
        {
          title: 'Excel',
          badge: '📊 Data',
          text: 'Te ayuda a explicar datos, crear fórmulas y sacar insights (si lo guías bien).',
          pills: ['Fórmulas', 'Resumen de tabla', 'Insights', 'Ideas de gráficos'],
        },
        {
          title: 'Outlook',
          badge: '✉️ Mail',
          text: 'Redacta emails y te resume hilos largos con tono profesional.',
          pills: ['Respuesta con tono', 'Resumen de hilo', 'Follow-up', 'Email “corto y claro”'],
        },
        {
          title: 'Teams',
          badge: '🎧 Reuniones',
          text: 'Resúmenes de reuniones, tareas, acuerdos y “quién hace qué”.',
          pills: ['Minuta', 'To-dos', 'Decisiones', 'Próximos pasos'],
        },
        {
          title: 'OneNote / Loop',
          badge: '🧠 Notas',
          text: 'Organización de notas y tareas en plan “proyecto”.',
          pills: ['Checklist', 'Plan de trabajo', 'Resumen de notas', 'Plantillas'],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Ideas reales + recursos',
      intro: 'Links y sitios que te sirven de verdad.',
      cards: [
        {
          title: 'Docs oficiales (lo que sí funciona)',
          badge: '📘 Microsoft',
          links: [
            { label: 'Microsoft Learn', url: 'https://learn.microsoft.com/' },
            { label: 'Copilot (Microsoft)', url: 'https://www.microsoft.com/copilot' },
          ],
        },
        {
          title: 'Prompts y buenas prácticas',
          badge: '🧩 Workflow',
          links: [
            { label: 'Prompting (Microsoft Learn)', url: 'https://learn.microsoft.com/' },
            { label: 'M365 (portal Microsoft)', url: 'https://www.microsoft.com/microsoft-365' },
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Cómo se accede',
      intro: 'Aquí no hay “planes bonitos”: depende de tu organización y de si lo tienen activado.',
      cards: [
        {
          title: 'Copilot dentro de Microsoft 365',
          badge: '🏢 Empresa / centro',
          text: 'Normalmente lo activa tu organización: depende de licencia y permisos.',
          bullets: [
            'Pregunta a IT o al admin de Microsoft 365',
            'Comprueba si aparece en Word/Excel/PowerPoint',
            'Ojo: puede tener límites por políticas',
          ],
        },
        {
          title: 'Copilot “fuera” de M365',
          badge: '🌍 Alternativas',
          text: 'Si no lo tienes en 365, puedes usar Copilot web/Windows/Edge según tu entorno.',
          bullets: [
            'Útil para dudas rápidas y borradores',
            'No tiene el mismo contexto de tus documentos de M365',
            'Mejor para ideas que para “trabajo con archivos”',
          ],
        },
      ],
    },
    {
      type: 'prompts',
      title: 'Prompts que funcionan (copiar/pegar)',
      intro: 'Tres prompts cortos para que te salga bien a la primera.',
      prompts: [
        {
          title: 'Word (documento)',
          badge: '⚡',
          prompt:
            'Necesito terminar la documentación de un caso de uso: “Buscar tiendas de consumo en Valencia”. ' +
            'Redáctalo en formato profesional y claro con: objetivo, actores, precondiciones, postcondiciones, flujo principal, flujos alternativos, reglas de negocio, datos de entrada/salida y criterios de aceptación. ' +
            'Incluye también un apartado de “excepciones” y una mini tabla con requisitos (ID, descripción, prioridad).',
        },
        {
          title: 'PowerPoint (slides)',
          badge: '⚡',
          prompt:
            'Convierte este texto de como configurar el angular en Santalucia en una presentación en diapositivas: introduccion, extensiones a usar, que programas internos hay que descargarse y como inicializarlo una vez entras a la aplicación.',
        },
        {
          title: 'Excel',
          badge: '⚡',
          prompt: 'En esta tabla: quiero que me dividas estos productos en los posibles alérgenos que puedes producir',
        },
      ],
      buttons: [
        { label: 'Abrir Copilot', url: 'https://www.microsoft.com/copilot', variant: 'primary' },
        { label: 'Microsoft Learn', url: 'https://learn.microsoft.com/', variant: 'ghost' },
      ],
    },
  ],
};
