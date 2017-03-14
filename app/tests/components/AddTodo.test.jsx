import React from 'react'
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import {AddTodo} from 'AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  })

  it('should dispatch ADD_TODO when valid todo text', () => {
    let todoText = 'Check mail',
        action = {
          type: 'ADD_TODO',
          text: todoText
        },
        spy = expect.createSpy(),
        addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>),
        $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  })

  it('should call not dispatch ADD_TODO when invalid todo text', () => {
    let todoText = '',
        spy = expect.createSpy(),
        addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>),
        $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  })
});
