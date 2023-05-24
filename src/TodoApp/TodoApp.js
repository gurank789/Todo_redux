import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleStatus} from '../todoReducer/todoReducer';
import styles from './TodoApp.module.css';

const TodoApp = () => {
  const [inputValue, setInputValue] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now().toString(),
        name: inputValue,
      };
      dispatch(addTodo(newTodo));
      setInputValue('');
    }
  };

  const handleToggleStatus = (id) => {
    dispatch(toggleStatus(id));
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Todo app </h1>
        <input className={styles.input} type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name} - {todo.status}
            <button onClick={() => handleToggleStatus(todo.id)}>
              Toggle Status
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;