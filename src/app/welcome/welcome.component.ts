import { CommonModule, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  name: string = '';
  email: string = '';

  successMessage: string = '';
  errorMessage: string = '';


  constructor(private http: HttpClient) {}

  submitForm() {
    const formData = {
      name: this.name,
      email: this.email
    };

    this.http.post('https://example.com/api/submit', formData)
      .subscribe({
        next: (response) => {
          alert (this.successMessage = `Thank you, ${this.name}! Your form has been submitted successfully.`);
          this.errorMessage = '';
        },
        error: (error) => {
          alert(this.errorMessage = `There was an error submitting your form. Please try again.`);
          this.successMessage = '';
          console.error('Error occured:', error);
        }
      });
  }
}
