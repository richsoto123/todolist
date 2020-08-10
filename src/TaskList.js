import React from'react';

const TaskList = (props)=> {
    const {todos, deleteItem} = props;
    return(
        <ul>
          {todos.map((el, idx) => {
            return (
              <li key={idx}>
              {el}
              <button type="button" onClick={() => deleteItem(idx)}>Delete</button>
              </li>
            )
          })}

        </ul>
    )
}

export default TaskList;