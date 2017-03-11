var React = require('react');

var AddTodo = React.createClass({
  propTypes: {
    onAddTodo: React.PropTypes.func.isRequired
  },
  onSubmitForm: function(e){
    e.preventDefault();
    var todoItem = this.refs.todoItem.value;
    if(todoItem.length>0){
      this.refs.todoItem.value = '';
      this.props.onAddTodo(todoItem);
    }else{
      this.refs.todoItem.focus();
    }
  },
  render: function(){

    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmitForm}>
          <input type="text" ref='todoItem' placeholder="enter your todo here" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
