import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ViewContactsComponent } from './contacts/view-contacts/view-contacts.component';
export const routes: Routes = [
    { path : '', component : HomeComponent },
    { path : 'about', component : AboutComponent },
    { path : 'welcome', component : WelcomeComponent},
    { path : 'users', component : UsersListComponent },
    { path : 'add-contact', component : AddContactComponent },
    { path : 'view-contacts', component : ViewContactsComponent },
    {path: '', redirectTo: 'home', pathMatch: 'full' }
];
