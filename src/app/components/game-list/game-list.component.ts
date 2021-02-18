import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'gs-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  public games: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(value => this.games = value);
  }
}
