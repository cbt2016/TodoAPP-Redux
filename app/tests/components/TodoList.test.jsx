var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');

var {configure} = require('configureStore');

import ConnectedList,{TodoList} from 'TodoList';
import ConnectedTodo,{Todo} from 'Todo';

describe('TodoList',()=>{
  it('should exist',()=>{
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item',()=>{
    var todos = [
      {
        id: 1,
        text: 'watching soccer',
        completed:false,
        completedAt:500,
        createdAt:undefined
      },
      {
        id: 2,
        text: 'Playing guitar',
        completedAt:500,
        createdAt:undefined
      }
    ];
    var store = configure({
      todos:todos
    });

    var provider = TestUtils.renderIntoDocument(
      <Provider store ={store}>
        <ConnectedList/>
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider,ConnectedList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList,ConnectedTodo); //how many Todo components are loaded into todoList-scryRenderedComponentsWithType

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message when there is no todo',()=>{
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find('.container__message').length).toBe(1);
  });
})
