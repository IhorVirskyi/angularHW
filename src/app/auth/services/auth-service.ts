import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from "@angular/router";
import { User } from 'src/app/games/model';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    userData: any;

    constructor(
        public afs: AngularFirestore,   
        public afAuth: AngularFireAuth, 
        public router: Router,  
        public ngZone: NgZone
    ) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
              this.userData = user;
              localStorage.setItem('user', JSON.stringify(this.userData));
            } else {
              localStorage.removeItem('user');
            }
          })
     }

    signIn(email: string, password: string) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
        .then((result) => {
            this.ngZone.run(() => {
                this.router.navigate(['games']);
            });
            const user = result.user;
            if(user !== null) {
                this.setUserData(user);
            }
        }).catch((error) => {
            window.alert(error.message)
        })
    }

  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
            this.router.navigate(['sign-in']);
        });
        this.setUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

    
    get isLoggedIn(): boolean {
        return localStorage.getItem('user') == null ? false: true;
      }


  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
    }
    return userRef.set(userData, {
      merge: true
    })
  }


  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }


    // getAllFriends(): Observable<User[]> {
    //     return of(mockPeople.filter(x => x.friend === true));
    // }
    
    // searchPeople(searchStr: string): Observable<User[]> {
    //     return of(mockPeople.filter(x => x.nickname.includes(searchStr) && x.friend === false));
    // }

    // removeFriend(id: number) {
    //     console.log("removed friend with id " + id);
    // }
}