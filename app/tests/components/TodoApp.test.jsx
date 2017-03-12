var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var moment = require('moment');

var {Provider} = require('react-redux');
var TodoApp = require('TodoApp');
import TodoList from 'TodoList';

var storeConfigure = require('configureStore');

describe('TodoApp',()=>{
  it('should exist',()=>{
    expect(TodoApp).toExist();
  });

  it('should render TodoList ',()=>{
    var store = storeConfigure.configure();

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider,TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp,TodoList);
    expect(todoList.length).toEqual(1);
  });


});
