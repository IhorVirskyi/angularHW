import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../model';
import { GamesService } from '../services/games-service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  public games: Game[] = [];
  constructor(
    private readonly gamesService: GamesService
  ) { }

  ngOnInit(): void {
    this.gamesService.getAll().subscribe(x => {
      this.games = x;
    })
  }
}
