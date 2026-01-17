import { Component } from '@angular/core';

type MJStyle = {
  id: 'cinematic' | 'anime' | 'realistic' | 'product' | 'poster';
  name: string;
  vibe: string;
  base: string;
};

type MJAr = { id: '1:1' | '16:9' | '9:16' | '3:2' | '2:3'; label: string };

@Component({
  selector: 'app-ai-midjourney',
  standalone: false,
  templateUrl: './ai-midjourney.html',
  styleUrl: './ai-midjourney.scss',
})
export class AiMidjourney {
  title = 'Midjourney';
  subtitle =
    'Generación de imágenes por prompt. Ideal para conceptos visuales, portadas, posters y estilos “wow”.';

  // ✅ Tus gifs (en assets)
heroGif = '/img/midjourney/mj1.gif';

gallery = [
  { src: '/img/midjourney/mj2.gif', alt: 'Midjourney demo 2' },
  { src: '/img/midjourney/mj3.gif', alt: 'Midjourney demo 3' },
  { src: '/img/midjourney/mj4.gif', alt: 'Midjourney demo 4' },
];

  subject = 'a futuristic Valencia storefront at night, neon reflections, rain, ultra-detailed';
  styles: MJStyle[] = [
    { id: 'cinematic', name: 'Cinemático', vibe: 'Luz dramática + película', base: 'cinematic lighting, film still, depth of field, volumetric light' },
    { id: 'anime', name: 'Anime', vibe: 'Color y línea', base: 'anime style, clean lineart, vibrant colors, studio quality' },
    { id: 'realistic', name: 'Realista', vibe: 'Foto pro', base: 'photorealistic, 35mm, high detail, natural skin, HDR, sharp focus' },
    { id: 'product', name: 'Producto', vibe: 'Publicidad', base: 'product photography, studio lighting, soft shadows, clean background' },
    { id: 'poster', name: 'Poster', vibe: 'Diseño gráfico', base: 'graphic poster design, bold composition, typographic space, high contrast' },
  ];
  arOptions: MJAr[] = [
    { id: '1:1', label: '1:1 (cuadrado)' },
    { id: '16:9', label: '16:9 (horizontal)' },
    { id: '9:16', label: '9:16 (vertical)' },
    { id: '3:2', label: '3:2 (foto)' },
    { id: '2:3', label: '2:3 (retrato)' },
  ];

  selectedStyle: MJStyle['id'] = 'cinematic';
  selectedAr: MJAr['id'] = '16:9';
  stylize = 150; // 0-1000
  chaos = 10;    // 0-100
  seed: number | null = null;

  copied = false;

  setStyle(id: MJStyle['id']) {
    this.selectedStyle = id;
  }

  setAr(id: MJAr['id']) {
    this.selectedAr = id;
  }

  setStylize(delta: number) {
    const next = this.stylize + delta;
    this.stylize = Math.max(0, Math.min(1000, next));
  }

  setChaos(delta: number) {
    const next = this.chaos + delta;
    this.chaos = Math.max(0, Math.min(100, next));
  }

  randomSeed() {
    this.seed = Math.floor(Math.random() * 99999999);
  }

  clearSeed() {
    this.seed = null;
  }

  get builtPrompt(): string {
    const style = this.styles.find(s => s.id === this.selectedStyle)?.base ?? '';
    const seedPart = this.seed !== null ? ` --seed ${this.seed}` : '';
    return `/imagine prompt: ${this.subject}, ${style} --ar ${this.selectedAr} --stylize ${this.stylize} --chaos ${this.chaos}${seedPart}`;
  }

  async copyPrompt() {
    try {
      await navigator.clipboard.writeText(this.builtPrompt);
      this.copied = true;
      setTimeout(() => (this.copied = false), 1200);
    } catch {
      this.copied = false;
    }
  }
}
