import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { saveState } from './features/localStorage';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.subscribe(() => {
  saveState({
    employees: store.getState().employees,
  });
});


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


