import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, RouterModule } from '@angular/router';
import { of } from 'rxjs';

import { PromptBuilder } from '../../components/prompt-builder/prompt-builder';
import { findAiBySlug } from '../../data/ais';
import { ExamplesSection } from '../../data/ai-model';
import { AiDetail, EXAMPLE_KIND_LABELS, formatReviewDate } from './ai-detail';

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

  it('should render a new AI (Suno) with its theme, plans and prompts', async () => {
    const el = await render('suno');
    const suno = findAiBySlug('suno')!;
    const page = el.querySelector('.aiPage') as HTMLElement;
    expect(page.classList).toContain('dark');
    expect(page.style.getPropertyValue('--accent')).toBe(suno.theme.accent);
    expect(el.querySelectorAll('section.card').length).toBe(suno.sections.length);
    expect(el.querySelectorAll('.plan').length).toBe(3);
    // 3 prompts propios + los de los ejemplos reales, que van aparte.
    expect(el.querySelectorAll('.mini:not(.example) .promptBox').length).toBe(3);
  });

  it('should render the real examples with their prompt and official link', async () => {
    const el = await render('runway');
    const section = findAiBySlug('runway')!.sections.find((s) => s.type === 'examples') as ExamplesSection;
    const cards = el.querySelectorAll('.example');
    expect(cards.length).toBe(section.examples.length);
    section.examples.forEach((ex, i) => {
      expect(cards[i].querySelector('h3')?.textContent).toBe(ex.title);
      expect(cards[i].querySelector('.badge')?.textContent).toBe(EXAMPLE_KIND_LABELS[ex.kind]);
      expect(cards[i].querySelector('.promptBox')?.textContent).toBe(ex.prompt);
      expect(cards[i].querySelector('.exampleLabel')?.textContent).toBe('Prompt usado');
      expect(cards[i].querySelector('a.linkItem')?.getAttribute('href')).toBe(ex.source.url);
    });
  });

  it('should flag excerpts and examples without a published prompt', async () => {
    const chatgpt = await render('chatgpt');
    expect(chatgpt.querySelector('.example .exampleLabel')?.textContent).toBe('Prompt usado (fragmento)');

    TestBed.resetTestingModule();
    const kling = await render('kling');
    const card = kling.querySelector('.example')!;
    expect(card.querySelector('.promptBox')).toBeNull();
    expect(card.querySelector('.noPrompt')?.textContent).toContain('no publica el prompt');
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
