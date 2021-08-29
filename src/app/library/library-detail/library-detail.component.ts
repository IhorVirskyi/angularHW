import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/games/model';

@Component({
  selector: 'app-library-detail',
  templateUrl: './library-detail.component.html',
  styleUrls: ['./library-detail.component.css']
})
export class LibraryDetailComponent implements OnInit {
  @Input() game!: Game;
  constructor() { }

  ngOnInit(): void {
  }

}
