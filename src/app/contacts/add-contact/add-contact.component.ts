import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  name ='';
  email = '';
  message = '';

  constructor(private contactService: ContactService) {}
  submitForm() {
    const newContact = { name : this.name, email: this.email };
    
    this.contactService.addContact(newContact).subscribe({
      next: (response) => {
        this.message = `Contact ${this.name} added successfully!`;
        alert(this.message);
        this.name = '';
        this.email = '';
      },
      error: () => {
        this.message = 'Failed to add contact. Please try again.';
        alert(this.message);
      }
    });
  }

}
