import { Component } from '@angular/core';

type ProConRow = { pro?: string; con?: string };

type Plan = {
  tier: 'Gratis' | 'Plus' | 'Pro';
  priceText: string;
  img: string;
  forWho: string;
  includes: string[];
  limitations: string[];
};

type Curiosity = { title: string; text: string };

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
    'Puede ayudarte a estructurar proyectos (como este TFG).',
    'Ahorra tiempo en tareas repetitivas (documentación, plantillas).'
  ];

  cons: string[] = [
    'Puede equivocarse con seguridad (alucinaciones) si no verificas.',
    'Si el prompt es vago, el resultado suele ser meh.',
    'No sustituye criterio profesional (tú mandas).',
    'En gratis suele ir más limitado (capacidad/velocidad).',
    'Temas sensibles: mejor contrastar con fuentes oficiales.'
  ];

  get proConRows(): ProConRow[] {
    const len = Math.max(this.pros.length, this.cons.length);
    return Array.from({ length: len }, (_, i) => ({
      pro: this.pros[i],
      con: this.cons[i]
    }));
  }

  curiosities: Curiosity[] = [
    {
      title: 'GPT significa “Generative Pre-trained Transformer”',
      text: 'Es un tipo de modelo basado en Transformers. En la práctica: predice/compone texto de forma súper competente.'
    },
    {
      title: 'No es “Google”: no garantiza verdad',
      text: 'Es buenísimo generando y razonando, pero si necesitas precisión (precios, leyes, datos), verifica con fuentes.'
    },
    {
      title: 'Tu prompt es el volante',
      text: 'Si le das contexto, formato esperado, ejemplos y restricciones, el salto de calidad es brutal.'
    },
    {
      title: 'Puede ayudarte a estudiar de verdad',
      text: 'Pídele: “Explícamelo paso a paso”, “hazme preguntas tipo examen”, “corrige mi solución y dime por qué”.'
    }
  ];

  plans: Plan[] = [
    {
      tier: 'Gratis',
      priceText: '$0 / mes',
      img: '/img/chatgpt/free.svg',
      forWho: 'Para probar, tareas puntuales y uso ligero.',
      includes: [
        'Acceso a ChatGPT sin pagar',
        'Funciones básicas para chat y productividad'
      ],
      limitations: [
        'Menos capacidad/beneficios que los planes de pago',
        'Suele tener más límites en horas punta'
      ]
    },
    {
      tier: 'Plus',
      priceText: '$20 / mes',
      img: '/img/chatgpt/plus.svg',
      forWho: 'Si lo usas a diario: estudio, curro, creación de contenido, programación.',
      includes: [
        'Experiencia más potente que Gratis',
        'Mejor acceso a modelos y funciones avanzadas'
      ],
      limitations: [
        'Sigue habiendo límites (aunque mejores que gratis)',
        'Precio puede variar por región/impuestos'
      ]
    },
    {
      tier: 'Pro',
      priceText: '$200 / mes',
      img: '/img/chatgpt/pro.svg',
      forWho: 'Uso intensivo/avanzado: gente que exprime modelos y herramientas a saco.',
      includes: [
        'Acceso escalado a lo “top” y herramientas avanzadas',
        'Pensado para tareas exigentes y mayor uso'
      ],
      limitations: [
        'Precio alto: solo compensa si lo amortizas',
        'No es “magia”: sigue necesitando prompts buenos'
      ]
    }
  ];

  freeVsPaid = [
    {
      title: 'Si lo usas GRATIS',
      points: [
        'Perfecto para empezar y tareas simples',
        'Puede ir más limitado en capacidad y en horas punta',
        'Buenísimo para aprender a “promptear”'
      ]
    },
    {
      title: 'Precio “medio” (PLUS)',
      points: [
        'Recomendado si lo usas varias veces por semana',
        'Más potencia y mejor experiencia general',
        'Suele compensar para estudio/código/productividad'
      ]
    },
    {
      title: 'Precio “alto” (PRO)',
      points: [
        'Para uso intensivo/profesional con necesidad de más acceso',
        'No es para todo el mundo: es para exprimirlo fuerte'
      ]
    }
  ];
}
