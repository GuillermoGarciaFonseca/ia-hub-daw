import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { ProsConsSection } from '../../data/ai-model';
import { findAiBySlug } from '../../data/ais';

/**
 * Página de detalle común para todas las IAs (/ia/:slug).
 * No contiene datos: todo sale del archivo de la IA en `src/app/data/ais/`.
 */
@Component({
  selector: 'app-ai-detail',
  standalone: false,
  templateUrl: './ai-detail.html',
  styleUrl: './ai-detail.scss',
})
export class AiDetail {
  private readonly route = inject(ActivatedRoute);

  private readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug'))), {
    initialValue: null,
  });

  /** La ruta solo existe para slugs válidos (ver `knownAiGuard`), así que aquí siempre hay IA. */
  readonly ai = computed(() => findAiBySlug(this.slug()));

  /** Variables CSS con los colores e imagen de la IA: la hoja de estilos las usa para tematizar la página. */
  readonly themeVars = computed(() => {
    const theme = this.ai()?.theme;
    if (!theme) return {};
    return {
      '--accent': theme.accent,
      '--accent2': theme.accent2 ?? theme.accent,
      '--hero-image': theme.heroImage ? `url('${theme.heroImage}')` : 'none',
    };
  });

  /** Clave del último prompt copiado, para mostrar "Copiado" unos segundos. */
  readonly copiedKey = signal<string | null>(null);

  proConRows(section: ProsConsSection): { pro?: string; con?: string }[] {
    const length = Math.max(section.pros.length, section.cons.length);
    return Array.from({ length }, (_, i) => ({ pro: section.pros[i], con: section.cons[i] }));
  }

  async copy(text: string, key: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
      this.copiedKey.set(key);
      setTimeout(() => {
        if (this.copiedKey() === key) this.copiedKey.set(null);
      }, 1200);
    } catch {
      this.copiedKey.set(null);
    }
  }
}
