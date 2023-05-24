import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { id, name } = action.payload;
      state.push({ id, name, status: 'pending' });
    },
    toggleStatus: (state, action) => {
      const id = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.status = todo.status === 'pending' ? 'completed' : 'pending';
      }
    },
  },
});

export const { addTodo, toggleStatus } = todoSlice.actions;
export default todoSlice.reducer;