import {AngularFireModule} from 'angularfire2';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


import {AppComponent} from './app.component';
import {firebaseConfig} from '../environments/firebase.config';
import { HomeComponent } from './home/home.component';
import { LessonsService } from './shared/model/lessons.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
