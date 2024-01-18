import { Component } from '@angular/core';
import { GameListComponent } from '../game-list/game-list.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GameListComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  logedIn = true;
}
