import firebase from 'firebase'

try {
  var config = {
    apiKey: "AIzaSyBwsOoPqvv8Uxl1Mn1nat0IFyeTaBSiXs4",
    authDomain: "mx-todo-app.firebaseapp.com",
    databaseURL: "https://mx-todo-app.firebaseio.com",
    storageBucket: "mx-todo-app.appspot.com",
    messagingSenderId: "951979825625"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export let firebaseRef = firebase.database().ref();
export default firebase;
