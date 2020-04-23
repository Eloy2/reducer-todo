import React, { useState } from 'react';

const TodoForm = props => {
    const [text, setText] = useState(""); 

    const changeHandler = event => {
        setText(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault();
        props.addItem(text);
        setText("");
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    value={text}
                    onChange={changeHandler}
                />
                <button type="submit">Add</button>
            </form>
            <button onClick={props.clearCompleted}>clear completed</button>
        </div>
    )
}

export default TodoForm;
