import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'TodoApp';
import TodoAPI from 'TodoAPI';
import * as actions from 'actions';
const store = require('configureStore').configure();;

import Login from 'Login';

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
    <Router history={hashHistory}>
      <Route path="/">
        <Router path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
