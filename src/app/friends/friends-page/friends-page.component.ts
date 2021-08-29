import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/games/model';
import { FriendsService } from '../services/friends-service';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})
export class FriendsPageComponent implements OnInit {
  public friends: User[] = [];

  constructor(private readonly friendsService: FriendsService) { }

  ngOnInit(): void {

  }

  searchPeople(searchStr: string): void {

  }

  removeFriend(id: number): void {
    this.friendsService.removeFriend(id);
  }
}
