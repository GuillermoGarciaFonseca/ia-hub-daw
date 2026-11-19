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

  it('should find AIs by slug', () => {
    expect(findAiBySlug('claude')?.name).toBe('Claude');
    expect(findAiBySlug('no-existe')).toBeUndefined();
    expect(findAiBySlug(null)).toBeUndefined();
  });
});
