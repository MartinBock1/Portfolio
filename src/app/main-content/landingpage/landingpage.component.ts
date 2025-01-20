import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent {
  respMenuClosed: boolean = true;

  toggleRespMenu(): void {
    this.respMenuClosed = !this.respMenuClosed;
  }
}
