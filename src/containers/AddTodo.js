import React from "react";
import { connect } from "react-redux";
import { addTodo} from "../actions";
//todo - check all , clear completed, bake cookies

let AddTodo = ({ dispatch, todos }) => {
  let input;
  return (
    <div className="AddTodoForm">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
