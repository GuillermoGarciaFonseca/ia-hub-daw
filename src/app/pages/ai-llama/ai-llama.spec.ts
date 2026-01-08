import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiLlama } from './ai-llama';

describe('AiLlama', () => {
  let component: AiLlama;
  let fixture: ComponentFixture<AiLlama>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiLlama]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiLlama);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
