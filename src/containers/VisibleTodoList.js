import { connect } from "react-redux";
import { toggleTodo, deleteTodo, completeAll, deleteAll, clearCompleted } from "../actions";
import TodoList from "../components/TodoList";

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleClick: id => {
      dispatch(toggleTodo(id));
    },
    onDeleteClick: id => {
      dispatch(deleteTodo(id));
    },
    onCompleteAllClick: state => {
      dispatch(completeAll(state.todos))
    },
    onDeleteAllClick: state => {
      dispatch(deleteAll(state.todos))
    },
    onClearCompleted: state => {
      dispatch(clearCompleted(state.todos))
    }
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default VisibleTodoList;
