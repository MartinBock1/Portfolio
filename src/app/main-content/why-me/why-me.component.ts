// import { Component } from '@angular/core';
// import {
//   TranslateDirective,
//   TranslatePipe,
//   TranslateService,
// } from '@ngx-translate/core';

// @Component({
//   selector: 'app-why-me',
//   standalone: true,
//   imports: [TranslatePipe],

//   templateUrl: './why-me.component.html',
//   styleUrl: './why-me.component.scss',
// })
// export class WhyMeComponent {
//   constructor(private translate: TranslateService) {}
//   changeLanguage(language: string) {
//     this.translate.use(language);
//   }
// }

// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { TranslatePipe, TranslateService } from '@ngx-translate/core';

// @Component({
//   selector: 'app-why-me',
//   standalone: true,
//   imports: [CommonModule, TranslatePipe],
//   templateUrl: './why-me.component.html',
//   styleUrls: ['./why-me.component.scss'],
// })
// export class WhyMeComponent implements OnInit {
//   showLocateIcon = true;

//   constructor(private translate: TranslateService) {}

//   ngOnInit() {
//     // Setze ein Intervall, um die Variable regelmäßig zu ändern (alle 3 Sekunden)
//     setInterval(() => {
//       this.showLocateIcon = !this.showLocateIcon;
//     }, 3000); // Wechsel alle 3 Sekunden
//   }

//   changeLanguage(language: string) {
//     this.translate.use(language);
//   }
// }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './why-me.component.html',
  styleUrls: ['./why-me.component.scss'],
})
export class WhyMeComponent implements OnInit {
  showLocateIcon = true;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    setInterval(() => {
      this.showLocateIcon = !this.showLocateIcon;
    }, 8000);
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  get typewriterText() {
    return this.showLocateIcon ? 'why_me.location' : 'why_me.remote';
  }
}
