import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
ais = [
  { name: 'ChatGPT', path: '/chatgpt', tag: 'Texto', desc: 'Chat conversacional, redacción, ideas, código.' },
  { name: 'Claude', path: '/claude', tag: 'Texto', desc: 'Análisis largo, escritura clara, razonamiento.' },
  { name: 'Gemini', path: '/gemini', tag: 'Multimodal', desc: 'Texto + imagen, enfoque Google.' },
  { name: 'Copilot', path: '/copilot', tag: 'Código', desc: 'Asistente en IDE, autocompletado inteligente.' },
  { name: 'Mistral', path: '/mistral', tag: 'Open', desc: 'Modelos eficientes, self-hosting friendly.' },
  { name: 'Llama', path: '/llama', tag: 'Open', desc: 'Ecosistema grande, fine-tuning y comunidad.' },
  { name: 'Perplexity', path: '/perplexity', tag: 'Búsqueda', desc: 'Respuestas con fuentes, estilo “investigación”.' },
  { name: 'Grok', path: '/grok', tag: 'Social', desc: 'Estilo directo, integrado en X (según plan).' },
  { name: 'Midjourney', path: '/midjourney', tag: 'Imagen', desc: 'Generación de imágenes top por prompts.' },
  { name: 'Stable Diffusion', path: '/stable-diffusion', tag: 'Imagen', desc: 'Imagen open, control y personalización.' }
];

}
