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

const fb = {
  auth: firebase.auth(),
  db: firebase.firestore()
};

fb.db.settings({
  timestampsInSnapshots: true
});

export default fb;