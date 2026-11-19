import { AIS, findAiBySlug } from './index';

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

  it('should find AIs by slug', () => {
    expect(findAiBySlug('claude')?.name).toBe('Claude');
    expect(findAiBySlug('no-existe')).toBeUndefined();
    expect(findAiBySlug(null)).toBeUndefined();
  });
});
