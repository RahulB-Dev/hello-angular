import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-view-contacts',
  imports: [CommonModule],
  templateUrl: './view-contacts.component.html',
  styleUrl: './view-contacts.component.css'
})
export class ViewContactsComponent {
contacts: any[] = [];
errorMessage = '';

  constructor(private contactService: ContactService) {}
  ngOnInit(): void {
  this.contactService.getContacts().subscribe({
    next: (data) => {
      this.contacts = data;
    },
    error: () => this.errorMessage = 'Failed to load contacts. Please try again.'
  });
  }
}
