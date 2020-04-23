import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.list.map(item => {
                return (
                    <Todo key={item.id} todoItem={item} toggleItem={props.toggleItem}/>
                )
            })}
        </div>
    )
}

export default TodoList;
