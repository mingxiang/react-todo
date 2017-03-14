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
        text: 'Walk the dog'
      }, res = todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      let action = {
        type: 'TOGGLE_TODO',
        id : 123
      }, todos = [
        {
          id: 123,
          text: 'testing todo',
          completed: true,
          createdAt: 123,
          completedAt: 123
        }
      ], res = todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);

    })
  })
});
