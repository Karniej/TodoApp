export const addTodo = text => {
  const action = {
    type: "ADD_TODO",
    text
  };
  return action;
};

export const setVisibilityFilter = filter => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  };
};

export const toggleTodo = id => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};

export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    id
  };
};
export const completeAll = todos => {
  return {
    type: "COMPLETE_ALL",
    todos
  };
};

export const deleteAll = (id) => {
  const action = {
    type: "DELETE_ALL",
    id
  };
  return action;
};
export const clearCompleted = todos => {
  return {
    type: "CLEAR_COMPLETED",
    todos
  }
}