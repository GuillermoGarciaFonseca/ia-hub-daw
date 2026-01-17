import { Component } from '@angular/core';

type ProConRow = { pro?: string; con?: string };

type UseCase = {
  title: string;
  badge: string;
  points: string[];
};

type PromptCard = {
  title: string;
  badge: string;
  prompt: string;
};

type LinkCard = {
  title: string;
  badge: string;
  links: { label: string; url: string }[];
};

type Plan = {
  tier: 'Gratis' | 'Pro';
  priceText: string;
  notes: string[];
};

@Component({
  selector: 'app-ai-perplexity',
  standalone: false,
  templateUrl: './ai-perplexity.html',
  styleUrl: './ai-perplexity.scss',
})
export class AiPerplexity {
  title = 'Perplexity';
  subtitle =
    'IA enfocada en buscar y responder con fuentes. Ideal cuando quieres “respuesta + de dónde sale”, no solo texto bonito.';

  pros: string[] = [
    'Responde con enlaces y fuentes (más verificable).',
    'Genial para investigar rápido temas nuevos.',
    'Te ahorra tiempo filtrando resultados.',
    'Perfecto para comparar opciones y sacar conclusiones.',
    'Modo “resumen” muy útil para noticias/temas largos.',
  ];

  cons: string[] = [
    'Las fuentes pueden variar en calidad: hay que mirar bien.',
    'A veces interpreta de más y conviene contrastar.',
    'Para creatividad pura suele ser mejor otro chat.',
    'Si la pregunta es vaga, te devuelve un mix raro.',
    'Algunas funciones avanzadas dependen del plan.',
  ];

  get proConRows(): ProConRow[] {
    const len = Math.max(this.pros.length, this.cons.length);
    return Array.from({ length: len }, (_, i) => ({
      pro: this.pros[i],
      con: this.cons[i],
    }));
  }

  useCases: UseCase[] = [
    {
      title: 'Investigar con fuentes',
      badge: '🔎',
      points: [
        'Comparar productos/servicios',
        'Buscar normativa / documentación',
        'Resumir artículos y quedarte con lo importante',
      ],
    },
    {
      title: 'Aprender rápido un tema',
      badge: '🧠',
      points: [
        'Conceptos + ejemplos',
        'Definiciones con enlaces',
        'Resumen “para entenderlo en 5 min”',
      ],
    },
    {
      title: 'Tomar decisiones',
      badge: '⚖️',
      points: [
        'Pros/contras con referencias',
        'Ranking por criterios',
        'Checklist y plan de acción',
      ],
    },
    {
      title: 'Noticias y actualidad',
      badge: '📰',
      points: [
        'Resumen de lo que ha pasado',
        'Contexto + enlaces',
        'Qué se sabe / qué no',
      ],
    },
  ];

  promptCards: PromptCard[] = [
    {
      title: 'Comparador con fuentes',
      badge: '⚡',
      prompt:
        'Compárame X vs Y para Z (contexto: ...). Dame:\n' +
        '- tabla comparativa\n' +
        '- pros/contras\n' +
        '- recomendación final\n' +
        'Incluye 5-8 fuentes fiables al final.',
    },
    {
      title: 'Resumen de una noticia',
      badge: '📰',
      prompt:
        'Resúmeme esta noticia/tema: “...”\n' +
        'Formato:\n' +
        '- qué ha pasado (5 bullets)\n' +
        '- por qué importa\n' +
        '- lo que falta por confirmar\n' +
        '- fuentes',
    },
    {
      title: 'Plan paso a paso',
      badge: '🧭',
      prompt:
        'Quiero hacer X. Hazme un plan paso a paso (8-12 pasos),\n' +
        'con riesgos típicos, cómo evitarlos y recursos para aprender.\n' +
        'Añade fuentes/referencias.',
    },
    {
      title: 'Checklist rápido',
      badge: '✅',
      prompt:
        'Necesito un checklist corto para X.\n' +
        'Quiero 10-12 puntos máximo, ordenados y con 1 consejo final.\n' +
        'Incluye enlaces útiles al final.',
    },
  ];

  links: LinkCard[] = [
    {
      title: 'Oficial',
      badge: '🏁',
      links: [
        { label: 'Perplexity (web)', url: 'https://www.perplexity.ai/' },
        { label: 'Pricing', url: 'https://www.perplexity.ai/pro' },
      ],
    },
    {
      title: 'Tips de búsqueda',
      badge: '📚',
      links: [
        { label: 'Google Search operators', url: 'https://support.google.com/websearch/answer/2466433' },
        { label: 'Wikipedia (para arrancar un tema)', url: 'https://www.wikipedia.org/' },
      ],
    },
  ];

  plans: Plan[] = [
    {
      tier: 'Gratis',
      priceText: '$0',
      notes: [
        'Perfecto para investigar de vez en cuando.',
        'Suficiente para uso normal y consultas puntuales.',
      ],
    },
    {
      tier: 'Pro',
      priceText: '≈ $20/mes',
      notes: [
        'Más potencia y funciones avanzadas (según región).',
        'Para quien investiga todo el día.',
      ],
    },
  ];

  pricingNote = 'Precios orientativos (USD) y pueden variar por región. Si no investigas a diario, Gratis suele bastar.';
}
