import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiGrok } from './ai-grok';

describe('AiGrok', () => {
  let component: AiGrok;
  let fixture: ComponentFixture<AiGrok>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiGrok]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiGrok);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
