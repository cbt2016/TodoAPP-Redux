//Create a reactjs component

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} =  require('react-redux');

var TodoApp = require('TodoApp');
var TodoAPI = require('TodoAPI');

//load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//testing redux
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=>{
  var state = store.getState();

  TodoAPI.setTodos(state.todos);
  console.log('New State',store.getState());
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// store.dispatch(actions.addTodo('Play Soccer'));
// store.dispatch(actions.searchText('Do Something'));

//app css
require('style-loader!css-loader!sass-loader!app.scss');
ReactDOM.render(
    // <Router history ={hashHistory}>
    //   <Route path='/' component={Main}>
    //     <Route path="countdown" component={Countdown}/>
    //     <IndexRoute component={Timer}/>
    //   </Route>
    // </Router>,
    <Provider store={store}>
      <TodoApp/>
    </Provider>
      ,
    document.getElementById('app')
);
