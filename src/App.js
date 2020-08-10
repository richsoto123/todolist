import React, {Component} from 'react'
class TodoList extends Component {
constructor() {
  super();
  this.state = {
    todos: [],
    currentTodo: "",
  }
}


  render () {
    return (
      <div className= "container">
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName">Task Name:</label>
          <input onChange={this.handleChange} name="taskName" type="text" placeholde="add todo here!" />
          <button type="submit">Add Task </button>
        </form>
      </div>
    );
  }
} 

export default TodoList;
