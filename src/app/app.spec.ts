import { TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';

import { App } from './app';
import { AIS, aisByCategory } from './data/ais';
import { Component } from '@angular/core';

@Component({ template: '' })
class Blank {}

async function setup() {
  await TestBed.configureTestingModule({
    imports: [
      RouterModule.forRoot([
        { path: '', component: Blank },
        { path: 'ia/:slug', component: Blank },
      ]),
      Blank,
    ],
    declarations: [App],
  }).compileComponents();

  const fixture = TestBed.createComponent(App);
  await fixture.whenStable();
  const el = fixture.nativeElement as HTMLElement;
  const buttons = () => Array.from(el.querySelectorAll<HTMLButtonElement>('.dropBtn'));
  const render = async () => {
    fixture.detectChanges();
    await fixture.whenStable();
  };
  return { fixture, el, buttons, render };
}

describe('App', () => {
  it('should create the app', async () => {
    const { fixture } = await setup();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show one dropdown per category instead of one link per AI', async () => {
    const { el, buttons } = await setup();
    const groups = aisByCategory();
    expect(buttons().length).toBe(groups.length);
    expect(buttons().map((b) => b.textContent)).toEqual(
      groups.map((g) => expect.stringContaining(g.category)),
    );
    // Cerrados por defecto: solo se ve "Home".
    expect(el.querySelectorAll('.menu').length).toBe(0);
    expect(el.querySelectorAll('.nav a').length).toBe(1);
  });

  it('should list every AI exactly once across the dropdowns', async () => {
    const { el, buttons, render } = await setup();
    const slugs: string[] = [];
    for (const button of buttons()) {
      button.click();
      await render();
      el.querySelectorAll('.menu a[href^="/ia/"]').forEach((a) => slugs.push(a.getAttribute('href')!));
    }
    expect(slugs.sort()).toEqual(AIS.map((ai) => `/ia/${ai.slug}`).sort());
  });

  it('should open one dropdown at a time and toggle aria-expanded', async () => {
    const { el, buttons, render } = await setup();
    const [first, second] = buttons();

    first.click();
    await render();
    expect(first.getAttribute('aria-expanded')).toBe('true');
    expect(el.querySelectorAll('.menu').length).toBe(1);

    second.click();
    await render();
    expect(first.getAttribute('aria-expanded')).toBe('false');
    expect(second.getAttribute('aria-expanded')).toBe('true');
    expect(el.querySelectorAll('.menu').length).toBe(1);

    second.click();
    await render();
    expect(el.querySelectorAll('.menu').length).toBe(0);
  });

  it('should close the dropdown with Escape and when clicking outside', async () => {
    const { el, buttons, render } = await setup();

    buttons()[0].click();
    await render();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await render();
    expect(el.querySelectorAll('.menu').length).toBe(0);

    buttons()[0].click();
    await render();
    document.body.click();
    await render();
    expect(el.querySelectorAll('.menu').length).toBe(0);
  });

  it('should link each dropdown to the filtered home page', async () => {
    const { el, buttons, render } = await setup();
    buttons()[0].click();
    await render();
    const seeAll = el.querySelector('.menu .seeAll a')!;
    expect(seeAll.getAttribute('href')).toBe(`/?categoria=${encodeURIComponent(aisByCategory()[0].category)}`);
  });

  it('should close the menu and highlight the category after navigating to an AI', async () => {
    const { el, buttons, render } = await setup();
    const target = AIS.find((ai) => ai.category === 'Audio')!;

    buttons()[0].click();
    await render();
    await TestBed.inject(Router).navigateByUrl(`/ia/${target.slug}`);
    await render();

    expect(el.querySelectorAll('.menu').length).toBe(0);
    const active = el.querySelector('.dropBtn.active');
    expect(active?.textContent).toContain('Audio');
  });
});
