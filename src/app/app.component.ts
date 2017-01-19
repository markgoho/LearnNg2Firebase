import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyApm-N_4fD_KRqme0XMnYJOmunHV1W3jJ4",
      authDomain: "finalproject-7b759.firebaseapp.com",
      databaseURL: "https://finalproject-7b759.firebaseio.com",
      storageBucket: "finalproject-7b759.appspot.com",
      messagingSenderId: "459964997051"
    };
    initializeApp(config);

    const root = database().ref('messages/2');
    root.on('value', snap => {
      console.log(snap.key, snap.val());
    })
  }
}
