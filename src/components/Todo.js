import React from "react";
import PropTypes from "prop-types";
import Fontawesome from "react-fontawesome";

const Todo = ({
  onToggleClick,
  onDeleteClick,
  onClick,
  completed,
  text,
  todos
}) =>
  <div onClick={onToggleClick} className={completed ? "completed" : "active"}>
    <Fontawesome
      size="lg"
      name="check"
      style={{
        visibility: completed ? "visible" : "hidden"
      }}
    />
    <label>
      {text}
    </label>
    <Fontawesome
      onClick={onDeleteClick}
      className="Close"
      size="lg"
      name="times"
    />
  </div>;

Todo.propTypes = {
  // onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
