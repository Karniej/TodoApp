import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import Title from "./Title";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () =>
  <div className="App">
    <AddTodo />
    <Title />
    <VisibleTodoList />
    <Footer />
  </div>;

export default App;
