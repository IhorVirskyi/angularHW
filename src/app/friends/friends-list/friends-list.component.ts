import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/games/model';
import { FriendsService } from '../services/friends-service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {
  @Input() friends: User[] = [];
  @Output() onFriendRemoved = new EventEmitter<number>()
  constructor(
    
  ) { }

  ngOnInit(): void {

  }

  removeFriend(id: number) {
    this.onFriendRemoved.emit(id);
  }
}
