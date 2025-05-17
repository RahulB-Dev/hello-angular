import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  template: `<h1>Angular Routing App</h1>
  <nav>
    <a routerLink="/">Home</a> |
    <a routerLink="/about">About</a> |
    <a routerLink="/welcome">Welcome</a> |
    <a routerLink="/users">Users</a> |
    <a routerLink="/add-contact">Add Contact</a> |
    <a routerLink="/view-contacts">View Contacts</a>

    </nav>
    <hr>
    <router-outlet></router-outlet>`,
  styles: [`
    nav a {
      margin: 0 10px;
      text-decoration: none;
    }
  `]
})
export class AppComponent {
  title = 'My First Angular App';
  message = 'Angular is awesome!';
}
