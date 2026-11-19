import { AiProfile } from '../ai-model';

export const QWEN: AiProfile = {
  slug: 'qwen',
  name: 'Qwen',
  category: 'Chat',
  summary: 'El asistente gratuito de Alibaba, con modelos abiertos.',
  title: 'Qwen',
  subtitle:
    'La familia de modelos de Alibaba. El asistente es gratis y hace de todo: chat, búsqueda, investigación, webs, imágenes y vídeo. Además publica muchos modelos de código abierto para usarlos en local.',
  chips: ['Gratis', 'Open-source', 'Multimodal', 'Deep Research'],
  lastReviewed: '2026-11-19',
  theme: {
    mode: 'dark',
    accent: '#615ced',
    accent2: '#22d3ee',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'El asistente es de uso gratuito y está abierto a todo el mundo.',
        'Muy completo: búsqueda, Deep Research, desarrollo web, imágenes y vídeo.',
        'Muchos modelos open-source (por ejemplo, Qwen-Image-2.1) para usar en local.',
        'Modelo top recién salido: Qwen4-Max, con 1 millón de tokens de contexto.',
        'API compatible con el formato de OpenAI: cambias la URL y listo.',
      ],
      cons: [
        'Empresa china: revisa la privacidad antes de subir datos personales o de empresa.',
        'Menos conocido en España: hay menos tutoriales y comunidad en español.',
        'Hay tantos modelos y versiones que es fácil perderse.',
        'Como todas: puede equivocarse, así que verifica lo importante.',
        'Algunas funciones nuevas llegan antes en inglés o chino.',
      ],
    },
    {
      type: 'cards',
      title: 'Qué puedes hacer',
      intro: 'Todo esto está dentro del mismo asistente.',
      cards: [
        {
          title: 'Investigación profunda',
          badge: '🔎 Deep Research',
          text: 'Busca en varios pasos y te devuelve un informe completo y fácil de leer.',
          pills: ['Informes', 'Comparativas', 'Estado del arte'],
        },
        {
          title: 'Desarrollo web',
          badge: '💻 Web Dev',
          text: 'Describe la web que quieres y te genera una página completa con código limpio.',
          pills: ['Landing', 'Prototipos', 'Maquetas'],
        },
        {
          title: 'Imágenes',
          badge: '🖼️ Qwen VLo',
          text: 'Genera desde cero, edita imágenes, transfiere estilos o combina elementos.',
          pills: ['Generar', 'Editar', 'Estilos'],
        },
        {
          title: 'Comprensión multimodal',
          badge: '🎧 Omni',
          text: 'Entiende texto, imágenes, audio y vídeo a la vez: gráficos, clips, capturas…',
          pills: ['Gráficos', 'Audio', 'Vídeo'],
        },
      ],
    },
    {
      type: 'keyValues',
      title: 'Modelos que conviene conocer',
      intro: 'Novedades recientes publicadas en la web oficial de Qwen.',
      items: [
        { key: 'Qwen4-Max', value: 'Noviembre de 2026. El más potente: visión nativa y 1M de tokens de contexto' },
        { key: 'Qwen-Image-2.1', value: 'Septiembre de 2026. Imagen open-source: genera y edita (incluso con transparencia)' },
        { key: 'Qwen3.8-LiveTranslate', value: 'Interpretación simultánea en tiempo real' },
        { key: 'Qwen3.8-Omni-Flash', value: 'Modelo “omni”: entiende texto, imagen, audio y vídeo' },
      ],
    },
    {
      type: 'plans',
      title: 'Planes y precios',
      intro: 'El asistente es gratuito. La API se paga por uso: mira los precios en la web oficial.',
      plans: [
        {
          tier: 'Asistente Qwen',
          price: 'Gratis',
          forWho: 'Para cualquiera: estudio, trabajo o curiosear.',
          includes: ['Web, móvil y escritorio', 'Búsqueda, Deep Research, imágenes y vídeo'],
        },
        {
          tier: 'API de Qwen',
          price: 'Consultar web oficial',
          forWho: 'Si quieres meter Qwen en tu propia app.',
          includes: ['Formato compatible con la API de OpenAI'],
        },
      ],
      buttons: [
        { label: 'Abrir Qwen', url: 'https://chat.qwen.ai/', variant: 'primary' },
        { label: 'Web oficial', url: 'https://qwen.ai/', variant: 'ghost' },
      ],
    },
    {
      type: 'prompts',
      title: 'Prompts que funcionan (copiar/pegar)',
      prompts: [
        {
          title: 'Landing en un minuto',
          badge: '💻 Web Dev',
          prompt:
            'Crea una landing page para una app de reservas de pistas de pádel en Valencia: cabecera con CTA, tres ventajas, precios y preguntas frecuentes. Diseño limpio, responsive y en español de España.',
        },
        {
          title: 'Informe de investigación',
          badge: '🔎 Deep Research',
          prompt:
            'Investiga qué frameworks de front-end se usan más en ofertas de empleo en España este año. Dame un informe con fuentes, una tabla comparativa y una recomendación para alguien que termina DAW.',
        },
        {
          title: 'Explicar un gráfico',
          badge: '🎧 Multimodal',
          prompt:
            'Te paso una captura de un gráfico. Explícame qué muestra, las tres conclusiones principales y si hay algo raro o engañoso en cómo está hecho.',
        },
      ],
    },
  ],
};
