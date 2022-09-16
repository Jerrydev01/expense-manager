import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './features/globalSlice';
import { loadState } from './features/localStorage';

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    persistedState,
  },
});