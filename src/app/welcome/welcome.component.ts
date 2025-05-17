import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  imports: [FormsModule,HttpClientModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  name: string = '';
  email: string = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    const formData = {
      name: this.name,
      email: this.email
    };

    this.http.post('https://example.com/api/submit', formData)
      .subscribe(response => {
        console.log('Form submitted successfully', response);
        alert(`Thank you ${this.name}, your form has been submitted!`);
      })
  }
}
