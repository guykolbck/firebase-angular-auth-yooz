import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  //import my yooz-firebase to the program.
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAaDfzZ19hT54VMMDrARVMc4XqbxwLoGZw",
      authDomain: "login-yooz.firebaseapp.com",
      databaseURL: "https://login-yooz-default-rtdb.firebaseio.com",
      projectId: "login-yooz",
      storageBucket: "login-yooz.appspot.com",
      messagingSenderId: "450997871141",
      appId: "1:450997871141:web:e3d247b307883c43cad5cc",
      measurementId: "G-2068P9QPE9"
    }),
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
   
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
