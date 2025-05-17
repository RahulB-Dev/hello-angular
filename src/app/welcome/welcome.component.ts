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
    console.log ('Name:', this.name);
    console.log ('Email:', this.email)
    alert(`Thank you ${this.name}, we will contact you at ${this.email}`);
  }
}
