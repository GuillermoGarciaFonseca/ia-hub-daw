import { Component } from '@angular/core';

type ProConRow = { pro?: string; con?: string };

type UseCase = { title: string; badge: string; points: string[] };

type PromptCard = { title: string; badge: string; prompt: string };

type LinkCard = { title: string; badge: string; links: { label: string; url: string }[] };

type Plan = { tier: 'Acceso (X Premium)'; priceText: string; notes: string[] };

@Component({
  selector: 'app-ai-grok',
  standalone: false,
  templateUrl: './ai-grok.html',
  styleUrl: './ai-grok.scss',
})
export class AiGrok {
  title = 'Grok';
  subtitle =
    'IA integrada en X (Twitter) con tono más “directo” y buen rollo para ideas, tendencias y respuestas rápidas.';

  pros: string[] = [
    'Muy buena para brainstorming y respuestas rápidas.',
    'Encaja bien para “qué está pasando” en temas/tendencias.',
    'Estilo más directo (menos texto relleno).',
    'Buena para listas, planes y resúmenes cortos.',
    'Ideal para contenido y copy si quieres un tono con personalidad.',
  ];

  cons: string[] = [
    'Depende del ecosistema X (acceso/condiciones).',
    'Si te hace falta precisión seria, toca verificar.',
    'Puede ser demasiado “valiente” en afirmaciones si no lo guías.',
    'No es la mejor para documentos ultra largos tipo “paper”.',
    'Cambios de producto frecuentes (planes/acceso).',
  ];

  get proConRows(): ProConRow[] {
    const len = Math.max(this.pros.length, this.cons.length);
    return Array.from({ length: len }, (_, i) => ({ pro: this.pros[i], con: this.cons[i] }));
  }

  useCases: UseCase[] = [
    {
      title: 'Tendencias / resumen rápido',
      badge: '📡',
      points: ['Qué se está hablando y por qué', 'Resumen en 8 bullets', 'Qué es ruido vs qué es real'],
    },
    {
      title: 'Brainstorming creativo',
      badge: '⚡',
      points: ['Ideas para posts', 'Ganchos y titulares', 'Guiones cortos y punchy'],
    },
    {
      title: 'Decisiones express',
      badge: '🧠',
      points: ['Checklist rápido', 'Pros/contras en 1 minuto', 'Recomendación final + “por qué”'],
    },
    {
      title: 'Copy / estilo',
      badge: '📝',
      points: ['Reescribe con tono', '3 versiones (soft/medio/agresivo)', 'Optimiza para redes'],
    },
  ];

  prompts: PromptCard[] = [
    {
      title: 'Resumen de tema caliente',
      badge: '📡',
      prompt:
        'Explícame qué está pasando con “X” en 10 bullets.\n' +
        'Luego: 3 conclusiones + 3 cosas que aún no están claras.\n' +
        'Termina con: “qué harías tú si…”',
    },
    {
      title: 'Ideas para redes',
      badge: '⚡',
      prompt:
        'Dame 12 ideas de posts sobre “X”.\n' +
        'Formato: gancho (1 línea) + 3 bullets.\n' +
        'Tono: directo, divertido y útil.',
    },
    {
      title: 'Comparador rápido',
      badge: '⚖️',
      prompt:
        'Comparo A vs B para objetivo C.\n' +
        'Haz: tabla corta + pros/contras + recomendación final.\n' +
        'No me sueltes chapa: directo.',
    },
    {
      title: 'Reescritura con estilo',
      badge: '📝',
      prompt:
        'Reescribe este texto con 3 tonos:\n' +
        '1) profesional\n2) cercano\n3) “Grok mode” (más atrevido)\n' +
        'Texto: “...”',
    },
  ];

  links: LinkCard[] = [
    {
      title: 'Oficial',
      badge: '🏁',
      links: [
        { label: 'xAI', url: 'https://x.ai/' },
        { label: 'X (Twitter)', url: 'https://x.com/' },
      ],
    },
    {
      title: 'Acceso / planes',
      badge: '💳',
      links: [
        { label: 'X Premium', url: 'https://help.x.com/en/using-x/x-premium' },
      ],
    },
  ];

  plans: Plan[] = [
    {
      tier: 'Acceso (X Premium)',
      priceText: 'Depende del plan de X',
      notes: [
        'Grok suele estar ligado a X Premium (según región/condiciones).',
        'Si solo lo usas ocasionalmente, quizá no te compensa pagar.',
      ],
    },
  ];

  pricingNote = 'Acceso y precios pueden variar por región y por cambios en X. Mejor mirarlo en X Premium.';
}
