import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../todoReducer/todoReducer';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;