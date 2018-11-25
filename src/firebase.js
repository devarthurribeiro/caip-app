import firebase from '@firebase/app';
import '@firebase/firestore'
import '@firebase/auth'

const config = {
  apiKey: "AIzaSyDWxtxQazivdXl3EQoLl4YVvfywY6kFues",
  authDomain: "caip-app.firebaseapp.com",
  databaseURL: "https://caip-app.firebaseio.com",
  projectId: "caip-app",
  storageBucket: "",
  messagingSenderId: "753171483667"
};

firebase.initializeApp(config);

const db = firebase.firestore()
db.settings({
  timestampsInSnapshots: true
});

const GoogleProvider = new firebase.auth.GoogleAuthProvider();

const fb = {
  auth: firebase.auth(),
  users: db.collection("users"),
  signInGoogle: () => {
    return firebase.auth().signInWithPopup(GoogleProvider)
  }
};

firebase.auth().languageCode = 'pt';


export default fb;