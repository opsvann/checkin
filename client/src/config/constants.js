import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCgmUbZ2nO1PuVaZQzRLBQmKVINBqKAyGw",
  authDomain: "check-in-4a296.firebaseapp.com",
  databaseURL: "https://check-in-4a296.firebaseio.com",
  projectId: "check-in-4a296",
  storageBucket: "check-in-4a296.appspot.com",
  messagingSenderId: "148788118669"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
