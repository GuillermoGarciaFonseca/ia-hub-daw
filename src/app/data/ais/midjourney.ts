import { AiProfile } from '../ai-model';

export const MIDJOURNEY: AiProfile = {
  slug: 'midjourney',
  name: 'Midjourney',
  category: 'Imagen',
  summary: 'Generación de imágenes top por prompts.',
  title: 'Midjourney',
  subtitle:
    'Generación de imágenes y vídeo por prompt. Ideal para conceptos visuales, portadas, posters y estilos “wow”. La versión por defecto ahora es la V8.2.',
  chips: ['Imágenes', 'Estilos', 'Prompts', 'Parámetros'],
  lastReviewed: '2026-11-19',
  theme: {
    mode: 'dark',
    accent: '#a855f7',
    accent2: '#3b82f6',
    heroImage: '/img/midjourney/mj1.webp',
    heroImageSize: { width: 320, height: 574 },
    heroPoster: '/img/midjourney/mj1-poster.webp',
  },
  sections: [
    {
      type: 'gallery',
      title: 'Galería (tus gifs)',
      images: [
        { src: '/img/midjourney/mj2.webp', poster: '/img/midjourney/mj2-poster.webp', alt: 'Midjourney demo 2' },
        { src: '/img/midjourney/mj3.webp', poster: '/img/midjourney/mj3-poster.webp', alt: 'Midjourney demo 3' },
        { src: '/img/midjourney/mj4.webp', poster: '/img/midjourney/mj4-poster.webp', alt: 'Midjourney demo 4' },
      ],
    },
    {
      type: 'examples',
      title: 'Ejemplos reales (de la web oficial)',
      intro:
        'La documentación de Midjourney no publica ejemplos con su prompt. Donde se ven creaciones reales es en su galería oficial Explore (puede que tengas que iniciar sesión).',
      examples: [
        {
          title: 'Galería Explore: lo más votado del mes',
          kind: 'imagen',
          description:
            'Galería oficial con las imágenes de la comunidad mejor valoradas del mes. Ideal para inspirarte con estilos reales hechos en Midjourney.',
          source: { label: 'Abrir Explore en midjourney.com', url: 'https://www.midjourney.com/explore?tab=top' },
        },
      ],
    },
    {
      type: 'promptBuilder',
      title: 'Constructor de prompt (pro)',
      config: {
        defaultSubject: 'a futuristic Valencia storefront at night, neon reflections, rain, ultra-detailed',
        styles: [
          { id: 'cinematic', name: 'Cinemático', vibe: 'Luz dramática + película', base: 'cinematic lighting, film still, depth of field, volumetric light' },
          { id: 'anime', name: 'Anime', vibe: 'Color y línea', base: 'anime style, clean lineart, vibrant colors, studio quality' },
          { id: 'realistic', name: 'Realista', vibe: 'Foto pro', base: 'photorealistic, 35mm, high detail, natural skin, HDR, sharp focus' },
          { id: 'product', name: 'Producto', vibe: 'Publicidad', base: 'product photography, studio lighting, soft shadows, clean background' },
          { id: 'poster', name: 'Poster', vibe: 'Diseño gráfico', base: 'graphic poster design, bold composition, typographic space, high contrast' },
        ],
        aspectRatios: [
          { id: '1:1', label: '1:1 (cuadrado)' },
          { id: '16:9', label: '16:9 (horizontal)' },
          { id: '9:16', label: '9:16 (vertical)' },
          { id: '3:2', label: '3:2 (foto)' },
          { id: '2:3', label: '2:3 (retrato)' },
        ],
        defaultStyle: 'cinematic',
        defaultAspectRatio: '16:9',
        stylize: { initial: 150, min: 0, max: 1000, steps: [-25, 25, 100] },
        chaos: { initial: 10, min: 0, max: 100, steps: [-5, 5, 15] },
      },
      buttons: [
        { label: 'Abrir Midjourney', url: 'https://www.midjourney.com/', variant: 'ghost' },
        { label: 'Docs / Guía', url: 'https://docs.midjourney.com/', variant: 'ghost' },
      ],
    },
    {
      type: 'plans',
      title: 'Planes y precios',
      intro:
        'Todos los planes son de pago (suscripción mensual o anual, con un 20 % de descuento si pagas el año). Precios de la web oficial en USD.',
      plans: [
        {
          tier: 'Basic',
          price: '$10 / mes ($8 / mes en pago anual)',
          forWho: 'Para probar y crear de vez en cuando.',
          includes: ['3,3 h de GPU rápida al mes (200 minutos)', 'Vídeo en SD'],
          limitations: ['Sin modo Relax: cuando gastas las horas, se acabó', 'Sin modo Stealth (tus imágenes son públicas)'],
        },
        {
          tier: 'Standard',
          price: '$30 / mes ($24 / mes en pago anual)',
          forWho: 'El más equilibrado si lo usas a menudo.',
          includes: ['15 h de GPU rápida al mes', 'Imágenes ilimitadas en modo Relax', 'Vídeo en SD y HD'],
          limitations: ['Sin modo Stealth'],
        },
        {
          tier: 'Pro',
          price: '$60 / mes ($48 / mes en pago anual)',
          forWho: 'Uso profesional o si quieres privacidad.',
          includes: ['30 h de GPU rápida al mes', 'Imágenes y vídeo SD ilimitados en Relax', 'Modo Stealth (privado)'],
          notes: ['Obligatorio (o Mega) para empresas que facturan más de 1 M$ al año'],
        },
        {
          tier: 'Mega',
          price: '$120 / mes ($96 / mes en pago anual)',
          forWho: 'Estudios y uso muy intensivo.',
          includes: ['60 h de GPU rápida al mes', 'Todo lo del plan Pro'],
        },
      ],
      buttons: [{ label: 'Comparar planes (oficial)', url: 'https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans', variant: 'primary' }],
    },
  ],
};
