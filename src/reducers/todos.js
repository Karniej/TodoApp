import { bake_cookie, read_cookie } from "sfcookies";

const todos = (state = [], action) => {
  let todos = null;
  // console.log(state = read_cookie('todo'))
  switch (action.type) {
    case "ADD_TODO":
      todos = [
        ...state,
        {
          id: Math.random(),
          text: action.text,
          completed: false
        }
      ];
      bake_cookie("todos", todos);
      return todos;
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);
    case "CLEAR_COMPLETED":
      return state.filter(todo => todo === todo.completed); // do dokończenia 
    case "COMPLETE_ALL":
      return state.map(todo => ({ ...todo, completed: true }));
    case "DELETE_ALL":
      return (todos = []);
    default:
      return state;
  }
};

export default todos;
