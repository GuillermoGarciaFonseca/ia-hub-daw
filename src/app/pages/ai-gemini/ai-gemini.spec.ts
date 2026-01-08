import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiGemini } from './ai-gemini';

describe('AiGemini', () => {
  let component: AiGemini;
  let fixture: ComponentFixture<AiGemini>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiGemini]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiGemini);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
