import { AiProfile } from '../ai-model';

export const FLUX: AiProfile = {
  slug: 'flux',
  name: 'Flux',
  category: 'Imagen',
  summary: 'Modelos de imagen y vídeo de Black Forest Labs, con versión abierta.',
  title: 'FLUX (Black Forest Labs)',
  subtitle:
    'Los modelos FLUX de Black Forest Labs. FLUX 3 hace imagen, vídeo con audio y más en un solo modelo. Lo usas por API, en su playground o descargando los pesos abiertos para tu propio ordenador.',
  chips: ['Imagen', 'Vídeo', 'API', 'Pesos abiertos'],
  lastReviewed: '2026-11-20',
  theme: {
    mode: 'dark',
    accent: '#a16207',
    accent2: '#f97316',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Imágenes muy realistas, con buen texto y mucha variedad de estilos.',
        'FLUX 3 hace imagen y vídeo (hasta 20 segundos, con audio opcional).',
        'Pago por uso, sin suscripciones ni cuotas por usuario.',
        'FLUX 3 Image Klein tiene pesos abiertos y funciona en una sola GPU de consumo.',
        'Tiene playground para probarlo sin programar y API lista para producción.',
      ],
      cons: [
        'No es una app “de chat”: está pensado sobre todo para desarrolladores.',
        'Para usarlo en local necesitas una GPU decente y algo de configuración.',
        'Las licencias de los pesos abiertos tienen condiciones: léelas antes de usarlo en un producto.',
        'Las imágenes en 4K se encarecen bastante.',
        'Hay muchas versiones (FLUX 3, FLUX.2, FLUX.1) y es fácil liarse.',
      ],
    },
    {
      type: 'examples',
      title: 'Ejemplos reales (de la web oficial)',
      intro:
        'Resultados publicados en la web oficial, con el prompt que se usó tal y como lo publican (normalmente en inglés). El resultado no se copia aquí: pulsa el enlace para verlo.',
      examples: [
        {
          title: 'Retrato de estudio con texto en la camiseta',
          kind: 'imagen',
          description:
            'Uno de los 15 ejemplos de FLUX 3 Image: retrato de estudio en el que el texto “Manager” sale escrito en la camiseta.',
          prompt:
            'A studio portrait of a woman in a cream tee printed Manager in red, with red and yellow cuffs, on cobalt blue.',
          source: { label: 'Ver el ejemplo en bfl.ai', url: 'https://bfl.ai/models/flux-3-image' },
        },
        {
          title: 'Ballet visto desde bastidores',
          kind: 'imagen',
          description:
            'Imagen compuesta por un agente con FLUX 3 Image a partir de una sola línea de prompt y una relación de aspecto.',
          prompt:
            'Three ballerinas dancing Swan Lake, seen from the wings past the dark silhouettes of people watching.',
          source: { label: 'Ver el ejemplo en bfl.ai', url: 'https://bfl.ai/models/flux-3-image' },
        },
        {
          title: 'Escena compuesta con cajas',
          kind: 'imagen',
          description:
            '“Le Festival du Soleil”: imagen generada a partir de cajas de posición para cada elemento y este prompt de escena que lo une todo.',
          prompt:
            'A glowing concrete dome rises from a twilight bay, a crowd on the beach before it.',
          source: { label: 'Ver el ejemplo en bfl.ai', url: 'https://bfl.ai/models/flux-3-image' },
        },
      ],
    },
    {
      type: 'keyValues',
      title: 'Modelos actuales',
      items: [
        { key: 'FLUX 3', value: 'Un solo modelo multimodal: imagen, vídeo, audio y predicción de acciones (robótica)' },
        { key: 'FLUX 3 Image', value: 'Texto a imagen e imagen a imagen' },
        { key: 'FLUX 3 Image Klein', value: 'Versión ligera de 5,6B de parámetros, con pesos abiertos' },
        { key: 'FLUX.2 y FLUX.1', value: 'Generaciones anteriores, todavía disponibles' },
      ],
    },
    {
      type: 'plans',
      title: 'Precios (API, pago por uso)',
      intro: 'Precios oficiales en USD por imagen generada, según la resolución.',
      plans: [
        {
          tier: 'FLUX 3 Image',
          price: 'Desde $0,041 / imagen',
          forWho: 'Máxima calidad.',
          includes: ['1K: $0,048', '2K: $0,10', '4K: $0,607'],
        },
        {
          tier: 'FLUX 3 Image Klein',
          price: 'Desde $0,008 / imagen',
          forWho: 'Rápido y barato, ideal para prototipos.',
          includes: ['1K: $0,009', '2K: $0,014', '4K: $0,036'],
        },
        {
          tier: 'Licencias de pesos abiertos',
          price: 'Sin precio público (contactar con ventas)',
          forWho: 'Para ejecutarlo en tu propia infraestructura en un producto comercial.',
          includes: [
            'Builder: 10.000 imágenes/mes, 1 dominio, 10 usuarios',
            'Platform: 100.000 imágenes/mes, 1 dominio',
            'Professional (agencias): 100.000 imágenes/mes, hasta 3 dominios',
            'Enterprise: volumen y condiciones a medida',
          ],
        },
      ],
      buttons: [
        { label: 'Ver precios oficiales', url: 'https://bfl.ai/pricing', variant: 'primary' },
        { label: 'Licencias (oficial)', url: 'https://bfl.ai/open-weights', variant: 'ghost' },
        { label: 'Web de Black Forest Labs', url: 'https://bfl.ai/', variant: 'ghost' },
      ],
    },
    {
      type: 'prompts',
      title: 'Prompts que funcionan (copiar/pegar)',
      intro: 'A FLUX le van bien las descripciones naturales y concretas, como si describieras una foto.',
      prompts: [
        {
          title: 'Foto de producto',
          badge: '📦 Producto',
          prompt:
            'Foto de estudio de unos auriculares inalámbricos blancos sobre una piedra gris, luz suave lateral, fondo beige liso, sombras suaves, estilo catálogo, alta nitidez.',
        },
        {
          title: 'Escena realista',
          badge: '📷 Realista',
          prompt:
            'Fotografía callejera de Valencia al atardecer, un tranvía cruzando, gente paseando, luz dorada, objetivo de 35 mm, ligero grano de película.',
        },
        {
          title: 'Vídeo corto',
          badge: '🎬 Vídeo',
          prompt:
            'Plano cenital lento de una taza de café humeante sobre una mesa de madera, alguien escribiendo en un portátil al lado, sonido ambiente de cafetería, 8 segundos.',
        },
      ],
    },
  ],
};
