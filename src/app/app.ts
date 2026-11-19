import { Component } from '@angular/core';

import { AIS } from './data/ais';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  protected readonly ais = AIS;
}
