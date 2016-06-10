import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentWillMount() {
    $.ajax({
      url: '/api/items',
      type: 'GET',
      dataType: 'JSON'
    }).done( todos => {
      this.setState({ todos })
    })
  }

  updateList(name) {
    $.ajax({
      url: '/api/items',
      type: 'POST',
      dataType: 'JSON',
      data: { item: { name }}
    }).done( result => {
      this.setState({
        todos: [
          { ...result },
          ...this.state.todos
        ]
      })

    })
  }

  updateTodo(id) {
    $.ajax({
      url: `/api/items/${id}`,
      type: 'PUT',
      dataType: 'JSON'
    }).done( item => {
      let index = this.state.todos.findIndex( i => i.id === item.id )
      let items = this.state.todos
      this.setState({
        todos: [
          ...items.slice(0, index),
          {...items[index], complete: item.complete},
          ...items.slice(index + 1, items.length)
        ]
      })
    })
  }

  deleteTodo(id) {
    $.ajax({
      url: `/api/items/${id}`,
      type: 'DELETE'
    }).done( () => {
      let index = this.state.todos.findIndex( i => i.id === id )
      let items = this.state.todos
      this.setState({
        todos: [
          ...items.slice(0, index),
          ...items.slice(index + 1, items.length)
        ]
      })
    })
  }

  render() {
    return (
      <div className="container">
        <AddTodo updateList={this.updateList.bind(this)} />
        <TodoList
          todos={this.state.todos}
          updateTodo={this.updateTodo.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        />
      </div>
    )
  }
}

export default App;

