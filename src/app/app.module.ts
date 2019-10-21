import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
