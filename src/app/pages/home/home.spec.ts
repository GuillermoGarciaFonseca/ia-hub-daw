import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

import { AIS, aisByCategory } from '../../data/ais';
import { Home, parseCategory } from './home';

@Component({ template: '<router-outlet />', imports: [RouterOutlet] })
class Host {}

async function setup(url = '/') {
  await TestBed.configureTestingModule({
    imports: [RouterModule.forRoot([{ path: '', component: Home }]), Host],
    declarations: [Home],
  }).compileComponents();

  const fixture = TestBed.createComponent(Host);
  await TestBed.inject(Router).navigateByUrl(url);
  await fixture.whenStable();
  fixture.detectChanges();
  const el = fixture.nativeElement as HTMLElement;
  const render = async () => {
    await fixture.whenStable();
    fixture.detectChanges();
  };
  const cards = () => Array.from(el.querySelectorAll('a.card'));
  const filters = () => Array.from(el.querySelectorAll<HTMLButtonElement>('.filter'));
  return { el, render, cards, filters };
}

describe('Home', () => {
  it('should render one card per AI, generated from the data', async () => {
    const { cards } = await setup();
    expect(cards().length).toBe(AIS.length);
    expect(cards()[0].textContent).toContain(AIS[0].name);
    expect(cards()[0].getAttribute('href')).toBe(`/ia/${AIS[0].slug}`);
  });

  it('should not hardcode the number of AIs in the intro', async () => {
    const { el } = await setup();
    expect(el.querySelector('.hero p')?.textContent).toContain(`${AIS.length} IAs`);
  });

  it('should describe Copilot as Microsoft 365 Copilot in its card', async () => {
    const { cards } = await setup();
    const copilot = cards().find((c) => c.getAttribute('href') === '/ia/copilot')!;
    expect(copilot.textContent).not.toContain('IDE');
    expect(copilot.textContent).toContain('Word');
  });

  it('should show "Todas" plus one filter button per category, with counts', async () => {
    const { filters } = await setup();
    const groups = aisByCategory();
    expect(filters().length).toBe(groups.length + 1);
    expect(filters()[0].textContent).toContain('Todas');
    expect(filters()[0].getAttribute('aria-pressed')).toBe('true');
    groups.forEach((g, i) => {
      expect(filters()[i + 1].textContent).toContain(g.category);
      expect(filters()[i + 1].textContent).toContain(String(g.ais.length));
    });
  });

  it('should filter the cards by category and reset with "Todas"', async () => {
    const { render, cards, filters } = await setup();
    const imagen = filters().find((b) => b.textContent?.includes('Imagen'))!;

    imagen.click();
    await render();
    const expected = AIS.filter((ai) => ai.category === 'Imagen');
    expect(cards().map((c) => c.getAttribute('href'))).toEqual(expected.map((ai) => `/ia/${ai.slug}`));
    expect(imagen.getAttribute('aria-pressed')).toBe('true');
    expect(TestBed.inject(Router).url).toBe('/?categoria=Imagen');

    filters()[0].click();
    await render();
    expect(cards().length).toBe(AIS.length);
    expect(TestBed.inject(Router).url).toBe('/');
  });

  it('should read the category from the URL (links from the menu)', async () => {
    const { cards, el } = await setup('/?categoria=Audio');
    const audio = AIS.filter((ai) => ai.category === 'Audio');
    expect(cards().length).toBe(audio.length);
    expect(el.querySelector('.resultCount')?.textContent).toContain(`Mostrando ${audio.length} de ${AIS.length}`);
  });

  it('should ignore unknown categories in the URL', async () => {
    const { cards } = await setup('/?categoria=NoExiste');
    expect(cards().length).toBe(AIS.length);
  });
});

describe('parseCategory', () => {
  it('should accept only known categories', () => {
    expect(parseCategory('Vídeo')).toBe('Vídeo');
    expect(parseCategory('video')).toBeNull();
    expect(parseCategory(null)).toBeNull();
    expect(parseCategory(undefined)).toBeNull();
  });
});
