import React from "react";
import "./App.css";
import Input from "./Components/Input/Input";
import TodoItem from "./Components/TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="App">
      <div className="appContainer flex">
        <Input />
      </div>
      <div className="todoList flex">
        {todoList.map((item) => (
          <TodoItem todo={item.item} done={item.done} id={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
