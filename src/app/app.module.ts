import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { GamesModule } from './games/games.module';
import { FriendsModule } from './friends/friends.module';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { LibraryModule } from './library/library.module';


import { AppComponent } from './app.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FriendsPageComponent } from './friends/friends-page/friends-page.component';
import { environment } from '../environments/environment';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AuthGuard } from './auth/guard/auth.guard';
import { LibraryListComponent } from './library/library-list/library-list.component';
import { ProfileComponent } from './profile-page/profile/profile.component';
import { ProfilePageModule } from './profile-page/profile-page.module';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'games', component: GamesListComponent, canActivate: [AuthGuard] },
  { path: 'friends', component: FriendsPageComponent, canActivate: [AuthGuard] },
  { path: 'library', component: LibraryListComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
];
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    GamesModule,
    FriendsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    LibraryModule,
    ProfilePageModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
