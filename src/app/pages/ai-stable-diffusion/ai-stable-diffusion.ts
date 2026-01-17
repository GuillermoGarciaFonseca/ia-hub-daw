import { Component } from '@angular/core';

type ProConRow = { pro?: string; con?: string };

type Feature = {
  title: string;
  badge: string;
  desc: string;
  bullets: string[];
};

type PromptCard = {
  title: string;
  badge: string;
  prompt: string;
};

type ResourceCard = {
  title: string;
  badge: string;
  links: { label: string; url: string }[];
};

@Component({
  selector: 'app-ai-stable-diffusion',
  standalone: false,
  templateUrl: './ai-stable-diffusion.html',
  styleUrl: './ai-stable-diffusion.scss',
})
export class AiStableDiffusion {
  title = 'Stable Diffusion';
  subtitle =
    'Generación de imágenes open-source: control total (modelos, estilos, ajustes) a cambio de más “toqueteo”. Si te mola trastear, es GOD.';

  chips = ['Txt2Img', 'Img2Img', 'Inpainting', 'ControlNet', 'LoRA', 'Local'];

  pros: string[] = [
    'Open-source y súper personalizable (modelos, LoRAs, estilos).',
    'Control fino: seed, sampler, steps, CFG, inpaint, ControlNet…',
    'Puedes correrlo local (privacidad + sin depender de servers).',
    'Comunidad brutal: checkpoints y workflows para todo.',
    'Ideal para pipelines: series coherentes, assets, variaciones.',
  ];

  cons: string[] = [
    'Curva de aprendizaje: parámetros, modelos, “por qué sale raro”.',
    'Requiere máquina decente si lo quieres local (GPU ayuda mucho).',
    'Calidad/consistencia depende del modelo y del workflow.',
    'Hay que gestionar modelos/pesos/actualizaciones (mantenimiento).',
    'Toca aprender “prompting” + negative prompts + control.',
  ];

  get proConRows(): ProConRow[] {
    const len = Math.max(this.pros.length, this.cons.length);
    return Array.from({ length: len }, (_, i) => ({ pro: this.pros[i], con: this.cons[i] }));
  }

  // Features clave (cards)
  features: Feature[] = [
    {
      title: 'Txt2Img',
      badge: '✨ Básico',
      desc: 'Texto → imagen. El punto de entrada para crear estilos y composiciones.',
      bullets: ['Ideal para concept art', 'Variaciones con seed', 'Control con CFG/steps'],
    },
    {
      title: 'Img2Img',
      badge: '🔁 Iteración',
      desc: 'Imagen → nueva versión. Perfecto para mejorar, mantener composición o “re-estilizar”.',
      bullets: ['Mantiene estructura', 'Denosing para controlar cambio', 'Upgrades rápidos'],
    },
    {
      title: 'Inpainting',
      badge: '🩹 Precisión',
      desc: 'Editar solo una zona: arreglar manos, caras, objetos, texto, etc.',
      bullets: ['Correcciones finas', 'Relleno inteligente', 'Edición “pro”'],
    },
    {
      title: 'ControlNet',
      badge: '🧠 Control',
      desc: 'Controlar pose, bordes, profundidad, lineart… para clavar composición.',
      bullets: ['Pose / Canny / Depth', 'Series coherentes', 'Menos “azar”'],
    },
    {
      title: 'LoRA / Checkpoints',
      badge: '🧩 Estilos',
      desc: 'Modelos y “mods” visuales: estilos, personajes, ropa, estética concreta.',
      bullets: ['Estilo consistente', 'Combinar varios LoRAs', 'Community packs'],
    },
    {
      title: 'Local vs Cloud',
      badge: '🖥️ Privacidad',
      desc: 'Local = control y privacidad. Cloud = comodidad sin setup.',
      bullets: ['Local: más control', 'Cloud: plug&play', 'Tú eliges'],
    },
  ];

  // Prompts copiables
  prompts: PromptCard[] = [
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
      prompt:
        'highly detailed hands, natural anatomy, correct fingers, realistic skin texture, soft light, sharp focus',
    },
  ];

  negativePrompt =
    'bad anatomy, extra fingers, deformed, blurry, low quality, watermark, text, logo, jpeg artifacts';

  // Recursos útiles (no “curiosidades”, links reales)
  resources: ResourceCard[] = [
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
  ];

  // “Guía rápida” (sin precios, porque aquí lo clave es control)
  quickStart = [
    { k: 'Sampler', v: 'Empieza con DPM++ 2M / Euler a (si está)' },
    { k: 'Steps', v: '25–35 para la mayoría' },
    { k: 'CFG', v: '5–8 (más alto = más literal, pero puede “romper”)'},
    { k: 'Seed', v: 'Fija seed para repetir y variar “controlado”' },
    { k: 'Negative', v: 'Úsalo siempre para limpiar artefactos' },
  ];

  // Copiar al portapapeles (sin ngModel)
  async copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      // opcional: podrías mostrar un toast si tienes uno
    } catch {}
  }
}
