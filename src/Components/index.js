import React, { useState } from 'react';
import Form from './Form';
import List from './List';

function Todos() {
  const [todos, setTodos] = useState([
    { text: 'Taste JavaScript', done: true },
    { text: 'Code furiously', done: true },
    { text: 'Promote Mavo', done: false },
    { text: 'Give talks', done: false },
    { text: 'Write tutorials', done: true },
    { text: 'Have a life!', done: false },
  ]);

  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => setTodos([...todos, todo]);

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.done);
    setTodos(newTodos);
  };

  return (
    <div>
      <Form addTodo={addTodo} />
      <List
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        setFilter={setFilter}
        filter={filter}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default Todos;