var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

import {TodoSearch} from  'TodoSearch';

describe('TodoSearch',()=>{
  it('should exist',()=>{
      expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT when data insereted ',()=>{
    var searchText = 'soccer';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(this.refs.searchText);
    var action = {
      type: 'SET_SEARCH_TEXT',
      text: searchText
    }
    expect(spy).toHaveBeenCalledWith(action);

  });

  // it('call onsearch when checkbox triggered ',()=>{
  //   var searchText = '';
  //   var spy = expect.createSpy();
  //   var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
  //
  //   todoSearch.refs.showCompleted.checked = true;
  //   TestUtils.Simulate.change(this.refs.showCompleted);
  //
  //   expect(spy).toHaveBeenCalledWith(true,searchText);
  //
  // });
});
