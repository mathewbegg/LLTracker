import { Injectable } from '@angular/core';
import { CharacterUI, CharacterMetaInfo } from './models/character-models';
import * as _ from 'lodash';
import gameTypes from '../assets/gameTypes.json';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  cardSet: CharacterUI[] = [];
  cardPool: CharacterUI[] = [];
  spentCards: CharacterUI[] = [];

  constructor() { }

  newGame() {
    this.cardPool = this.cardSet;
    this.spentCards = [];
  }

  playCharacter(character: CharacterUI) {
    let found = false;
    this.cardPool.forEach( card => {
      if (card === character) {
        this.spentCards.push(this.cardPool.splice(this.cardPool.indexOf(card), 1)[0]); //move character from cardPool to spentCards
        found = true;
        return;
      }
    });
    return found;
  }

  loadCardSet(gameType: string) {
    this.cardSet = [];
    const list: CharacterMetaInfo[] = gameTypes[gameType];

    list.forEach( characterInfo => {
      for (var i = 0; i < characterInfo.quantity; i++) {
        this.cardSet.push(characterInfo.character);
      }
    });

    this.cardPool = this.cardSet;
  }
}
