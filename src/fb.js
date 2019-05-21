import firebase from 'firebase/app'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA6sJRXue0pM38snLsy2H4RuwE1Ue5KgWQ",
    authDomain: "todo-vue-7ad5a.firebaseapp.com",
    databaseURL: "https://todo-vue-7ad5a.firebaseio.com",
    projectId: "todo-vue-7ad5a",
    storageBucket: "todo-vue-7ad5a.appspot.com",
    messagingSenderId: "446858599963",
    appId: "1:446858599963:web:ab3c7d656644c46b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default db