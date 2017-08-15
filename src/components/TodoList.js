import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Fontawesome from "react-fontawesome";

const TodoList = ({
  todos,
  onToggleClick,
  onDeleteClick,
  onCompleteAllClick,
  onDeleteAllClick,
  onClearCompleted
}) =>
  <div className="TodoList">
    <Fontawesome
      onClick={() => onCompleteAllClick(todos)}
      size="2x"
      name="check-square-o"
    />
    <Fontawesome
      onClick={() => onDeleteAllClick(todos)}
      size="2x"
      name="trash"
    />
    {/* <button onClick={()=> onClearCompleted(todos)} >CLEARCOMPLETED</button> */}
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionEnter={true}
      transitionEnterTimeout={1000}
      transitionLeave={true}
      transitionLeaveTimeout={100}
    >
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onDeleteClick={() => onDeleteClick(todo.id)}
          onToggleClick={() => onToggleClick(todo.id)}
        />
      )}
    </ReactCSSTransitionGroup>
  </div>;

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default TodoList;
