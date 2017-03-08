import React from 'react';
import Todo from 'Todo';

let TodoList = React.createClass({

  render: function (){
    let {todos} = this.props,
        renderTodos = () => {
          if(todos.length === 0){
            return (
              <p className="container__message">Nothing To Do</p>
            );
          }
          return todos.map((todo) => <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/> )
        };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default TodoList;
