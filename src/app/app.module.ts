import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import firebase from'@firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyDJSVXij7QRGycdDCvqVDTDjiY6xCiWDMc",
    authDomain: "hiapps-1da38.firebaseapp.com",
    projectId: "hiapps-1da38",
    storageBucket: "hiapps-1da38.appspot.com",
    messagingSenderId: "1069609016725",
    appId: "1:1069609016725:web:b5a28cbd221b8fe0b36a9c",
    measurementId: "G-18YMDHJ6SC"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'hiapps'),
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
