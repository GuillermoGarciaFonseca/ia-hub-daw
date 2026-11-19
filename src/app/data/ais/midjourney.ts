import { AiProfile } from '../ai-model';

export const MIDJOURNEY: AiProfile = {
  slug: 'midjourney',
  name: 'Midjourney',
  category: 'Imagen',
  summary: 'Generación de imágenes top por prompts.',
  title: 'Midjourney',
  subtitle:
    'Generación de imágenes por prompt. Ideal para conceptos visuales, portadas, posters y estilos “wow”.',
  chips: ['Imágenes', 'Estilos', 'Prompts', 'Parámetros'],
  theme: {
    mode: 'dark',
    accent: '#a855f7',
    accent2: '#3b82f6',
    heroImage: '/img/midjourney/mj1.gif',
  },
  sections: [
    {
      type: 'gallery',
      title: 'Galería (tus gifs)',
      images: [
        { src: '/img/midjourney/mj2.gif', alt: 'Midjourney demo 2' },
        { src: '/img/midjourney/mj3.gif', alt: 'Midjourney demo 3' },
        { src: '/img/midjourney/mj4.gif', alt: 'Midjourney demo 4' },
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
  ],
};
