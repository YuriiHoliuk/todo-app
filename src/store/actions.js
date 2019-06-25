import { BASE_URL } from '../constants';

export const START_LOAD_USERS = 'startLoadUsers';
export const SUCCESS_LOAD_USERS = 'successLoadUsers';
export const FAIL_LOAD_USERS = 'failLoadUsers';

export const START_LOAD_TODOS = 'startLoadTodods';
export const SUCCESS_LOAD_TODOS = 'successLoadTodods';
export const FAIL_LOAD_TODOS = 'failLoadTodods';

export const REMOVE_ITEM = 'removeItem';
export const SORT_ITEMS = 'sortItems';

export const startLoadUsers = () => {
  return {
    type: START_LOAD_USERS,
  };
};

export const successLoadUsers = usersList => {
  return {
    type: SUCCESS_LOAD_USERS,
    payload: usersList,
  };
};

export const failLoadUsers = error => {
  return {
    type: FAIL_LOAD_USERS,
    payload: error,
  };
};

export const startLoadTodos = () => {
  return {
    type: START_LOAD_TODOS,
  };
};

export const successLoadTodos = todoList => {
  return {
    type: SUCCESS_LOAD_TODOS,
    payload: todoList,
  };
};

export const failLoadTodos = error => {
  return {
    type: FAIL_LOAD_TODOS,
    payload: error,
  };
};

export const loadUsers = () => (dispatch) => {
  dispatch(startLoadUsers());

  fetch(`${BASE_URL}/users`)
    .then(response => response.json())
    .then((users) => {
      dispatch(successLoadUsers(users));
    })
    .catch(error => dispatch(failLoadUsers(error)));
};

export const loadTodos = () => (dispatch) => {
  dispatch(startLoadTodos());

  fetch(`${BASE_URL}/todos`)
    .then(response => response.json())
    .then((todos) => {
      dispatch(successLoadTodos(todos));
    })
    .catch(error => dispatch(failLoadTodos(error)));
};
