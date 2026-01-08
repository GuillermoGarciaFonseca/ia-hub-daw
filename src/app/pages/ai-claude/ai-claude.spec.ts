import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiClaude } from './ai-claude';

describe('AiClaude', () => {
  let component: AiClaude;
  let fixture: ComponentFixture<AiClaude>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiClaude]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiClaude);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
