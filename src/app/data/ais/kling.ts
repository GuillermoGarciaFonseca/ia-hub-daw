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
  lastReviewed: '2026-11-20',
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
        'Los precios cambian con las ofertas: fíjate en lo que pagas después del descuento.',
        'Generar vídeo de calidad consume muchos créditos.',
        'Revisa la privacidad antes de subir caras o datos personales.',
        'Hay que iterar bastante para tener el plano exacto que quieres.',
        'Cuidado con los derechos de imagen si usas personas reales.',
      ],
    },
    {
      type: 'examples',
      title: 'Ejemplos reales (de la web oficial)',
      intro:
        'Vídeo de portada de la web oficial de Kling 4.0.',
      examples: [
        {
          title: 'Pianista en un barco entre olas',
          kind: 'vídeo',
          description:
            'Vídeo con sonido de Kling 4.0 que abre la web oficial. La web lo acompaña de este texto, pero no dice si es el prompt exacto.',
          source: { label: 'Ver el vídeo en kling.ai', url: 'https://kling.ai/' },
        },
        {
          title: 'Foto documental de un puerto',
          kind: 'imagen',
          description:
            'Imagen de la galería de Kling Image 4.0 en la portada oficial, publicada junto a su prompt completo: un puerto mediterráneo al atardecer con pescadores y una red.',
          prompt:
            '3:4 vertical format. A realistic documentary photograph of an old Mediterranean harbor, with the viewpoint close to the eye level of the crouching figures, using a wide-angle lens without obvious distortion. Rough gray paving-stone quay fills approximately the bottom third of the image. […]',
          promptExcerpt: true,
          source: { label: 'Ver la galería en kling.ai', url: 'https://kling.ai/' },
        },
        {
          title: 'Carta de un restaurante con texto exacto',
          kind: 'imagen',
          description:
            'Otra imagen de la galería: una carta de desayunos en la que cada plato y su precio salen escritos tal cual los pide el prompt (texto pequeño y legible).',
          prompt:
            'Generate a vertical 2:3 commercial menu for an American breakfast restaurant. Show only one complete, standalone, finished menu facing the camera straight on. All four edges of the menu must be fully visible, with a pure-white background outside it. […]',
          promptExcerpt: true,
          source: { label: 'Ver la galería en kling.ai', url: 'https://kling.ai/' },
        },
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
      intro:
        'Precios de la web oficial en USD al mes, pago mensual y sin impuestos. Ahora hay una oferta para los tres primeros meses; aquí ponemos el precio que pagas después. Todo funciona con créditos.',
      plans: [
        {
          tier: 'Standard',
          price: '$8,80 / mes',
          forWho: 'Para empezar a crear en serio.',
          includes: ['660 créditos al mes', 'Vídeo en 1080p y 4K', 'Sin marca de agua', 'Uso comercial'],
          notes: ['Oferta: $6,50 al mes los 3 primeros meses'],
        },
        {
          tier: 'Pro',
          price: '$32,56 / mes',
          forWho: 'Creadores habituales.',
          includes: ['3.000 créditos al mes', 'Acceso prioritario a novedades'],
        },
        {
          tier: 'Premier',
          price: '$181,99 / mes',
          forWho: 'Producción profesional.',
          includes: ['18.000 créditos al mes'],
        },
        {
          tier: 'Ultra+',
          price: '$544,99 / mes',
          forWho: 'Estudios y uso muy intensivo.',
          includes: ['57.000 créditos al mes', 'El menor precio por crédito'],
        },
      ],
      buttons: [
        { label: 'Ver precios oficiales', url: 'https://kling.ai/app/membership/membership-plan', variant: 'primary' },
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
