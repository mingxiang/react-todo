import React from 'react';
import {connect} from 'react-redux';
import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

export let TodoList = React.createClass({

  render: function (){
    let {todos, showCompleted, searchText} = this.props,
        renderTodos = () => {
          let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
          if(filteredTodos.length === 0){
            return (
              <p className="container__message">Nothing To Do</p>
            );
          }
          return filteredTodos.map((todo) => <Todo key={todo.id} {...todo}/> )
        };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
