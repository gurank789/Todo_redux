import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TodoApp from './TodoApp/TodoApp';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
    <Provider store={store}>
      <TodoApp />
    </Provider>
    </div>
  );
};

export default App;