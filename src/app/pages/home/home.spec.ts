import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { AIS } from '../../data/ais';
import { Home } from './home';

describe('Home', () => {
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [Home],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
  });

  it('should render one card per AI, generated from the data', () => {
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('a.card');
    expect(cards.length).toBe(AIS.length);
    expect(cards[0].textContent).toContain(AIS[0].name);
    expect(cards[0].getAttribute('href')).toBe(`/ia/${AIS[0].slug}`);
  });

  it('should describe Copilot as Microsoft 365 Copilot in its card', () => {
    const cards = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('a.card'));
    const copilot = cards.find((c) => c.getAttribute('href') === '/ia/copilot')!;
    expect(copilot.textContent).not.toContain('IDE');
    expect(copilot.textContent).toContain('Word');
  });

  it('should not hardcode the number of AIs in the intro', () => {
    const intro = (fixture.nativeElement as HTMLElement).querySelector('.hero p')?.textContent;
    expect(intro).toContain(`${AIS.length} IAs`);
  });
});
