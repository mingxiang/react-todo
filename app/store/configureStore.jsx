import * as redux from 'redux';
let {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export let configure = (initalState= {}) => {
  let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted : showCompletedReducer,
    todos: todosReducer
  }), store = redux.createStore(reducer, initalState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
};
