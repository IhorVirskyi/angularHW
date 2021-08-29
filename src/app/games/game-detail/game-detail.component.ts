import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../model';
import { GamesService } from '../services/games-service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  @Input() game!: Game;
  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
  }

  addGameToLibrary() {
  }
}
