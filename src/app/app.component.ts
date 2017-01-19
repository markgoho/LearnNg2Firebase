import {FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {AngularFire} from 'angularfire2';
import {root} from '../../node_modules/rxjs/src/util/root';
import {Component} from '@angular/core';
import { initializeApp, database } from 'firebase';
import 'rxjs/add/operator/map';

import {firebaseConfig} from '../environments/firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  // courses$: FirebaseListObservable<any>;
  // lesson$: FirebaseObjectObservable<any>;
  // firstCourse: any;

  // constructor(private af: AngularFire) {

  //   this.courses$ = af.database.list('courses');
  //   this.courses$.subscribe(console.log);

  //   this.lesson$ = af.database.object('lessons/-Kao_VFFXJm9yc27b8XL');
  //   this.lesson$.subscribe(console.log);

  //   this.courses$.map(courses => courses[0])
  //     .subscribe(
  //       course => this.firstCourse = course
  //     );
   
  // }

  // listPush() {
  //   this.courses$.push({description: 'New Course'})
  //     .then(
  //       () => console.log('List push done'),
  //       console.error
  //     );
  // }

  // listRemove() {
  //   this.courses$.remove(this.firstCourse);
  // }

  // listUpdate() {
  //   this.courses$.update(this.firstCourse, {description: 'Angular 2 HTTP'})
  // }

  // objUpdate() {
  //   this.lesson$.update({description: 'New description!'});
  // }
  
  // objSet() {
  //   this.lesson$.set({description: 'New description!'});
  // }

  // objRemove() {
  //   this.lesson$.remove();
  // }
}
