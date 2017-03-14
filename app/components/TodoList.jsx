import React from 'react';
import {connect} from 'react-redux';
import Todo from 'Todo';

export let TodoList = React.createClass({

  render: function (){
    let {todos} = this.props,
        renderTodos = () => {
          if(todos.length === 0){
            return (
              <p className="container__message">Nothing To Do</p>
            );
          }
          return todos.map((todo) => <Todo key={todo.id} {...todo}/> )
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
    return {
      todos: state.todos
    };
  }
)(TodoList);
