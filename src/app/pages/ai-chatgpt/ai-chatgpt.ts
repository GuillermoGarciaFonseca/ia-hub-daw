import { Component } from '@angular/core';

type ProConRow = { pro?: string; con?: string };

type Plan = {
  tier: 'Gratis' | 'Plus' | 'Pro';
  priceText: string;
  img: string;
  forWho: string;

  // 👇 NUEVO: “qué cambia” sin repetir secciones
  highlights: string[];

  includes: string[];
  limitations: string[];
};

type Curiosity = {
  title: string;
  badge: string;
  links: { label: string; url: string }[];
};

@Component({
  selector: 'app-ai-chatgpt',
  standalone: false,
  templateUrl: './ai-chatgpt.html',
  styleUrl: './ai-chatgpt.scss',
})
export class AiChatgpt {
  title = 'ChatGPT';
  subtitle =
    'IA conversacional para escribir, resumir, planificar, aprender y programar. Ideal si lo usas con buen criterio (y verificas cuando toca).';

  pros: string[] = [
    'Muy versátil: texto, ideas, resúmenes, emails, guiones…',
    'Muy útil para programar: ejemplos, refactors, explicaciones.',
    'Iteración rápida: le dices “mejor esto” y lo afina.',
    'Puede ayudarte a estructurar proyectos.',
    'Ahorra tiempo en tareas repetitivas (documentación, plantillas).',
  ];

  cons: string[] = [
    'Puede equivocarse con seguridad (alucinaciones) si no verificas.',
    'Si el prompt es vago, el resultado suele ser meh.',
    'No sustituye criterio profesional (tú mandas).',
    'En gratis suele ir más limitado (capacidad/velocidad).',
    'Temas sensibles: mejor contrastar con fuentes oficiales.',
  ];

  get proConRows(): ProConRow[] {
    const len = Math.max(this.pros.length, this.cons.length);
    return Array.from({ length: len }, (_, i) => ({
      pro: this.pros[i],
      con: this.cons[i],
    }));
  }

  curiosities: Curiosity[] = [
    {
      title: 'Vídeo “Top 10 jugadores CS:GO” (guion + estructura + voz)',
      badge: '🎬 Real',
      links: [
        { label: 'CapCut (plantillas de vídeo)', url: 'https://www.capcut.com/' },
        { label: 'Pexels (vídeo e imágenes gratis)', url: 'https://www.pexels.com/' },
      ],
    },
    {
      title: 'Fondos, mockups e imágenes(sin pagar)',
      badge: '🖼️ Visual',
      links: [
        { label: 'Unsplash (imágenes top)', url: 'https://unsplash.com/' },
        { label: 'Canva (diseño rápido)', url: 'https://www.canva.com/' },
      ],
    },
    {
      title: 'Prompts buenos de la comunidad (ideas listas)',
      badge: '🧠 Comunidad',
      links: [
        { label: 'Awesome ChatGPT Prompts (GitHub)', url: 'https://github.com/f/awesome-chatgpt-prompts' },
        { label: 'Reddit r/ChatGPT', url: 'https://www.reddit.com/r/ChatGPT/' },
      ],
    },
    {
      title: 'Programación: ejemplos reales y guías (nivel pro)',
      badge: '💻 Dev',
      links: [
        { label: 'OpenAI Cookbook (GitHub)', url: 'https://github.com/openai/openai-cookbook' },
        { label: 'Docs OpenAI', url: 'https://platform.openai.com/docs' },
      ],
    },
  ];

  plans: Plan[] = [
    {
      tier: 'Gratis',
      priceText: '$0 / mes',
      img: '/img/chatgpt/freechatgpt.png',
      forWho: 'Para probar, tareas puntuales y uso ligero.',
      highlights: [
        'Perfecto para empezar y aprender a “promptear”',
        'Puede ir más limitado en horas punta',
        'Ideal para tareas simples',
      ],
      includes: [
        'Acceso a ChatGPT sin pagar',
        'Funciones básicas para chat y productividad',
      ],
      limitations: [
        'Menos capacidad/beneficios que los planes de pago',
        'Suele tener más límites en horas punta',
      ],
    },
    {
      tier: 'Plus',
      priceText: '$20 / mes',
      img: '/img/chatgpt/pluschatgpt.png',
      forWho: 'Si lo usas a diario: estudio, curro, creación de contenido, programación.',
      highlights: [
        'Recomendado si lo usas varias veces por semana',
        'Más potencia y mejor experiencia general',
        'Suele compensar para estudio/código/productividad',
      ],
      includes: [
        'Experiencia más potente que Gratis',
        'Mejor acceso a modelos y funciones avanzadas',
      ],
      limitations: [
        'Sigue habiendo límites (aunque mejores que gratis)',
        'Precio puede variar por región/impuestos',
      ],
    },
    {
      tier: 'Pro',
      priceText: '$200 / mes',
      img: '/img/chatgpt/prochatgpt.png',
      forWho: 'Uso intensivo/avanzado: gente que exprime modelos y herramientas a saco.',
      highlights: [
        'Para uso intensivo/profesional',
        'Más acceso para tareas exigentes',
        'Solo compensa si lo amortizas',
      ],
      includes: [
        'Acceso escalado a lo “top” y herramientas avanzadas',
        'Pensado para tareas exigentes y mayor uso',
      ],
      limitations: [
        'Precio alto: solo compensa si lo amortizas',
        'No es “magia”: sigue necesitando prompts buenos',
      ],
    },
  ];
}

