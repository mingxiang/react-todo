import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  })
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      let todos = [{
        id: 23,
        text: 'Test all files',
        completed: false
      }];

      TodoAPI.setTodos(todos);

      let acutalTodos = JSON.parse(localStorage.getItem('todos'));
      expect(acutalTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      let badTodos = {a: 'b'};

      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage',() => {
      let acutalTodos = TodoAPI.getTodos()
      expect(acutalTodos).toEqual([]);
    })

    it('should return todo if valid array in localStorage', () => {
      let todos = [{
        id: 23,
        text: 'Test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      let acutalTodos = TodoAPI.getTodos();
      expect(acutalTodos).toEqual(todos);
    })
  });
})
