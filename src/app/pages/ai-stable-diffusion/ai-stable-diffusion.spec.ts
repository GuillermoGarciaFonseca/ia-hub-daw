import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiStableDiffusion } from './ai-stable-diffusion';

describe('AiStableDiffusion', () => {
  let component: AiStableDiffusion;
  let fixture: ComponentFixture<AiStableDiffusion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiStableDiffusion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiStableDiffusion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
