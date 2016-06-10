import React from 'react';

class AddTodo extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let item = this.refs.item;
    this.props.updateList(item.value);
    this.refs.item.value = '';
  }

  render() {
    return (
      <div className="center">
        <form onSubmit={ (e) => this.handleSubmit(e)}>
          <label>Add Item</label>
          <input ref="item" />
        </form>
      </div>
    )
  }
}

export default AddTodo;

