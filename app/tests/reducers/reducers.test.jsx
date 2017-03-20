import expect from 'expect';
import df from 'deep-freeze-strict';
import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
        let action = {
          type: 'SET_SEARCH_TEXT',
          searchText: 'dog'
        }, res = searchTextReducer(df(''), df(action));
        expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
        let action = {
          type: 'TOGGLE_SHOW_COMPLETED',
        }, res = showCompletedReducer(df(false), df(action));
        expect(res).toEqual(true);
        res = showCompletedReducer(df(true), df(action));
        expect(res).toEqual(false);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Something to do',
          completed: false,
          createdAt: 92384275
        }
      }, res = todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should toggle todo', () => {
      let todos = [
        {
          id: 123,
          text: 'testing todo',
          completed: true,
          createdAt: 123,
          completedAt: 123
        }
      ], updates = {
        completed: false,
        completedAt: null
      } , action = {
        type: 'UPDATE_TODO',
        id : todos[0].id,
        updates
      },  res = todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);

    })

    it('should add existing todo', () => {
      let todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt:33000
      }], action = {
        type: 'ADD_TODOS',
        todos
      }, res = todosReducer(df([]),df(action))

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    })
  })
});
