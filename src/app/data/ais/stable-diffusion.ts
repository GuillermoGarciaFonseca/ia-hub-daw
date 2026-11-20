import { AiProfile } from '../ai-model';

export const STABLE_DIFFUSION: AiProfile = {
  slug: 'stable-diffusion',
  name: 'Stable Diffusion',
  category: 'Imagen',
  summary: 'Imagen open, control y personalización.',
  title: 'Stable Diffusion',
  subtitle:
    'Generación de imágenes open-source: control total (modelos, estilos, ajustes) a cambio de más “toqueteo”. Si te mola trastear, es GOD.',
  chips: ['Txt2Img', 'Img2Img', 'Inpainting', 'ControlNet', 'LoRA', 'Local'],
  lastReviewed: '2026-11-20',
  theme: {
    mode: 'dark',
    accent: '#a855f7',
    accent2: '#22d3ee',
  },
  sections: [
    {
      type: 'prosCons',
      title: 'Ventajas vs Desventajas',
      pros: [
        'Open-source y súper personalizable (modelos, LoRAs, estilos).',
        'Control fino: seed, sampler, steps, CFG, inpaint, ControlNet…',
        'Puedes correrlo local (privacidad + sin depender de servers).',
        'Comunidad brutal: checkpoints y workflows para todo.',
        'Ideal para pipelines: series coherentes, assets, variaciones.',
      ],
      cons: [
        'Curva de aprendizaje: parámetros, modelos, “por qué sale raro”.',
        'Requiere máquina decente si lo quieres local (GPU ayuda mucho).',
        'Calidad/consistencia depende del modelo y del workflow.',
        'Hay que gestionar modelos/pesos/actualizaciones (mantenimiento).',
        'Toca aprender “prompting” + negative prompts + control.',
      ],
    },
    {
      type: 'examples',
      title: 'Ejemplos reales (de la web oficial)',
      intro:
        'Ejemplos de la ficha oficial de Stable Diffusion 3.5 Large en Hugging Face (de Stability AI).',
      examples: [
        {
          title: 'Astronauta en la jungla',
          kind: 'imagen',
          description:
            'Prompt del ejemplo de código oficial para generar una imagen con SD 3.5 Large. En la ficha también hay una galería de muestras del modelo.',
          prompt:
            'Astronaut in a jungle, cold color palette, muted colors, detailed, 8k',
          source: { label: 'Ver la ficha en Hugging Face', url: 'https://huggingface.co/stabilityai/stable-diffusion-3.5-large' },
        },
      ],
    },
    {
      type: 'cards',
      title: 'Modo “pro”: funciones clave',
      intro: 'Aquí está la gracia real de Stable Diffusion: control fino + workflows.',
      cards: [
        {
          title: 'Txt2Img',
          badge: '✨ Básico',
          text: 'Texto → imagen. El punto de entrada para crear estilos y composiciones.',
          bullets: ['Ideal para concept art', 'Variaciones con seed', 'Control con CFG/steps'],
        },
        {
          title: 'Img2Img',
          badge: '🔁 Iteración',
          text: 'Imagen → nueva versión. Perfecto para mejorar, mantener composición o “re-estilizar”.',
          bullets: ['Mantiene estructura', 'Denoising para controlar cambio', 'Upgrades rápidos'],
        },
        {
          title: 'Inpainting',
          badge: '🩹 Precisión',
          text: 'Editar solo una zona: arreglar manos, caras, objetos, texto, etc.',
          bullets: ['Correcciones finas', 'Relleno inteligente', 'Edición “pro”'],
        },
        {
          title: 'ControlNet',
          badge: '🧠 Control',
          text: 'Controlar pose, bordes, profundidad, lineart… para clavar composición.',
          bullets: ['Pose / Canny / Depth', 'Series coherentes', 'Menos “azar”'],
        },
        {
          title: 'LoRA / Checkpoints',
          badge: '🧩 Estilos',
          text: 'Modelos y “mods” visuales: estilos, personajes, ropa, estética concreta.',
          bullets: ['Estilo consistente', 'Combinar varios LoRAs', 'Community packs'],
        },
        {
          title: 'Local vs Cloud',
          badge: '🖥️ Privacidad',
          text: 'Local = control y privacidad. Cloud = comodidad sin setup.',
          bullets: ['Local: más control', 'Cloud: plug&play', 'Tú eliges'],
        },
      ],
    },
    {
      type: 'plans',
      title: 'Modelos, licencia y precio',
      intro:
        'Los modelos actuales son la familia Stable Diffusion 3.5 (Large, Large Turbo y Medium), además de SDXL y SDXL Turbo. Datos de la web oficial de Stability AI.',
      plans: [
        {
          tier: 'Local (Community License)',
          price: 'Gratis',
          forWho: 'Estudiantes, investigación, creadores y empresas pequeñas.',
          includes: ['Uso personal, de investigación y comercial', 'Puedes hacer fine-tunes y LoRAs'],
          limitations: ['Solo gratis si tú o tu organización facturáis menos de 1 M$ al año'],
        },
        {
          tier: 'Enterprise',
          price: 'A medida (contactar con ventas)',
          forWho: 'Empresas que facturan más de 1 M$ al año o proveedores de API.',
        },
        {
          tier: 'API de Stability',
          price: '1 crédito = $0,01',
          forWho: 'Si no quieres instalar nada: pagas por créditos.',
          includes: [
            '25 créditos gratis para empezar',
            'SD 3.5 Large: 6,5 créditos por imagen',
            'SD 3.5 Large Turbo: 4 créditos; SD 3.5 Medium: 3,5',
            'Stable Image Ultra: 8 créditos por imagen',
          ],
        },
      ],
      buttons: [
        { label: 'Licencia (oficial)', url: 'https://stability.ai/license', variant: 'primary' },
        { label: 'Precios de la API', url: 'https://docs.stability.ai/pricing', variant: 'ghost' },
      ],
    },
    {
      type: 'keyValues',
      title: 'Guía rápida (ajustes que no fallan)',
      intro: 'Si no quieres volverte loco al empezar: usa esto como base.',
      items: [
        { key: 'Sampler', value: 'Empieza con DPM++ 2M / Euler a (si está)' },
        { key: 'Steps', value: '25–35 para la mayoría' },
        { key: 'CFG', value: '5–8 (más alto = más literal, pero puede “romper”)' },
        { key: 'Seed', value: 'Fija seed para repetir y variar “controlado”' },
        { key: 'Negative', value: 'Úsalo siempre para limpiar artefactos' },
      ],
    },
    {
      type: 'prompts',
      title: 'Prompts que funcionan (copiar/pegar)',
      intro: 'Cortos, claros y con estructura. Te ahorran tiempo real.',
      prompts: [
        {
          title: 'Portada “tech gradient” (limpia)',
          badge: '🟣 Diseño',
          prompt:
            'abstract tech gradient background, purple/blue neon glow, soft smooth shapes, modern minimal, no text, high resolution, 16:9, clean, subtle grain',
        },
        {
          title: 'Producto / mockup elegante',
          badge: '📦 Producto',
          prompt:
            'premium product hero shot, studio lighting, softbox, clean background, subtle shadow, ultra detailed, photorealistic, 85mm, high dynamic range',
        },
        {
          title: 'Concept art ciudad futurista',
          badge: '🌆 Concept',
          prompt:
            'futuristic city at dusk, neon reflections, rain, cinematic wide shot, ultra detailed, volumetric light, sharp focus, high detail, realistic',
        },
        {
          title: 'Inpaint: arreglar manos',
          badge: '✋ Fix',
          prompt: 'highly detailed hands, natural anatomy, correct fingers, realistic skin texture, soft light, sharp focus',
        },
      ],
      negativePrompt: 'bad anatomy, extra fingers, deformed, blurry, low quality, watermark, text, logo, jpeg artifacts',
    },
    {
      type: 'cards',
      title: 'Recursos (de verdad)',
      intro: 'Modelos, LoRAs, interfaces y guías. Sin relleno.',
      cards: [
        {
          title: 'Modelos, LoRAs y ejemplos',
          badge: '🧠 Comunidad',
          links: [
            { label: 'Civitai (modelos/LoRAs)', url: 'https://civitai.com/' },
            { label: 'Hugging Face (model hub)', url: 'https://huggingface.co/models' },
          ],
        },
        {
          title: 'Interfaces populares',
          badge: '🛠️ Tools',
          links: [
            { label: 'AUTOMATIC1111 WebUI', url: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui' },
            { label: 'ComfyUI (workflows)', url: 'https://github.com/comfyanonymous/ComfyUI' },
          ],
        },
        {
          title: 'Aprender rápido (sin humo)',
          badge: '📚 Guía',
          links: [
            { label: 'Prompting básico (Hugging Face)', url: 'https://huggingface.co/blog/stable_diffusion' },
            { label: 'CompVis (origen SD)', url: 'https://github.com/CompVis/stable-diffusion' },
          ],
        },
      ],
      buttons: [
        { label: 'Stability (oficial)', url: 'https://stability.ai/', variant: 'primary' },
        { label: 'Explorar modelos', url: 'https://civitai.com/', variant: 'ghost' },
      ],
    },
  ],
};
