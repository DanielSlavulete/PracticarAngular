import { Component } from '@angular/core';
import { Games } from "../games/games";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [Games],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  username = 'Daniel';
  FechaNacimiento = '29/08/2004';
  isLoggedIn = false;

  greet(){
    alert("hola, soy " + this.username);
  }
}
