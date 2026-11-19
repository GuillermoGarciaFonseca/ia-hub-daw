import { AiProfile } from '../ai-model';

export const COPILOT: AiProfile = {
  slug: 'copilot',
  name: 'Copilot',
  category: 'Productividad',
  summary: 'IA dentro de Word, Excel, PowerPoint, Outlook y Teams.',
  title: 'Microsoft 365 Copilot',
  subtitle:
    'IA integrada en Word/Excel/PowerPoint/Outlook/Teams. Su punto fuerte no es “ser el más listo”, sino estar dentro del flujo de trabajo y ayudarte con documentos, mails, tablas y reuniones.',
  chips: ['Word', 'Excel', 'PowerPoint', 'Teams'],
  lastReviewed: '2026-11-19',
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
        'Para tenerlo dentro de Word/Excel hace falta un plan de pago (o que tu empresa lo active).',
        'Si no le das contexto (documento, tabla, mail), el resultado se queda genérico.',
        'Excel “potente” requiere prompts concretos (campos, columnas, objetivo).',
        'Como cualquier IA: puede equivocarse → hay que revisar antes de enviar.',
        'En empresas, a veces hay políticas que limitan qué puede leer/usar.',
      ],
    },
    {
      type: 'examples',
      title: 'Ejemplos reales (de la web oficial)',
      intro:
        'Prompts de la galería oficial de Microsoft. Aquí la web no enseña un resultado fijo, porque Copilot responde usando tus correos, reuniones y documentos.',
      examples: [
        {
          title: 'Preparar una reunión',
          kind: 'texto',
          description:
            'Copilot Chat revisa tu agenda y el contexto de la reunión para preparártela.',
          prompt:
            'Help me prepare for my next meeting.',
          source: { label: 'Ver en la galería de prompts de Microsoft', url: 'https://adoption.microsoft.com/en-us/copilot/prompt-gallery/' },
        },
        {
          title: 'Reflexionar sobre un cambio de trabajo',
          kind: 'texto',
          description:
            'Copilot Chat te ayuda a hacerte las preguntas adecuadas antes de tomar una decisión profesional.',
          prompt:
            'What questions should I ask myself when making a decision about changing my career?',
          source: { label: 'Ver en la galería de prompts de Microsoft', url: 'https://adoption.microsoft.com/en-us/copilot/prompt-gallery/' },
        },
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
      type: 'plans',
      title: 'Cómo se accede (planes y precios)',
      intro:
        'Precios de la web oficial de Microsoft. Los de particulares son de la web de España (IVA incluido); los de empresa están en USD sin impuestos. Ojo con las ofertas de primer año: luego se renueva al precio normal.',
      plans: [
        {
          tier: 'Copilot gratis',
          price: '0 €',
          forWho: 'Para dudas rápidas y borradores con una cuenta Microsoft gratuita.',
          includes: ['Copilot Chat con uso limitado'],
          limitations: ['No trabaja dentro de tus documentos de Word/Excel como en los planes de pago'],
        },
        {
          tier: 'Microsoft 365 Personal',
          price: '99 € / año o 10 € / mes',
          forWho: 'Particulares que ya usan Word, Excel y PowerPoint.',
          includes: [
            'Apps de escritorio de Word, Excel, PowerPoint, Outlook y OneNote con Copilot',
            'Copilot Chat avanzado con más uso que la versión gratuita',
            '1 TB en la nube, para 1 persona',
          ],
          notes: ['Oferta de primer año en la web: 69 € (o 7 € el primer mes)'],
        },
        {
          tier: 'Microsoft 365 Familia',
          price: '129 € / año o 13 € / mes',
          forWho: 'Para compartir Office con hasta 6 personas.',
          includes: ['De 1 a 6 usuarios', 'Hasta 2 TB compartidos en la nube'],
          limitations: ['La IA es solo para el titular de la suscripción'],
        },
        {
          tier: 'Microsoft 365 Premium',
          price: '219 € / año o 22 € / mes',
          forWho: 'Si usas Copilot a fondo en tu día a día personal.',
          includes: [
            'Copilot Chat avanzado con uso amplio',
            'Funciones de agentes para investigación y análisis avanzados',
            'Uso amplio de creación de imágenes con IA',
          ],
          notes: ['Oferta por tiempo limitado en la web: 149 € el primer año (o 15 € el primer mes)'],
        },
        {
          tier: 'Microsoft 365 Copilot (empresa)',
          price: '$21 usuario/mes (pago anual)',
          forWho: 'Complemento para empresas y centros: lo activa tu organización.',
          includes: [
            'Chat con IA basado en los datos de trabajo de tu organización',
            'Agentes ya hechos para investigación y análisis de datos',
            'Analíticas de adopción y uso',
          ],
          limitations: [
            'Se suma a una licencia de Microsoft 365 para empresas',
            'Depende de que IT o el admin lo active',
          ],
          notes: [
            'En noviembre de 2026 hay una oferta a $18 usuario/mes en pago anual; en pago mensual sale a $25,20',
          ],
        },
      ],
      buttons: [
        {
          label: 'Precios para particulares (España)',
          url: 'https://www.microsoft.com/es-es/microsoft-365/buy/compare-all-microsoft-365-products',
          variant: 'primary',
        },
        {
          label: 'Precios para empresas',
          url: 'https://www.microsoft.com/en-us/microsoft-365-copilot/pricing',
          variant: 'ghost',
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
