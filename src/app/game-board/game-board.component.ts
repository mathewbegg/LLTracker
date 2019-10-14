import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { CharacterUI } from '../models/character-models';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  

  constructor(private _gameService: GameService) { }

  ngOnInit() {
    this._gameService.loadCardSet('normal');
  }

}
