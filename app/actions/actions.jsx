import firebase, {firebaseRef, githubProvider} from 'app/firebase/index';
import moment from 'moment';

export let setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

// toggle show completed
export let toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}

export let updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  }
}

export let startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    let todoRef = firebaseRef.child(`todos/${id}`),
        updates = {
          completed,
          completedAt: (completed) ? moment().unix() : null
        };
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};

export let addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
}

export let startAddTodo = (text) => {
  return (dispatch, getState) => {
      let todo = {
        text,
        completed: false,
        createdAt: moment().unix(),
        completedAt: null
      }, todoRef = firebaseRef.child('todos').push(todo);

      return todoRef.then(() => {
        dispatch(addTodo({
          ...todo,
          id: todoRef.key
        }));
      });
  };
};

export let addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
}

export let startAddTodos = () => {
  return (dispatch, getState) => {
    let todosRef = firebaseRef.child('todos');

    return todosRef.once('value').then((snapshot) => {
        let todos = snapshot.val() || {},
            parsedTodos = [];

        Object.keys(todos).forEach((todoId) => {
          parsedTodos.push({
            id: todoId,
            ...todos[todoId]
          });
        })

        dispatch(addTodos(parsedTodos))
    });
  };
};

export let startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('Auth worked!', result)
    }).catch((error) => {
      console.log('Unable to auth', error);
    })
  };
}

export let startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged out');
    });
  };
}
