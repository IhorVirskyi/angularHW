import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/games/model';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.component.html',
  styleUrls: ['./friend-detail.component.css']
})
export class FriendDetailComponent implements OnInit {
  @Input() friend!: User;

  @Output() onFriendRemoved = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeFriend() {
    this.onFriendRemoved.emit(this.friend.uid);
  }
}
