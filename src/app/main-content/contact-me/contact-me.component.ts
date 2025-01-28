import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  constructor(private translate: TranslateService) {}
  changeLanguage(language: string) {
    this.translate.use(language);
  }

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(NgForm: NgForm) {
    if(NgForm.valid && NgForm.submitted) {
      console.log(this.contactData);
    }
  }
}
  
