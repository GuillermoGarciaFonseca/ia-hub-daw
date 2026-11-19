import { Component, OnInit, computed, input, signal } from '@angular/core';

import { PromptBuilderConfig } from '../../data/ai-model';

/**
 * Constructor interactivo de prompts (estilo Midjourney).
 * Recibe su configuración (estilos, formatos, rangos) desde los datos de la IA.
 */
@Component({
  selector: 'app-prompt-builder',
  standalone: false,
  templateUrl: './prompt-builder.html',
  styleUrl: './prompt-builder.scss',
})
export class PromptBuilder implements OnInit {
  readonly config = input.required<PromptBuilderConfig>();

  readonly subject = signal('');
  readonly selectedStyle = signal('');
  readonly selectedAr = signal('');
  readonly stylize = signal(0);
  readonly chaos = signal(0);
  readonly seed = signal<number | null>(null);
  readonly copied = signal(false);

  readonly builtPrompt = computed(() => {
    const style = this.config().styles.find((s) => s.id === this.selectedStyle())?.base ?? '';
    const seed = this.seed();
    const seedPart = seed !== null ? ` --seed ${seed}` : '';
    return `/imagine prompt: ${this.subject()}, ${style} --ar ${this.selectedAr()} --stylize ${this.stylize()} --chaos ${this.chaos()}${seedPart}`;
  });

  ngOnInit(): void {
    const c = this.config();
    this.subject.set(c.defaultSubject);
    this.selectedStyle.set(c.defaultStyle);
    this.selectedAr.set(c.defaultAspectRatio);
    this.stylize.set(c.stylize.initial);
    this.chaos.set(c.chaos.initial);
  }

  changeStylize(delta: number): void {
    const { min, max } = this.config().stylize;
    this.stylize.update((v) => clamp(v + delta, min, max));
  }

  changeChaos(delta: number): void {
    const { min, max } = this.config().chaos;
    this.chaos.update((v) => clamp(v + delta, min, max));
  }

  randomSeed(): void {
    this.seed.set(Math.floor(Math.random() * 99999999));
  }

  clearSeed(): void {
    this.seed.set(null);
  }

  signed(n: number): string {
    return n > 0 ? `+${n}` : `${n}`;
  }

  async copyPrompt(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.builtPrompt());
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 1200);
    } catch {
      this.copied.set(false);
    }
  }
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
