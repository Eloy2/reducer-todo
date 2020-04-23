import React from 'react';

const Todo = props => {
    return (
        <div
            className={`item${props.todoItem.completed ? " completed" : ""}`}
            onClick={() => props.toggleItem(props.todoItem.id)}
        >
            <p>{props.todoItem.item}</p>    
        </div>
    )
}

export default Todo;
