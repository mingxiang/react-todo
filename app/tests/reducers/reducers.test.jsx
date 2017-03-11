import expect from 'expect';
import df from 'deep-freeze-strict';
import {searchTextReducer, showCompletedReducer} from 'reducers';

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
});
