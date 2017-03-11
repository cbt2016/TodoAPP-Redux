var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList',()=>{
  it('should exist',()=>{
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item',()=>{
    var todos = [
      {
        id: 1,
        text: 'watching soccer'
      },
      {
        id: 2,
        text: 'Playing guitar'
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList,Todo); //how many Todo components are loaded into todoList-scryRenderedComponentsWithType

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message when there is no todo',()=>{
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find('.container__message').length).toBe(1);
  });
})
