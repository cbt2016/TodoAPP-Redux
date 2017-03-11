var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI',()=>{
  beforeEach(()=>{   //runs before each test
    localStorage.removeItem('todos');
  });
  it('should exist',()=>{
    expect(TodoAPI).toExist();
  });

  describe('setTodos', ()=>{
    it('should set valid array to localStorage' , ()=>{
      var todos = [
        {
          id: 521,
          text: 'testing setTodos',
          completed:true
        }
      ];
      TodoAPI.setTodos(todos);
      expect(JSON.parse(localStorage.getItem('todos'))).toEqual(todos);
    });

    it('should not set unvalid data to localStorage' , ()=>{
      var todos = {a:'45',b:false};
      TodoAPI.setTodos(todos);
      expect(localStorage.getItem('todos')).toEqual(null);
    });
  });

  describe('getTodos',()=>{
    it('should return empty array for bad localStorage data ',()=>{
      var todos = TodoAPI.getTodos();
      expect(todos).toEqual([]);
    });

    it('should return todos when valid localStorage data available ',()=>{
      var todos = [
        {
          id:654,
          text: 'playing soccer',
          completed: true
        }
      ];
      localStorage.setItem('todos',JSON.stringify(todos));
      var actual = TodoAPI.getTodos();
      expect(actual).toEqual(todos);
    });
  });

  describe('filterTodos', ()=>{
    var todos = [
      {
        id:2,
        text: 'test1',
        completed: true
      },
      {
        id:3,
        text: 'test2',
        completed: false
      },
      {
        id:4,
        text: 'test3',
        completed: true
      }
    ];

    it('should return all items if showCompleted is true',()=>{
      var filteredTodos = TodoAPI.filterTodos(todos,true,'');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return only items not completed when showCompleted is false', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos,false,'');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort items by the completed status', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos,true,'');
      expect(filteredTodos[0].id).toBe(3);
    });

    it('should return all items if searchText is empty', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos,true,'');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return only items matching the searchText', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos,true,'test1');
      expect(filteredTodos.length).toBe(1);
    });

  });
});
