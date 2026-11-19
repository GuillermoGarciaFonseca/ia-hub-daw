import { TestBed } from '@angular/core/testing';

import { PromptBuilderConfig, PromptBuilderSection } from '../../data/ai-model';
import { MIDJOURNEY } from '../../data/ais/midjourney';
import { PromptBuilder } from './prompt-builder';

const config: PromptBuilderConfig = (
  MIDJOURNEY.sections.find((s) => s.type === 'promptBuilder') as PromptBuilderSection
).config;

async function create() {
  await TestBed.configureTestingModule({ declarations: [PromptBuilder] }).compileComponents();
  const fixture = TestBed.createComponent(PromptBuilder);
  fixture.componentRef.setInput('config', config);
  await fixture.whenStable();
  return fixture.componentInstance;
}

describe('PromptBuilder', () => {
  it('should build the prompt from the default config', async () => {
    const pb = await create();
    expect(pb.builtPrompt()).toBe(
      `/imagine prompt: ${config.defaultSubject}, cinematic lighting, film still, depth of field, volumetric light --ar 16:9 --stylize 150 --chaos 10`,
    );
  });

  it('should keep stylize and chaos inside their limits', async () => {
    const pb = await create();
    for (let i = 0; i < 20; i++) pb.changeStylize(100);
    expect(pb.stylize()).toBe(config.stylize.max);
    for (let i = 0; i < 20; i++) pb.changeChaos(-5);
    expect(pb.chaos()).toBe(config.chaos.min);
  });

  it('should add and remove the seed', async () => {
    const pb = await create();
    pb.randomSeed();
    expect(pb.builtPrompt()).toMatch(/--seed \d+$/);
    pb.clearSeed();
    expect(pb.builtPrompt()).not.toContain('--seed');
  });

  it('should change style and aspect ratio', async () => {
    const pb = await create();
    pb.selectedStyle.set('anime');
    pb.selectedAr.set('9:16');
    expect(pb.builtPrompt()).toContain('anime style');
    expect(pb.builtPrompt()).toContain('--ar 9:16');
  });
});
