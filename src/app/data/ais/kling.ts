import { AiProfile } from '../ai-model';

export const KLING: AiProfile = {
  slug: 'kling',
  name: 'Kling',
  category: 'Vídeo',
  summary: 'Vídeo con audio muy realista y un lienzo con agente.',
  title: 'Kling AI',
  subtitle:
    'Generador de vídeo e imagen con IA. Kling 4.0 hace vídeos con sonido muy realistas y Canvas te ayuda a montar un proyecto entero con un agente: guion, storyboard, imágenes y vídeo.',
  chips: ['Vídeo con audio', 'Kling 4.0', 'Canvas', 'MCP / CLI'],
  lastReviewed: '2026-11-19',
  theme: {
    mode: 'dark',
    accent: '#16a34a',
    accent2: '#22d3ee',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Kling 4.0: movimiento estable y sonido integrado en el vídeo.',
        'Kling Image 4.0: imágenes realistas hasta 8K y buen texto pequeño.',
        'Canvas: un agente te ayuda con el guion, el storyboard y la posproducción.',
        'MCP y CLI para generar en lote desde tu propio agente.',
        'Usado en anuncios premiados en Cannes Lions 2026.',
      ],
      cons: [
        'Los precios no se ven sin entrar: hay que mirarlos en la web.',
        'Generar vídeo de calidad consume muchos créditos.',
        'Revisa la privacidad antes de subir caras o datos personales.',
        'Hay que iterar bastante para tener el plano exacto que quieres.',
        'Cuidado con los derechos de imagen si usas personas reales.',
      ],
    },
    {
      type: 'cards',
      title: 'Qué ofrece',
      cards: [
        {
          title: 'Kling 4.0 (vídeo)',
          badge: '🎬 Vídeo',
          text: 'Vídeo con audio y movimiento muy natural, para resultados de nivel profesional.',
          pills: ['Texto a vídeo', 'Imagen a vídeo', 'Audio'],
        },
        {
          title: 'Kling Image 4.0',
          badge: '🖼️ Imagen',
          text: 'Realismo, 8K nativo, buen texto y series de imágenes coherentes con un solo prompt.',
          pills: ['8K', 'Texto', 'Series'],
        },
        {
          title: 'Canvas',
          badge: '🧩 Proyecto',
          text: 'Organiza un proyecto como un director: lluvia de ideas, guion, storyboard y edición.',
          pills: ['Agente', 'Nodos', 'Storyboard'],
        },
        {
          title: 'MCP / CLI',
          badge: '🤖 Automatizar',
          text: 'Tu agente de IA puede usar Kling para generar muchas versiones de golpe.',
          pills: ['Lotes', 'Automatización'],
        },
      ],
    },
    {
      type: 'plans',
      title: 'Planes y precios',
      intro: 'Su página de precios no se muestra a las herramientas automáticas, así que no copiamos importes: míralos en la web oficial.',
      plans: [
        {
          tier: 'Planes de Kling',
          price: 'Consultar web oficial',
          forWho: 'Funciona con créditos: cuanto mejor el modelo y más largo el vídeo, más créditos gasta.',
        },
      ],
      buttons: [
        { label: 'Ver precios oficiales', url: 'https://kling.ai/pricing', variant: 'primary' },
        { label: 'Abrir Kling', url: 'https://kling.ai/', variant: 'ghost' },
      ],
    },
    {
      type: 'prompts',
      title: 'Prompts que funcionan (copiar/pegar)',
      prompts: [
        {
          title: 'Escena con sonido',
          badge: '🔊 Audio',
          prompt:
            'Una pianista toca en la cubierta de un barco entre olas enormes, cámara girando a su alrededor, se oye el piano y el mar, luz de tormenta, cinematográfico.',
        },
        {
          title: 'Anuncio de producto',
          badge: '🛍️ E-commerce',
          prompt:
            'Unas zapatillas blancas giran sobre un pedestal, la cámara se acerca a los detalles de la suela, fondo de estudio degradado, música electrónica suave, 6 segundos.',
        },
        {
          title: 'Storyboard en Canvas',
          badge: '🧩 Canvas',
          prompt:
            'Ayúdame a crear un corto de 30 segundos sobre un estudiante que presenta su TFG: escribe el guion, divídelo en 5 planos y genera una imagen de referencia para cada uno.',
        },
      ],
    },
  ],
};
