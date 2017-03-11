var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch',()=>{
  it('should exist',()=>{
      expect(TodoSearch).toExist();
  });

  // it('call onsearch with proper entere searchText ',()=>{
  //   var searchText = 'soccer';
  //   var spy = expect.createSpy();
  //   var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
  //
  //   todoSearch.refs.searchText.value = searchText;
  //   TestUtils.Simulate.change(this.refs.searchText);
  //
  //   expect(spy).toHaveBeenCalledWith(false,searchText);
  //
  // });

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
