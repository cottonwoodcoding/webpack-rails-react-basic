import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    let todos = this.props.todos.map( todo => {
      return (<Todo key={todo.id} {...todo} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo} />)
    })
    return (
      <div className="row">
        {todos}
      </div>
    )
  }
}


export default TodoList;

