import React, {Component} from 'react'
import TaskList from './TaskList';
import ToDoForm from './ToDoForm';

class TodoList extends Component {
constructor() {
  super();
  this.state = {
    todos: [],
    currentToDo: "",
  }
}

handleChange = event => {
  //console.log(event.target.value)
  this.setState({
    currentToDo: event.target.value, 
  })
};

addItem = event => {
  event.preventDefault();
  if (this.state.currentToDo !== ''){
    this.setState ({
      currentToDo: '',
      todos:[...this.state.todos, this.state.currentToDo]
    })
  }
  //console.log("addItem Method fired")
};
deleteItem = (idx) => {
  const filteredItems = this.state.todos.filter((el,index) => {
    return index !== idx
  })
  this.setState ({
    todos: filteredItems,
  })

} 

  render () {
    //deconstruct todos from state
    //const {todos} = this.state
    return (
      <div className= "container">
        <ToDoForm handleChange={this.handleChange} addItem={this.addItem} currentToDo={this.state.currentToDo} />
        <TaskList todos={this.state.todos} deleteItem={this.deleteItem} />
      </div>
    );
  }
} 

export default TodoList;
