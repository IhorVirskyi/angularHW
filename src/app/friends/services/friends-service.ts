import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {filter} from 'rxjs/operators';

import { mockPeople } from 'src/app/games/mock-friends';
import { User } from 'src/app/games/model';

@Injectable({providedIn: 'root'})
export class FriendsService {
    constructor() { }

    removeFriend(id: number) {
        console.log("removed friend with id " + id);
    }
}