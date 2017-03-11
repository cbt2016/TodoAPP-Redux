var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');
var moment = require('moment');

describe('Reducers',()=>{
  describe('searchTextReducer',()=>{
    it('should set searchText',()=>{
      var action = {
        type: 'SET_SEARCH_TEXT',
        text : 'New Item'
      };
      var res = reducers.searchTextReducer(df(''),df(action)); // passing data to reducer using deep-freeze ,changing data is then not allowed
      expect(res).toEqual(action.text);
    });
  });

  describe('toggleShowCompletedReucer',()=>{
    it('should toggle showCompleted',()=>{
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.toggleShowCompletedReucer(df(false),df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer',()=>{
    it('should add todos',()=>{
      var action = {
        type: 'ADD_TODO',
        text: 'New Todo Item'
      };
      var todos = [
        {
          id:11,
          text: action.text,
          completed: false,
          createdAt : moment().unix(),
          completedAt: undefined
        }
      ]
      var res = reducers.todosReducer(df(todos),df(action));
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo',()=>{
      var action = {
        type: 'TOGGLE_TODO',
        id: 21
      };
      var todos = [
        {
          id:21,
          text: action.text,
          completed: true,
          createdAt : moment().unix(),
          completedAt: 123
        }
      ];
      var res = reducers.todosReducer(df(todos),df(action));
      expect(res[0].completed).toBe(false);
      expect(res[0].completedAt).toBe(undefined);
    });
  });

})
