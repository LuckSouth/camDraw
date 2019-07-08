import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CanvasDraw } from '../components/canvas-draw/canvas-draw';

import { Camera } from '@ionic-native/camera'
import { FotoPage } from '../pages/foto/foto'

import { TestePage } from '../pages/teste/teste'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CanvasDraw,
    FotoPage,
    TestePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FotoPage,
    TestePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera

  ]
})
export class AppModule {}
