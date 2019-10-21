import { Component, OnInit, Input } from '@angular/core';
import { CharacterUI } from '../models/character-models';
import { GameService } from '../game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  character: CharacterUI;
  pictureURL: string;

  constructor(private _gameService: GameService) { }

  ngOnInit() {
    this.pictureURL = this._gameService.getPictureURL(this.character);
  }

}
