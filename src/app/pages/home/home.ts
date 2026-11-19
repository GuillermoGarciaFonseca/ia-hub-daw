import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

import { AI_CATEGORIES, AiCategory } from '../../data/ai-model';
import { AIS, aisByCategory } from '../../data/ais';

/** Devuelve la categoría si es válida; si no (o si falta), `null` = todas. */
export function parseCategory(value: string | null | undefined): AiCategory | null {
  return (AI_CATEGORIES as readonly string[]).includes(value ?? '') ? (value as AiCategory) : null;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly ais = AIS;

  /** Botones del filtro: una entrada por categoría con IAs, con su contador. */
  readonly categories = aisByCategory().map(({ category, ais }) => ({ category, count: ais.length }));

  /** Categoría elegida. Vive en la URL (?categoria=Imagen) para poder compartir el enlace. */
  readonly selected = toSignal(
    this.route.queryParamMap.pipe(map((params) => parseCategory(params.get('categoria')))),
    { initialValue: null },
  );

  readonly visibleAis = computed(() => {
    const category = this.selected();
    return category ? this.ais.filter((ai) => ai.category === category) : this.ais;
  });

  select(category: AiCategory | null): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { categoria: category },
      replaceUrl: true,
    });
  }
}
