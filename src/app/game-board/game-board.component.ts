import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { CharacterUI } from '../models/character-models';
import { Observer, PartialObserver } from 'rxjs';
import { FlexLayoutModule } from '@angular/flex-Layout'

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  cardSet: CharacterUI[] = [];
  cardPool: CharacterUI[] = [];
  spentCards: CharacterUI[] = [];

  resetOpen = false;

  constructor(private _gameService: GameService) { }

  ngOnInit() {
    this._gameService.loadCardSet('normal');
    this._gameService.getCardSet().subscribe({next: cardSet => this.cardSet = cardSet});
    this._gameService.getCardPool().subscribe({next: cardPool => this.cardPool = cardPool});
    this._gameService.getSpentCards().subscribe({next: spentCards => this.spentCards = spentCards});
  }

  playCard(card: CharacterUI) {
    this._gameService.playCharacter(card);
  }

  unPlayCard(card: CharacterUI) {
    this._gameService.unPlayCharacter(card);
  }

  toggleReset() {
    this.resetOpen = !this.resetOpen;
  }

  newGame() {
    this._gameService.newGame();
    this.resetOpen = false;
    this._gameService.getCardSet().subscribe({next: cardSet => this.cardSet = cardSet});
    this._gameService.getCardPool().subscribe({next: cardPool => this.cardPool = cardPool});
    this._gameService.getSpentCards().subscribe({next: spentCards => this.spentCards = spentCards});
  }

}
