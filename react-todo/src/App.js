import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function App() {
  const [ current, setCurrent] = useState("")
  const [ todos, setTodos] = useState([])

  const handleAddToDo = (e) => {
    e.preventDefault()
    setTodos([ ...todos, { name: current , completed: false }]);
    setCurrent("");
  }

  const handleChange = (e) => {
    setCurrent(e.target.value)
  }

  return (
    <>
      <form>
        <h1>To Do List</h1>
        <input name="name" value={current} onChange={handleChange} ></input>
        <button onClick={handleAddToDo}>Add To Do</button>
      </form>
      <ul>
      {
        todos.map((item,index) => <ToDoItem key={index} todo={item}/>)
      }
      </ul>
    </>
  );
}

export default App;
