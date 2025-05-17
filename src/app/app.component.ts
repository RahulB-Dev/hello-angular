import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<h1>Angular Routing App</h1>
  <nav>
    <a routerLink="/">Home</a> |
    <a routerLink="/about">About</a>
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
