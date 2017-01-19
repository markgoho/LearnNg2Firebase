
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyApm-N_4fD_KRqme0XMnYJOmunHV1W3jJ4",
    authDomain: "finalproject-7b759.firebaseapp.com",
    databaseURL: "https://finalproject-7b759.firebaseio.com",
    storageBucket: "finalproject-7b759.appspot.com",
    messagingSenderId: "459964997051"
};

export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};