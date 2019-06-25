import React, { Component } from 'react';
import { TodoItem } from '../TodoItem';

export class TodoList extends Component {
  render() {
    const {
      isLoading,
      isLoaded,
      todoItems,
      loadUsers,
      loadTodos,
    } = this.props;

    const button = (
      <button
        type="button"
        disabled={isLoaded}
        onClick={() => {
          loadUsers();
          loadTodos();
        }}
      >
        {isLoading ? 'Loading...' : 'Load data'}
      </button>
    );

    if (!isLoaded) {
      return button;
    }

    return (
      <>
        {button}
        <table cellSpacing={20}>
          <tbody>
            {todoItems.map(todo => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
