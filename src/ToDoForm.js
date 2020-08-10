import React from'react';

const ToDoForm = (props)=> {
    const {addItem, handleChange, currentToDo} = props;
    return (
        <form onSubmit={addItem}>
          <label htmlFor="taskName">Task Name:</label>
          <input 
          onChange={handleChange} 
          name="taskName" 
          type="text" 
          value = {currentToDo}
          placeholde="add todo here!" 
          />
          <button type="submit">Add Task</button>
        </form>
    )

}

export default ToDoForm;