import { Injectable } from '@angular/core';
import { CharacterUI } from './models/character-models';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  cardSet: CharacterUI[] = [];
  cardPool: CharacterUI[] = [];
  spentCards: CharacterUI[] = [];

  constructor() { }

  newGame(cardSet?: CharacterUI[]) {
    if (cardSet) {
      this.setCardSet(cardSet);
    }
    this.cardPool = this.cardSet;
    this.spentCards = [];
  }

  playCharacter(character: CharacterUI) {
    let found = false;
    this.cardPool.forEach( card => {
      if (found) {
        return;
      }
      else if (card === character) {
        this.cardPool.splice(this.cardPool.indexOf(card));
        this.spentCards.push(card);
        found = true;
      }
    });
    return found;
  }

  setCardSet(cardSet: CharacterUI[]) {
   this.cardSet = cardSet;
  }
}
