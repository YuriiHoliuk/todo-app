import { createSelector } from 'reselect';

const rootSelector = state => state;

const selectUsers = state => state.userItems;
const selectTodos = state => state.todoItems;

export const selectTodosWithUsers = createSelector(
  selectUsers,
  selectTodos,
  (users, todos) => {
    const usersMap = users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});
    console.log('selector');

    return todos.map(todo => ({ ...todo, user: usersMap[todo.userId] }));
  },
);

export const selectIsLoading = state => {
  return state.isUsersLoading || state.isTodosLoading;
};

export const selectIsLoaded = state => {
  return state.isUsersLoaded || state.isTodosLoaded;
};
