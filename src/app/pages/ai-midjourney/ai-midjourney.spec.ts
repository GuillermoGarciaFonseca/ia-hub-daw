import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiMidjourney } from './ai-midjourney';

describe('AiMidjourney', () => {
  let component: AiMidjourney;
  let fixture: ComponentFixture<AiMidjourney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiMidjourney]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiMidjourney);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
