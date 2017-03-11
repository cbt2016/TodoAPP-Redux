var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var moment = require('moment');

var TodoApp = require('TodoApp');

describe('TodoApp',()=>{
  it('should exist',()=>{
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos list using handlerAddTodo',()=>{
    var text = 'test todo';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({
      todos:[]
    });

    todoApp.handlerAddTodo(text);
    expect(todoApp.state.todos[0].text).toBe(text);
    //expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle is called',()=>{
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    var todoData = {
      id:11,
      text : 'test',
      completed:false
    };
    todoApp.state.todos =[todoData];

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    //expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');


  });


});
