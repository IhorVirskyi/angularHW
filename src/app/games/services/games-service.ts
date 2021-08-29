import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth-service';
import { mockGames } from '../mock-games';
import { Game, UserGame } from '../model';

@Injectable({providedIn: 'root'})
export class GamesService {
    constructor(private firestore: AngularFirestore, private authService: AuthService) { }
    
    getAll(): Observable<Game[]> {
        return this.firestore.collection<Game>('games').valueChanges({idField: "uid"}).pipe(
            tap(x => console.log(x))
        )
    }
    
}