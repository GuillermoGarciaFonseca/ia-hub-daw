import { AiProfile } from '../ai-model';

export const DEEPSEEK: AiProfile = {
  slug: 'deepseek',
  name: 'DeepSeek',
  category: 'Chat',
  summary: 'Chat con razonamiento y una API muy barata.',
  title: 'DeepSeek',
  subtitle:
    'IA china con modo de razonamiento (DeepThink) y búsqueda web. Donde más destaca es en su API, que cuesta muy poco: ideal para trastear con tu propio proyecto sin dejarte el sueldo.',
  chips: ['Razonamiento', 'Código', 'API barata', 'Contexto largo'],
  lastReviewed: '2026-11-19',
  theme: {
    mode: 'light',
    accent: '#4d6bfe',
    accent2: '#7c3aed',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Muy buena en razonamiento, mates y código con el modo DeepThink.',
        'API baratísima comparada con la competencia (y aún más barata fuera de horas punta).',
        'Contexto de hasta 1 millón de tokens en la API: le cabe un proyecto entero.',
        'La API es compatible con el formato de OpenAI y de Anthropic: la conectas en dos líneas.',
        'Tiene web, app móvil y una app de escritorio para programar (Harness).',
      ],
      cons: [
        'Empresa china: revisa su política de privacidad antes de subir datos sensibles.',
        'Como todas, puede inventarse cosas con mucha seguridad: verifica.',
        'Menos “extras” que ChatGPT o Gemini (imágenes, vídeo, integraciones).',
        'En temas políticos sensibles puede esquivar o matizar respuestas.',
        'Los precios de la API cambian según la hora: ojo si haces cálculos de coste.',
      ],
    },
    {
      type: 'keyValues',
      title: 'Modelos actuales',
      intro: 'Lo que hay ahora mismo en su API, según la documentación oficial.',
      items: [
        { key: 'deepseek-flash', value: 'DeepSeek V4.1 Flash: rápido y barato, con visión' },
        { key: 'deepseek-v4-pro', value: 'DeepSeek V4 Pro: el más potente, sin visión' },
        { key: 'Contexto', value: 'Hasta 1M de tokens de entrada y 384K de salida' },
        { key: 'Modos', value: 'Con y sin razonamiento (por defecto, con razonamiento)' },
        { key: 'Horas punta', value: 'De lunes a viernes de 01:00 a 04:00 y de 06:00 a 10:00 UTC: el precio se duplica' },
      ],
    },
    {
      type: 'plans',
      title: 'Planes y precios',
      intro:
        'La API se paga por uso (precios oficiales en USD por cada millón de tokens). El precio del chat web y la app no aparece en la web oficial: consúltalo allí.',
      plans: [
        {
          tier: 'Chat web y app',
          price: 'Consultar web oficial',
          forWho: 'Para usarla como asistente del día a día.',
          includes: ['Modo DeepThink (razonamiento)', 'Búsqueda web', 'Web, iOS y Android'],
        },
        {
          tier: 'API · deepseek-flash',
          price: '$0,15 entrada / $0,60 salida',
          forWho: 'Proyectos propios, bots y prototipos (precios fuera de horas punta).',
          includes: ['En horas punta: $0,30 / $1,20', 'Con caché: desde $0,003 por millón de tokens de entrada'],
        },
        {
          tier: 'API · deepseek-v4-pro',
          price: '$0,66 entrada / $1,98 salida',
          forWho: 'Tareas difíciles de razonamiento o código (precios fuera de horas punta).',
          includes: ['En horas punta: $1,32 / $3,96', 'Con caché: desde $0,022 por millón de tokens de entrada'],
        },
      ],
      buttons: [
        { label: 'Abrir DeepSeek', url: 'https://www.deepseek.com/', variant: 'primary' },
        { label: 'Precios de la API', url: 'https://api-docs.deepseek.com/quick_start/pricing', variant: 'ghost' },
      ],
    },
    {
      type: 'prompts',
      title: 'Prompts que funcionan (copiar/pegar)',
      intro: 'Activa DeepThink cuando el problema tenga “miga”.',
      prompts: [
        {
          title: 'Resolver paso a paso',
          badge: '🧠 DeepThink',
          prompt:
            'Resuelve este ejercicio paso a paso y explica por qué haces cada paso, como si se lo contaras a alguien de 2.º de DAW. Al final, comprueba el resultado con otro método: [pega el ejercicio]',
        },
        {
          title: 'Encontrar el bug',
          badge: '💻 Código',
          prompt:
            'Este código en TypeScript da este error: [pega el error]. Dime la causa más probable, cómo confirmarla y el cambio mínimo para arreglarlo. No reescribas todo el archivo.\n\n[pega el código]',
        },
        {
          title: 'Calcular el coste de la API',
          badge: '💸 API',
          prompt:
            'Mi app hará unas 2.000 llamadas al día, con unos 1.500 tokens de entrada y 500 de salida por llamada. Hazme una tabla con el coste mensual usando deepseek-flash, en hora punta y fuera de ella.',
        },
      ],
    },
  ],
};
