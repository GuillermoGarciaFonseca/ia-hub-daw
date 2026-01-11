import { Component } from '@angular/core';

type ProConRow = { pro?: string; con?: string };

type Plan = {
  tier: 'Gratis' | 'De pago';
  forWho: string;
};

type ResourceCard = {
  title: string;
  badge: string;
  links: { label: string; url: string }[];
};

type LanguageCard = {
  name: string;
  badge: string;
  why: string;
  examples: string[];
};

@Component({
  selector: 'app-ai-claude',
  standalone: false,
  templateUrl: './ai-claude.html',
  styleUrl: './ai-claude.scss',
})
export class AiClaude {
  title = 'Claude';
  subtitle =
    'IA de Anthropic con estilo “clean” para escribir bien, resumir largo, y razonar sin tanto humo. Muy fina para análisis y coding con contexto.';

  pros: string[] = [
    'Muy buena escribiendo claro: tono natural, menos “robot”.',
    'Suele ir fina en razonamiento y análisis de textos largos.',
    'Buen rendimiento en tareas de programación (explica + refactor).',
    'Va muy bien para documentos: resúmenes, requisitos, specs.',
    'En general, salida “elegante” y fácil de leer.'
  ];

  cons: string[] = [
    'Límites de uso: en horas punta o tareas largas puedes chocar.',
    'No es infalible: también puede inventar o equivocarse.',
    'Algunas funciones/modelos dependen del plan/región.',
    'Para datos “en tiempo real”, igual necesitas verificar fuera.',
    'A veces se queda demasiado prudente y toca insistir.'
  ];

  get proConRows(): ProConRow[] {
    const len = Math.max(this.pros.length, this.cons.length);
    return Array.from({ length: len }, (_, i) => ({
      pro: this.pros[i],
      con: this.cons[i],
    }));
  }

  languages: LanguageCard[] = [
    {
      name: 'TypeScript / Angular',
      badge: '🧩 Front',
      why: 'Perfecto para componentes, refactors, formularios, routing y “por qué peta esto”.',
      examples: ['Refactor', 'Validaciones', 'RxJS', 'Estructura TFG']
    },
    {
      name: 'JavaScript',
      badge: '⚡ Web',
      why: 'Genial para scripts rápidos, lógica de UI y explicación de errores.',
      examples: ['Utils', 'DOM', 'Fetch/API', 'Patrones']
    },
    {
      name: 'Python',
      badge: '🐍 Datos',
      why: 'Top para automatizar, limpiar datos, scripts y prototipos.',
      examples: ['Pandas', 'ETL', 'Scripts', 'APIs']
    },
    {
      name: 'Java / C#',
      badge: '🏗️ Backend',
      why: 'Muy útil para capas, arquitectura, validaciones y buenas prácticas.',
      examples: ['DTOs', 'Servicios', 'Repos', 'Tests']
    },
    {
      name: 'SQL',
      badge: '🗄️ DB',
      why: 'Te ayuda con joins, consultas y entender modelos.',
      examples: ['JOINs', 'GROUP BY', 'Índices', 'Queries']
    },
    {
      name: 'Bash / CLI',
      badge: '🛠️ DevOps',
      why: 'Para comandos, git y troubleshooting básico.',
      examples: ['Git', 'Scripts', 'Docker básico', 'Logs']
    }
  ];

  resources: ResourceCard[] = [
    {
      title: 'Comunidad + ideas (casos reales)',
      badge: '🧠 Comunidad',
      links: [
        { label: 'Claude (web oficial)', url: 'https://claude.ai/' },
        { label: 'Anthropic (News / updates)', url: 'https://www.anthropic.com/news' }
      ]
    },
    {
      title: 'TFG: imágenes y mockups gratis',
      badge: '🖼️ Visual',
      links: [
        { label: 'Unsplash', url: 'https://unsplash.com/' },
        { label: 'Pexels', url: 'https://www.pexels.com/' }
      ]
    },
    {
      title: 'Dev: docs y estado',
      badge: '💻 Dev',
      links: [
        { label: 'Docs Claude', url: 'https://docs.claude.com/' },
        { label: 'Status Anthropic', url: 'https://status.anthropic.com/' }
      ]
    }
  ];

plans: Plan[] = [
  {
    tier: 'Gratis',
    forWho: 'Recomendado. Para la mayoría de usos normales va sobrado.'
  },
  {
    tier: 'De pago',
    forWho: 'No suele compensar: pagas por más cuota/prioridad, no por una mejora bestia y los precios son ser de 20/100/200 euros.'
  }
];

  pricingNote =
    'Precios orientativos (USD) y pueden variar por región/impuestos. En general, pagar aporta sobre todo más uso/prioridad; para mucha gente el Gratis ya vale.';
}
