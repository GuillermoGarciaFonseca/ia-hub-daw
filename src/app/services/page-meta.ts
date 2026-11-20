import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface PageMetaData {
  /** Título de la pestaña (y de Open Graph). */
  title: string;
  /** Una frase que resume la página (buscadores y vista previa al compartir). */
  description: string;
  /** Ruta de la página, por ejemplo `/ia/claude`. */
  path: string;
  /** Imagen para la vista previa al compartir (ruta dentro de `public/`). */
  image?: string;
}

/** Metadatos por página: título, descripción, Open Graph y enlace canónico. */
@Injectable({ providedIn: 'root' })
export class PageMeta {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  set(data: PageMetaData): void {
    const origin = this.document.location?.origin ?? '';
    const url = origin + data.path;

    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'IA Hub' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_ES' });
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ name: 'twitter:card', content: data.image ? 'summary_large_image' : 'summary' });
    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: origin + data.image });
    } else {
      this.meta.removeTag("property='og:image'");
    }

    let canonical = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }
    canonical.href = url;
  }
}
