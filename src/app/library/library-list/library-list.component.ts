import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/games/model';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {
  @Input() games: Array<Game> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
