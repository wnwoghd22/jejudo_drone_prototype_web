import * as React from 'react'
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAlkvWxkFIyhX05nq4LpfnZdQBHiuAxQ70",
    authDomain: "jejudo-drone-prototype.firebaseapp.com",
    databaseURL: "https://jejudo-drone-prototype-default-rtdb.firebaseio.com",
    projectId: "jejudo-drone-prototype",
    storageBucket: "jejudo-drone-prototype.appspot.com",
    messagingSenderId: "675146639727",
    appId: "1:675146639727:web:fcf5f88a73d6b682b3209a",
    measurementId: "G-SJ40N3VG8Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const session = firebase.auth.Auth.Persistence.SESSION;
const local = firebase.auth.Auth.Persistence.LOCAL;
const provider = new firebase.auth.GoogleAuthProvider();

export { firebaseApp, auth, provider, session, local }