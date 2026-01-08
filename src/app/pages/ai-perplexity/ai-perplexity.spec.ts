import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPerplexity } from './ai-perplexity';

describe('AiPerplexity', () => {
  let component: AiPerplexity;
  let fixture: ComponentFixture<AiPerplexity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiPerplexity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiPerplexity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
