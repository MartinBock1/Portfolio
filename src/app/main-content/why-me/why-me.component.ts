import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
    selector: 'app-why-me',
    imports: [CommonModule, TranslatePipe],
    templateUrl: './why-me.component.html',
    styleUrls: ['./why-me.component.scss']
})
export class WhyMeComponent implements OnInit {
  // showLocateIcon = true;
  currentState = 0; // 0: Locate, 1: Remote, 2: Suitcase

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    setInterval(() => {
      // this.showLocateIcon = !this.showLocateIcon;
      this.currentState = (this.currentState + 1) % 3; // We cycle through 3 states (0, 1, 2)
    }, 12000);
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  // get typewriterText() {
  //   return this.showLocateIcon ? 'why_me.location' : 'why_me.remote';
  // }
  get typewriterText() {
    switch (this.currentState) {
      case 0:
        return 'why_me.location';
      case 1:
        return 'why_me.remote';
      case 2:
        return 'why_me.suitcase';
      default:
        return '';
    }
  }

  get iconSrc() {
    switch (this.currentState) {
      case 0:
        return 'assets/img/icons/locate_icon.svg';
      case 1:
        return 'assets/img/icons/remote_icon.svg';
      case 2:
        return 'assets/img/icons/suitcase_icon.svg';
      default:
        return '';
    }
  }
}