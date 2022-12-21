import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/CarSlice';

export const store = configureStore({
  reducer: { counter: counterReducer },
});
