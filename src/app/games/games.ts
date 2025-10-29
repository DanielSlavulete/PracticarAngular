import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  template: `
  <p>LOS JUEGOS FAVORITOS DE {{username}}</p>
    <ul>
      @for (game of games; track game.id) {
        <li>{{game.name}}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class Games {
  @Input() username = '';
  games = [
    {
      id: 1,
      name: "God of War"
    },
    {
      id: 2,
      name: "League of Legends"
    },
    {
      id: 3,
      name: "Escape From Tarkov"
    }
  ]
}
