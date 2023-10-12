import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text) {
      setTodos([...todos, text]);
      setText('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="დაამატე ახალი Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>დაამატე</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>წაშლა</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
