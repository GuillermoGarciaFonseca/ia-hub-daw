import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, computed, effect, inject, signal } from '@angular/core';
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

  /**
   * Modo de color de la página que se ve: el de la IA en su ficha, nocturno en la portada.
   * Se pone en <body> para que el fondo detrás del menú sea el mismo que el de la página.
   */
  protected readonly pageMode = computed(() => {
    const slug = /^\/ia\/([^/?#]+)/.exec(this.url())?.[1];
    const ai = findAiBySlug(slug);
    return ai && ai.theme.mode !== 'dark' ? 'dawn' : 'night';
  });

  private readonly document = inject(DOCUMENT);

  constructor() {
    effect(() => {
      this.document.body.dataset['mode'] = this.pageMode();
    });

    // Al cambiar de página: se cierra el desplegable y el foco va al contenido nuevo
    // (para teclado y lectores de pantalla). Si solo cambia ?categoria=, no se mueve el foco.
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        this.closeMenu();
        const path = e.urlAfterRedirects.split(/[?#]/)[0];
        if (this.lastPath !== null && path !== this.lastPath) {
          setTimeout(() => this.host.nativeElement.querySelector<HTMLElement>('#main')?.focus({ preventScroll: true }));
        }
        this.lastPath = path;
      });
  }

  /** Ruta (sin query) de la última navegación, para saber si ha cambiado de página o solo el filtro. */
  private lastPath: string | null = null;

  toggle(category: AiCategory): void {
    this.openCategory.update((open) => (open === category ? null : category));
  }

  closeMenu(): void {
    this.openCategory.set(null);
  }

  /** Escape cierra el desplegable y devuelve el foco a su botón (si no, se perdería al desaparecer el menú). */
  @HostListener('document:keydown.escape')
  onEscape(): void {
    const open = this.openCategory();
    if (!open) return;
    const index = this.groups.findIndex((g) => g.category === open);
    this.closeMenu();
    this.host.nativeElement.querySelectorAll<HTMLButtonElement>('.dropBtn')[index]?.focus();
  }

  /** Clic fuera del menú → se cierra. */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const nav = this.host.nativeElement.querySelector('.nav');
    if (nav && !nav.contains(event.target as Node)) this.closeMenu();
  }
}
