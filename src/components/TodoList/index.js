import { connect } from 'react-redux';
import { TodoList } from './TodoList';
import { loadTodos, loadUsers } from '../../store/actions';
import { selectIsLoaded, selectIsLoading, selectTodosWithUsers } from '../../store/selectors';

const TodoListWithConnect = connect(
  state => ({
    isLoaded: selectIsLoaded(state),
    isLoading: selectIsLoading(state),
    todoItems: selectTodosWithUsers(state),
  }),
  {
    loadUsers,
    loadTodos,
  },
)(TodoList);

export { TodoListWithConnect as TodoList };
