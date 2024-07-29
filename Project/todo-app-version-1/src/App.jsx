import React from "react";
import "./App.css";
import AppName from "./Componant/AppName";
import AddTodo from "./Componant/AddTodo";
import TodoItem1 from "./Componant/TodoItem1";
import TodoItem2 from "./Componant/TodoItem2";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItem1 />
      <TodoItem2 />
    </center>
  );
}

export default App;
