import React from 'react';
import Todo from 'Todo';

let TodoList = React.createClass({

  render: function (){
    let {todos} = this.props,
        renderTodos = () => {
          return todos.map((todo) => <Todo key={todo.id} {...todo}/> )
        };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default TodoList;
