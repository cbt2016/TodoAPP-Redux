var redux = require('redux');
var {searchTextReducer ,toggleShowCompletedReucer, todosReducer} = require('reducers');

export var configure =()=>{

  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    toggleShowCompleted: toggleShowCompletedReucer,
    todos: todosReducer
  });

  var store = redux.createStore(reducer,redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f=>f
  ));

  return store;

};
