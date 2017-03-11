var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');


var AddTodo = require('AddTodo');

describe('AddTodo',()=>{
  it('should exist',()=>{
      expect(AddTodo).toExist();
  });

  it('should call onAddTodo with valid prop data ',()=>{
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoItem.value = 'watching soccer';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith('watching soccer');
  });
})
