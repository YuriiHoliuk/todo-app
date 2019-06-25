import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { TodoList } from './components/TodoList';
import { store } from './store/store';

export const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);
