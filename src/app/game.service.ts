import { Injectable } from '@angular/core';
import { CharacterUI, CharacterMetaInfo } from './models/character-models';
import { Observable, of } from 'rxjs';
import * as _ from 'lodash';
import gameTypes from '../assets/gameTypes.json';
import { from } from 'rxjs';

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
    const foundCard = this.cardPool.find( card => card === character);
    if (foundCard) {
      this.spentCards.push(this.cardPool.splice(this.cardPool.indexOf(foundCard),1)[0]);
      this.spentCards.sort(compareCharacterRank);
      return true;
    }
    return false;
  }

  unPlayCharacter(character: CharacterUI) {
    const foundCard = this.spentCards.find( card => card === character);
    if (foundCard) {
      this.cardPool.push(this.spentCards.splice(this.spentCards.indexOf(foundCard),1)[0]);
      this.cardPool.sort(compareCharacterRank);
      return true;
    }
    return false;
  }

  loadCardSet(gameType: string) {
    this.cardSet = [];
    const list: CharacterMetaInfo[] = gameTypes[gameType];

    list.forEach( characterInfo => {
      for (var i = 0; i < characterInfo.quantity; i++) {
        this.cardSet.push(characterInfo.character);
        this.cardSet.sort(compareCharacterRank);
      }
    });

    this.cardPool = this.cardSet;
  }

  getCardPool(): Observable<CharacterUI[]> {
    return of(this.cardPool);
  }

  getCardSet(): Observable<CharacterUI[]> {
    return of(this.cardSet);
  }

  getSpentCards(): Observable<CharacterUI[]> {
    return of(this.spentCards);
  }
}

function compareCharacterRank(a: CharacterUI, b: CharacterUI) {
  return (a.rank >= b.rank) ? 1 : -1;
}
