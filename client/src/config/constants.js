import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAUsY3OKKqKhMyfMtgYjr7KRFebIu2PMMU",
  authDomain: "check-in-72d0c.firebaseapp.com",
  databaseURL: "https://check-in-72d0c.firebaseio.com",
  projectId: "check-in-72d0c",
  storageBucket: "check-in-72d0c.appspot.com",
  messagingSenderId: "32555811814"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
