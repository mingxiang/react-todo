import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

import * as actions from 'actions';
const store = require('configureStore').configure();;
import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(actions.login(user.uid))
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout())
    hashHistory.push('/');
  }
})
/*
store.subscribe(() => {
  let state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});*/

/*
let initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));
*/

store.dispatch(actions.startAddTodos());

// Load foundation-sites
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');



ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
