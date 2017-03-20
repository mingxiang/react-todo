import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBwsOoPqvv8Uxl1Mn1nat0IFyeTaBSiXs4",
  authDomain: "mx-todo-app.firebaseapp.com",
  databaseURL: "https://mx-todo-app.firebaseio.com",
  storageBucket: "mx-todo-app.appspot.com",
  messagingSenderId: "951979825625"
};

firebase.initializeApp(config);

let firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Mingxiang',
    age:25
  }
});

var notesRef = firebaseRef.child('notes');

notesRef.on('child_added',(snapshot) => {
  console.log('child_added' , snapshot.key, snapshot.val());
})

notesRef.on('child_changed',(snapshot) => {
  console.log('child_changed' , snapshot.key, snapshot.val());
})

notesRef.on('child_removed',(snapshot) => {
  console.log('child_removed' , snapshot.key, snapshot.val());
})

var newNoteRef = notesRef.push({
  text: 'Walk the dog!'
});


/*
firebaseRef
  .child('app')
  .once('value')
  .then((snapshot) => {
  console.log('Got entire database', snapshot.key, snapshot.val());
}).catch(error => {
  console.log('unable to fetch value', error)
})*/

/*
firebaseRef.on('value', (snapshot) => {
  console.log('Got value', snapshot.val())
});

firebaseRef.update({isRunning: false});
*/
