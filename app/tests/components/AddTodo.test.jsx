var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');


var {AddTodo} = require('AddTodo');
// import {AddTodo} from 'AddTodo';

describe('AddTodo',()=>{
  it('should exist',()=>{
      expect(AddTodo).toExist();
  });

  it('should dispatch ADD_TODO with valid prop data ',()=>{

    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoItem.value = 'send email';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith({
      type: 'ADD_TODO',
      text: 'send email'
    });
  });
})
