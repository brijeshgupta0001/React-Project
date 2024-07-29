import React from "react";
import "./App.css";
import AppName from "./Componant/AppName";
import AddTodo from "./Componant/AddTodo";
import TodoItems from "./Componant/Todoitems";
import { useState } from "react";
import WelcomeMessage from "./Componant/WelcomeMessage";

function App() {
  const Itemtodos = [];
  const [TodoList, setTodoList] = useState(Itemtodos);

  const onButtonClick = (name, date) => {
    const newObject = {
      name: name,
      date: date,
    };
    const newTodoList = [...TodoList, newObject];
    setTodoList(newTodoList);
  };
  const onClickForDelete = (key) => {
    const newTodoList = TodoList.filter((item) => item.name !== key);

    setTodoList(newTodoList);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={(name, date) => onButtonClick(name, date)} />
      {TodoList.length === 0 && <WelcomeMessage />}
      <TodoItems
        AllTodo={TodoList}
        onClickForDelete={(key) => onClickForDelete(key)}
      ></TodoItems>
    </center>
  );
}

export default App;
