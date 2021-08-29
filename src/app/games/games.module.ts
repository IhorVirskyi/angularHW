import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameDetailComponent } from './game-detail/game-detail.component';
import { GamesListComponent } from './games-list/games-list.component';

@NgModule({
  declarations: [GameDetailComponent, GamesListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GameDetailComponent,
    GamesListComponent
  ]
})
export class GamesModule { }
