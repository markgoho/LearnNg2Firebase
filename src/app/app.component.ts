import {FirebaseListObservable} from 'angularfire2/database';
import {AngularFire} from 'angularfire2';
import {root} from '../../node_modules/rxjs/src/util/root';
import {Component} from '@angular/core';
import { initializeApp, database } from 'firebase';

import {firebaseConfig} from '../environments/firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private af: AngularFire) {

   const courses$: FirebaseListObservable<any> =af.database.list('courses');

   courses$.subscribe(
     val => console.log(val)
   );

  }
}
