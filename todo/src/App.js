import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/Reducers';
import TodoList from './components/TodoList'; 
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const toggleItem = itemId => {
    console.log("Got it", itemId);
    dispatch({ type: "TOGGLE_ITEM", payload: itemId })
  }

  const addItem = itemText => {
    const newItem = {
      item: itemText,
      id: Date.now(),
      completed: false
    }
    dispatch({ type: "ADD_ITEM", payload: newItem })
  }

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({type: "CLEAR"})
  };

  return (
    <div className="App">
      <TodoList list={state} toggleItem={toggleItem} />
      <TodoForm addItem={addItem} clearCompleted={clearCompleted}/>
    </div>
  );
}

export default App;
