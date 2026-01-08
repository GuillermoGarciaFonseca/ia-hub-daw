import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiMistral } from './ai-mistral';

describe('AiMistral', () => {
  let component: AiMistral;
  let fixture: ComponentFixture<AiMistral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiMistral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiMistral);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
