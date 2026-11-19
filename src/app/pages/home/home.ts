import { Component } from '@angular/core';

import { AIS } from '../../data/ais';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly ais = AIS;
}
