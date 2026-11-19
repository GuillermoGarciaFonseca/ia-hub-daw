import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, RouterModule } from '@angular/router';
import { of } from 'rxjs';

import { PromptBuilder } from '../../components/prompt-builder/prompt-builder';
import { findAiBySlug } from '../../data/ais';
import { AiDetail, formatReviewDate } from './ai-detail';

async function render(slug: string) {
  await TestBed.configureTestingModule({
    imports: [RouterModule.forRoot([])],
    declarations: [AiDetail, PromptBuilder],
    providers: [{ provide: ActivatedRoute, useValue: { paramMap: of(convertToParamMap({ slug })) } }],
  }).compileComponents();

  const fixture = TestBed.createComponent(AiDetail);
  await fixture.whenStable();
  return fixture.nativeElement as HTMLElement;
}

describe('AiDetail', () => {
  it('should render the AI title and one card per section', async () => {
    const el = await render('claude');
    const claude = findAiBySlug('claude')!;
    expect(el.querySelector('h1')?.textContent).toBe(claude.title);
    expect(el.querySelectorAll('section.card').length).toBe(claude.sections.length);
  });

  it('should show the last review date', async () => {
    const el = await render('claude');
    const claude = findAiBySlug('claude')!;
    const reviewed = el.querySelector('.reviewed');
    expect(reviewed?.textContent).toContain('Última revisión:');
    expect(reviewed?.querySelector('time')?.getAttribute('datetime')).toBe(claude.lastReviewed);
    expect(reviewed?.textContent).toContain(formatReviewDate(claude.lastReviewed));
  });

  it('should render the pros/cons table with one row per pair', async () => {
    const el = await render('chatgpt');
    expect(el.querySelectorAll('table tbody tr').length).toBe(5);
  });

  it('should apply the dark theme and the accent colour', async () => {
    const el = await render('grok');
    const page = el.querySelector('.aiPage') as HTMLElement;
    expect(page.classList).toContain('dark');
    expect(page.style.getPropertyValue('--accent')).toBe('#ff2bd6');
  });

  it('should render the interactive prompt builder for Midjourney', async () => {
    const el = await render('midjourney');
    expect(el.querySelector('app-prompt-builder')).not.toBeNull();
    expect(el.querySelectorAll('.gallery img').length).toBe(3);
  });
});

describe('formatReviewDate', () => {
  it('should format ISO dates in Spanish without timezone shifts', () => {
    expect(formatReviewDate('2026-11-19')).toBe('19 de noviembre de 2026');
    expect(formatReviewDate('2026-01-01')).toBe('1 de enero de 2026');
  });
});
