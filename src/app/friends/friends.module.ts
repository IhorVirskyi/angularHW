import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchFriendsComponent } from './search-friends/search-friends.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { FriendDetailComponent } from './friend-detail/friend-detail.component';
import { FriendsPageComponent } from './friends-page/friends-page.component';



@NgModule({
  declarations: [
    SearchFriendsComponent,
    FriendsListComponent,
    FriendDetailComponent,
    FriendsPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchFriendsComponent,
    FriendsListComponent
  ]
})
export class FriendsModule { }
