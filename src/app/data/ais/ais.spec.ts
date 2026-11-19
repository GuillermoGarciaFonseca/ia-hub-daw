import { AI_CATEGORIES } from '../ai-model';
import { AIS, aisByCategory, findAiBySlug } from './index';

describe('AI data', () => {
  it('should have unique slugs', () => {
    const slugs = AIS.map((ai) => ai.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('should use URL-safe slugs', () => {
    for (const ai of AIS) {
      expect(ai.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it('should give every AI the basics', () => {
    for (const ai of AIS) {
      expect(ai.name.trim(), ai.slug).not.toBe('');
      expect(ai.summary.trim(), ai.slug).not.toBe('');
      expect(ai.sections.length, ai.slug).toBeGreaterThan(0);
      expect(ai.theme.accent, ai.slug).toMatch(/^#[0-9a-f]{6}$/i);
    }
  });

  it('should only use absolute https links', () => {
    for (const ai of AIS) {
      for (const section of ai.sections) {
        const links = [
          ...(section.buttons ?? []),
          ...(section.type === 'cards' ? section.cards.flatMap((c) => c.links ?? []) : []),
        ];
        for (const link of links) {
          expect(link.url, `${ai.slug}: ${link.label}`).toMatch(/^https:\/\//);
        }
      }
    }
  });

  it('should give every AI a valid lastReviewed date that is not in the future', () => {
    for (const ai of AIS) {
      expect(ai.lastReviewed, ai.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      const date = new Date(`${ai.lastReviewed}T00:00:00Z`);
      expect(Number.isNaN(date.getTime()), ai.slug).toBe(false);
      expect(date.toISOString().slice(0, 10), ai.slug).toBe(ai.lastReviewed);
      expect(date.getTime(), ai.slug).toBeLessThanOrEqual(Date.now());
    }
  });

  it('should never leave a plan without price info', () => {
    for (const ai of AIS) {
      for (const section of ai.sections) {
        if (section.type !== 'plans') continue;
        for (const plan of section.plans) {
          expect(plan.price?.trim(), `${ai.slug}: ${plan.tier}`).toBeTruthy();
        }
        // Si algún precio remite a la web oficial, la sección tiene que enlazarla.
        if (section.plans.some((plan) => plan.price === 'Consultar web oficial')) {
          expect(section.buttons?.length, `${ai.slug}: ${section.title}`).toBeGreaterThan(0);
        }
      }
    }
  });

  it('should describe Copilot as Microsoft 365 Copilot, not the IDE assistant', () => {
    const copilot = findAiBySlug('copilot')!;
    expect(copilot.title).toContain('Microsoft 365');
    expect(copilot.summary).not.toMatch(/IDE|autocompletado/i);
    expect(copilot.category).not.toBe('Código');
  });

  it('should include the 10 new AIs of phase 3 (20 in total)', () => {
    const nuevas = ['deepseek', 'qwen', 'gemini-notebook', 'cursor', 'ideogram', 'flux', 'runway', 'kling', 'elevenlabs', 'suno'];
    for (const slug of nuevas) {
      expect(findAiBySlug(slug), slug).toBeDefined();
    }
    expect(AIS.length).toBe(20);
  });

  it('should only use the existing section types in the new AIs', () => {
    const allowed = ['prosCons', 'cards', 'prompts', 'plans', 'keyValues', 'gallery'];
    for (const slug of ['deepseek', 'qwen', 'gemini-notebook', 'cursor', 'ideogram', 'flux', 'runway', 'kling', 'elevenlabs', 'suno']) {
      const ai = findAiBySlug(slug)!;
      expect(ai.theme.mode, slug).toMatch(/^(light|dark)$/);
      for (const section of ai.sections) {
        expect(allowed, `${slug}: ${section.title}`).toContain(section.type);
      }
      // Todas empiezan con ventajas/desventajas y tienen planes, como el resto del hub.
      expect(ai.sections[0].type, slug).toBe('prosCons');
      expect(ai.sections.some((s) => s.type === 'plans'), slug).toBe(true);
    }
  });

  it('should give each AI its own accent colour', () => {
    const accents = AIS.map((ai) => ai.theme.accent.toLowerCase());
    const repeated = accents.filter((a, i) => accents.indexOf(a) !== i);
    // Midjourney y Stable Diffusion ya compartían color antes de la fase 3.
    expect(repeated).toEqual(['#a855f7']);
  });

  it('should only use known categories, and every category should have AIs', () => {
    for (const ai of AIS) {
      expect(AI_CATEGORIES, ai.slug).toContain(ai.category);
    }
    expect(aisByCategory().map((g) => g.category)).toEqual([...AI_CATEGORIES]);
  });

  it('should group AIs by category keeping the registry order', () => {
    const groups = aisByCategory();
    expect(groups.flatMap((g) => g.ais)).toHaveLength(AIS.length);
    for (const group of groups) {
      expect(group.ais).toEqual(AIS.filter((ai) => ai.category === group.category));
    }
  });

  it('should find AIs by slug', () => {
    expect(findAiBySlug('claude')?.name).toBe('Claude');
    expect(findAiBySlug('no-existe')).toBeUndefined();
    expect(findAiBySlug(null)).toBeUndefined();
  });
});
