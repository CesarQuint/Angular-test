import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css',
})
export class GameListComponent {
  @Input() listName = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  games = [
    {
      _id: '1',
      name: 'God of war',
      year: '2004',
    },
    {
      _id: '2',
      name: 'God of war 2',
      year: '2007',
    },
    {
      _id: '3',
      name: 'Pacman',
      year: '1992',
    },
    {
      _id: '4',
      name: 'Tetris',
      year: '1978',
    },
  ];

  favGame(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }
}
