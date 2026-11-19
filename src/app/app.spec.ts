import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { App } from './app';
import { AIS } from './data/ais';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show a menu link for every AI', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const links = (fixture.nativeElement as HTMLElement).querySelectorAll('.nav a');
    // "Home" + una entrada por IA
    expect(links.length).toBe(AIS.length + 1);
    expect(links[1].getAttribute('href')).toBe(`/ia/${AIS[0].slug}`);
  });
});
