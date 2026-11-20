import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { ExampleKind, ProsConsSection } from '../../data/ai-model';
import { findAiBySlug } from '../../data/ais';

/** Etiqueta (con icono) de cada tipo de resultado de los ejemplos reales. */
export const EXAMPLE_KIND_LABELS: Record<ExampleKind, string> = {
  imagen: 'Imagen',
  vídeo: 'Vídeo',
  audio: 'Audio',
  texto: 'Texto',
  código: 'Código',
  web: 'Web',
  documento: 'Documento',
};

/**
 * Quita los emojis de una etiqueta (los datos los usan como icono y el diseño no).
 * Si no queda texto con letras o números, devuelve '' para no pintar la etiqueta.
 */
export function plainLabel(text: string | undefined): string {
  const clean = (text ?? '')
    .replace(/[\p{Extended_Pictographic}\u{FE0F}\u{200D}\u{20E3}]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
  return /[\p{L}\p{N}]/u.test(clean) ? clean : '';
}

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

  /** Fecha de la última revisión en formato largo español ("19 de noviembre de 2026"). */
  readonly lastReviewedLabel = computed(() => {
    const date = this.ai()?.lastReviewed;
    return date ? formatReviewDate(date) : '';
  });

  /** Clave del último prompt copiado, para mostrar "Copiado" unos segundos. */
  readonly copiedKey = signal<string | null>(null);

  plain(text: string | undefined): string {
    return plainLabel(text);
  }

  kindLabel(kind: ExampleKind): string {
    return EXAMPLE_KIND_LABELS[kind];
  }

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

/** Convierte "AAAA-MM-DD" en "19 de noviembre de 2026" sin depender de la zona horaria. */
export function formatReviewDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, day)));
}
