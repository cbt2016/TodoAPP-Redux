var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer =(state='',action)=>{
  //action.text ='hello'; //if passing the action using deep-freeze ,will it to be allowed to update action (not pure function anymore )
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.text;
      break;
    default:
      return state;

  }
};

export var toggleShowCompletedReucer =(state = false, action)=>{
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
      break;
    default:
      return state;

  };
};

export var todosReducer = (state=[],action)=>{
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id:uuid(),
          text: action.text,
          completed: false,
          createdAt : moment().unix(),
          completedAt: undefined
        }
      ]
      break;
    case 'TOGGLE_TODO':
        return state.map((todo)=>{
          if(action.id===todo.id){
            var nextCompleted = !todo.completed;
            return {
              ...todo,
              completed: nextCompleted,
              completedAt: nextCompleted ? moment().unix() : undefined
            };
          }
        });
    default:
      return state;

  }
};
