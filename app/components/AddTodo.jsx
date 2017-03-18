import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';


export let AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    let {dispatch} = this.props;
    let todoText = this.refs.todoText.value;
    if(todoText){
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText))
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function (){
    return (
      <div className ="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="add-todo-form">
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

export default connect()(AddTodo);
