import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiChatgpt } from './ai-chatgpt';

describe('AiChatgpt', () => {
  let component: AiChatgpt;
  let fixture: ComponentFixture<AiChatgpt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiChatgpt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiChatgpt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
