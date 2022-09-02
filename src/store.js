import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './features/globalSlice';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});