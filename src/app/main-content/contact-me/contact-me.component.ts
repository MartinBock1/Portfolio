import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe, RouterLink],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  isChecked = false;
  isSubmitted = false;
  mailTest = false;
  isSuccessMessageVisible = false;

  constructor(private translate: TranslateService) {}

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  http = inject(HttpClient);
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://www.martin-bock.info/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.isSubmitted = true;  

    if (ngForm.submitted && ngForm.form.valid && this.isChecked) {
      //&& !this.mailTest
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // Formulardaten zurücksetzen
            ngForm.resetForm();
            this.isChecked = false;
            this.isSubmitted = false;

            // Erfolgsnachricht anzeigen
            this.isSuccessMessageVisible = true;

            // Erfolgsnachricht nach 5 Sekunden ausblenden
            setTimeout(() => {
              this.isSuccessMessageVisible = false;
            }, 5000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
      //  } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      //    ngForm.resetForm();
    }
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
  
