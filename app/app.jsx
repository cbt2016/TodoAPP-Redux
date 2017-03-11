//Create a reactjs component

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


var TodoApp = require('TodoApp');

//load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//testing redux
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=>{
  console.log('New State',store.getState());
});

store.dispatch(actions.addTodo('Play Soccer'));
store.dispatch(actions.searchText('Do Something'));

//app css
require('style-loader!css-loader!sass-loader!app.scss');
ReactDOM.render(
    // <Router history ={hashHistory}>
    //   <Route path='/' component={Main}>
    //     <Route path="countdown" component={Countdown}/>
    //     <IndexRoute component={Timer}/>
    //   </Route>
    // </Router>,
    <TodoApp/>,
    document.getElementById('app')
);
