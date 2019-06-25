import {
  START_LOAD_DATA,
  SUCCESS_LOAD_DATA,
  FAIL_LOAD_DATA,
  REMOVE_ITEM,
  SORT_ITEMS,
  START_LOAD_USERS,
  SUCCESS_LOAD_USERS,
  FAIL_LOAD_USERS,
  FAIL_LOAD_TODOS,
  START_LOAD_TODOS,
  SUCCESS_LOAD_TODOS,
} from './actions';

const initialState = {
  isUsersLoading: false,
  isTodosLoading: false,
  isUsersLoaded: false,
  isTodosLoaded: false,
  userItems: [],
  todoItems: [],
  usersError: null,
  todosError: null,
};

const actionHandlers = {
  [START_LOAD_USERS]: state => ({
    ...state,
    isUsersLoading: true,
    usersError: null,
  }),
  [SUCCESS_LOAD_USERS]: (state, { payload }) => ({
    ...state,
    isUsersLoading: false,
    isUsersLoaded: true,
    userItems: payload,
  }),
  [FAIL_LOAD_USERS]: (state, { payload }) => ({
    ...state,
    isUsersLoading: false,
    isUsersLoaded: false,
    usersError: payload,
  }),
  [START_LOAD_TODOS]: state => ({
    ...state,
    isTodosLoading: true,
    todosError: null,
  }),
  [SUCCESS_LOAD_TODOS]: (state, { payload }) => ({
    ...state,
    isTodosLoading: false,
    isTodosLoaded: true,
    todoItems: payload,
  }),
  [FAIL_LOAD_TODOS]: (state, { payload }) => ({
    ...state,
    isTodosLoading: false,
    isTodosLoaded: false,
    todosError: payload,
  }),
};

export const reducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return handler
    ? handler(state, action)
    : state;
};
