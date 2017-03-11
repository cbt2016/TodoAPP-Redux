var $ = require('jquery');

module.exports = {
  setTodos: function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos',JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try {
        todos = JSON.parse(stringTodos);
    } catch (e) {
      console.log(e);
    }
    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function(todos,showCompleted,searchText){
    var filteredTodos = todos;

    //filter by showCompleted
    filteredTodos = filteredTodos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });

    //filter by the searchText

    filteredTodos = filteredTodos.filter((todo)=>{
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    //sort todos -non-completed should be shown first
    filteredTodos.sort((a,b)=>{
      if(!a.completed && b.completed){
        return -1; //a should come before b
      }else if(a.completed && !b.completed){
        return 1; //b should come before a
      }else {
        return 0 ;
      }
    });


    return filteredTodos;
  }
};
