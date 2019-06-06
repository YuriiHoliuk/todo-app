import React from 'react';
import './App.css';
import { todos } from './data/todos';
import { users } from './data/users';
import { TodoList } from './components/TodoList';

export function App() {
  const usersMap = users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});
  const todosWithUsers = todos.map(todo => ({ ...todo, user: usersMap[todo.userId] }));

  return (
    <TodoList todos={todosWithUsers} />
  );
}
