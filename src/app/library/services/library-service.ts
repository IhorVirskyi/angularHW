import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth-service';
import { Game } from 'src/app/games/model';

@Injectable({providedIn: 'root'})
export class LibraryService {
    constructor(private firestore: AngularFirestore, private authService: AuthService) { 

    }
    
    getAll(): Observable<Game[]> {
        return this.firestore.collection<Game>(`users/${this.authService.userData.uid}/games`)
        .valueChanges({idField: "uid"})
        .pipe(
            tap(x => console.log(x))
        )
    }

    addGameToLibrary(game: Game) {
    }
}