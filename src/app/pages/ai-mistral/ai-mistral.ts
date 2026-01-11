import { Component } from '@angular/core';

type ProConRow = { pro?: string; con?: string };

type UseCaseCard = {
  title: string;
  badge: string;
  why: string;
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

type Plan = {
  tier: string;
  priceText: string;
  note: string;
};

@Component({
  selector: 'app-ai-mistral',
  standalone: false,
  templateUrl: './ai-mistral.html',
  styleUrl: './ai-mistral.scss',
})
export class AiMistral {
  title = 'Mistral';
  subtitle =
    'IA europea con enfoque muy “dev”: rápida, directa y perfecta si te mola control + modelos abiertos. Ideal para prototipar, construir features y entender código sin humo.';

  pros: string[] = [
    'Muy buena para tareas de dev: explicación + refactor + estructura.',
    'Ecosistema con modelos abiertos (enfoque “controlable”).',
    'Buena para texto técnico: docs, requisitos, README, specs.',
    'Rinde bien en flujos tipo “asistente de código”.',
    'Suele ser más “to the point” (menos charla, más acción).',
  ];

  cons: string[] = [
    'Si buscas creatividad “marketing”, a veces se nota más sobria.',
    'Como todas: puede fallar o inventar → toca verificar.',
    'Algunas funciones dependen de plataforma/plan/entorno.',
    'Si el prompt es flojo, el resultado se queda a medio gas.',
    'Para info “en tiempo real”, necesitas fuentes externas.',
  ];

  get proConRows(): ProConRow[] {
    const len = Math.max(this.pros.length, this.cons.length);
    return Array.from({ length: len }, (_, i) => ({
      pro: this.pros[i],
      con: this.cons[i],
    }));
  }

  useCases: UseCaseCard[] = [
    {
      title: 'Para programar (DAW)',
      badge: '💻 Dev',
      why: 'Cuando quieres avanzar rápido sin perder control.',
      bullets: [
        'Debug: “por qué peta esto” con pasos',
        'Refactor limpio (componentes, servicios, patrones)',
        'Tests y edge-cases',
      ],
    },
    {
      title: 'Documentación técnica',
      badge: '📄 Docs',
      why: 'Si tu proyecto tiene que sonar profesional, no “apuntes”.',
      bullets: [
        'README, guías de instalación',
        'Casos de uso, requisitos, historias de usuario',
        'Estructura de módulos / rutas',
      ],
    },
    {
      title: 'Arquitectura y decisiones',
      badge: '🏗️ Arch',
      why: 'Para justificar en memoria del proyecto por qué hiciste X.',
      bullets: [
        'Pros/cons de enfoques',
        'Qué patrón usar y por qué',
        'Riesgos + mitigaciones',
      ],
    },
    {
      title: 'Prototipos rápidos',
      badge: '⚡ Speed',
      why: 'Para “sacar algo ya” y luego pulir.',
      bullets: [
        'Plantillas UI',
        'Componentes base + routing',
        'Ideas de features y backlog',
      ],
    },
  ];

  prompts: PromptCard[] = [
    {
      title: 'Refactor Angular (limpio)',
      badge: '🧩',
      prompt:
        'Te pego este componente Angular. Refactorízalo para que sea más limpio y mantenible.\n' +
        '- Separa responsabilidades\n' +
        '- Evita lógica en plantilla\n' +
        '- Mantén el mismo comportamiento\n' +
        'Devuélveme: 1) explicación corta, 2) código final.',
    },
    {
      title: 'Caso de uso (bien escrito)',
      badge: '📌',
      prompt:
        'Redáctame un caso de uso profesional con:\n' +
        'Actores, precondiciones, flujo principal, alternativos, postcondiciones y reglas de negocio.\n' +
        'Contexto: [describe aquí la funcionalidad].\n' +
        'Formato tabla + bullets, tono claro.',
    },
    {
      title: 'Debug paso a paso',
      badge: '🧯',
      prompt:
        'Tengo este error: [pega error + fragmento de código].\n' +
        'Quiero que lo analices como si fueras mi mentor:\n' +
        '1) hipótesis\n2) cómo reproducir\n3) fix mínimo\n4) fix “bien”\n5) cómo evitarlo.',
    },
  {
    title: 'Checklist deploy (Angular)',
    badge: '✅',
    prompt:
      'Voy a subir una app Angular a producción. Hazme un checklist corto (10-12 puntos) con:\n' +
      '- build y entorno\n' +
      '- rutas (routing/refresh)\n' +
      '- assets (imágenes, paths)\n' +
      '- rendimiento (lazy load, tamaños)\n' +
      '- errores/logs\n' +
      '- rollback (plan B)\n' +
      'Formato: bullets + 1 consejo final.'
    },  
  ];

  resources: ResourceCard[] = [
    {
      title: 'Web y producto',
      badge: '🌍',
      links: [
        { label: 'Mistral (web oficial)', url: 'https://mistral.ai/' },
        { label: 'Le Chat (chat)', url: 'https://chat.mistral.ai/' },
      ],
    },
    {
      title: 'Para devs',
      badge: '🧑‍💻',
      links: [
        { label: 'Docs / plataforma', url: 'https://docs.mistral.ai/' },
        { label: 'GitHub', url: 'https://github.com/mistralai' },
      ],
    },
    {
      title: 'Recursos visuales (para tu web)',
      badge: '🖼️',
      links: [
        { label: 'Unsplash', url: 'https://unsplash.com/' },
        { label: 'Pexels', url: 'https://www.pexels.com/' },
      ],
    },
  ];

  plans: Plan[] = [
    {
      tier: 'Gratis',
      priceText: '€0',
      note: 'Perfecto para usarlo a diario sin complicarte.',
    },
    {
      tier: 'De pago',
      priceText: 'Según plan',
      note: 'Normalmente pagas por más uso / más límites / más prioridad.',
    },
  ];
  pricingNote =
    'Resumen simple: en Mistral lo importante no es “el plan”, es el enfoque (dev + control + modelos). Si tu uso es normal, con Gratis muchas veces vas sobrado.';
}
