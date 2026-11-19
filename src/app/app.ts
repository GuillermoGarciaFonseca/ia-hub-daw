import { Component, ElementRef, HostListener, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

import { AiCategory } from './data/ai-model';
import { aisByCategory, findAiBySlug } from './data/ais';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  private readonly router = inject(Router);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  /** Un desplegable por categoría, cada uno con sus IAs. */
  protected readonly groups = aisByCategory();

  /** Categoría cuyo desplegable está abierto (solo uno a la vez). */
  protected readonly openCategory = signal<AiCategory | null>(null);

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  /** Categoría de la IA que se está viendo, para resaltar su botón en el menú. */
  protected readonly activeCategory = computed(() => {
    const slug = /^\/ia\/([^/?#]+)/.exec(this.url())?.[1];
    return findAiBySlug(slug)?.category ?? null;
  });

  constructor() {
    // Al cambiar de página, se cierra el desplegable.
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.closeMenu());
  }

  toggle(category: AiCategory): void {
    this.openCategory.update((open) => (open === category ? null : category));
  }

  closeMenu(): void {
    this.openCategory.set(null);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  /** Clic fuera del menú → se cierra. */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const nav = this.host.nativeElement.querySelector('.nav');
    if (nav && !nav.contains(event.target as Node)) this.closeMenu();
  }
}
