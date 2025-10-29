import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Games } from "./games/games";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [User, Games],
  templateUrl: './app.html',
  styleUrl: './app.scss'

})
export class App {
  city = 'Madrid...';
}
