import React from 'react';

function List({ todos, toggleTodo, deleteTodo, setFilter, filter, clearCompleted }) {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.done;
    if (filter === 'completed') return todo.done;
    return true;
  });

  return (
    <section className="main">
      <ul className="todo-list">
        {filteredTodos.map((todo, index) => (
          <li key={index} className={todo.done ? 'completed' : ''}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(index)} // Toggle only this todo
              />
              <label>{todo.text}</label>
              <button className="destroy" onClick={() => deleteTodo(index)}></button>
            </div>
          </li>
        ))}
      </ul>
      <footer className="footer">
        <span className="todo-count">
          {todos.filter(todo => !todo.done).length} items left
        </span>
        <ul className="filters">
          <li>
            <a
              className={filter === 'all' ? 'selected' : ''}
              onClick={() => setFilter('all')}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={filter === 'active' ? 'selected' : ''}
              onClick={() => setFilter('active')}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={filter === 'completed' ? 'selected' : ''}
              onClick={() => setFilter('completed')}
            >
              Completed
            </a>
          </li>
        </ul>
        {todos.some(todo => todo.done) && (
          <button className="clear-completed" onClick={clearCompleted}>
            Clear completed
          </button>
        )}
      </footer>
    </section>
  );
}

export default List;