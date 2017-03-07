import React from 'react'
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  })

  it('should call onAddTodo prop with valid data', () => {
    let todoText = 'Check mail',
        spy = expect.createSpy(),
        addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>),
        $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  })

  it('should call not onAddTodo prop when invalid data', () => {
    let todoText = '',
        spy = expect.createSpy(),
        addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>),
        $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  })
});
