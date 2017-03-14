import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import * as actions from 'actions';

export let Todo = React.createClass({
  render: function (){
    let {id, text, completed, createdAt, completedAt, dispatch} = this.props,
        todoClassName = completed ? 'todo todo-completed' : 'todo',
        renderData = () => {
            let message = 'Created ',
                timestamp = createdAt;

            if(completed) {
              message = 'Completed '
                timestamp = completedAt
            }
            return `${message}${moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')}`;
        }

    return (
      <div className={todoClassName} onClick={() => {
        dispatch(actions.toggleTodo(id));
      }}>
        <input type="checkbox" checked={completed}/>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderData()}</p>
        </div>
      </div>
    )
  }
});

export default connect()(Todo);
