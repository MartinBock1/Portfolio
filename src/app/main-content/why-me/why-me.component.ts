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
    }, 12000);
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  get typewriterText() {
    return this.showLocateIcon ? 'why_me.location' : 'why_me.remote';
  }
}
