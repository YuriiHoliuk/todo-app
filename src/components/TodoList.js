import React from 'react';
import { TodoItem } from  './TodoItem';

export const TodoList = props => {
  const {
    todos,
  } = props;

  return (
    <table cellSpacing={20}>
      <tbody>
        {todos.map(todoWithUser => {
          return (
            <TodoItem key={todoWithUser.id} {...todoWithUser} />
          );
        })}
      </tbody>
    </table>
  );
};
