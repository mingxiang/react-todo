import React from 'react';

let AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    let todoText = this.refs.todoText.value;
    if(todoText){
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText)
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function (){
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="add-todo-form">
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

export default AddTodo;
