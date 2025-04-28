import "./App.css";
import Addtodo from "./components/Addtodo";
import TodoItem from "./components/TodoItem";
import Todoitems from "./components/Todoitems";
import TodoName from "./components/TodoName";
import { useState } from "react";
import Welcome from "./components/Welcome";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, settodoItem] = useState([]);

  const addNewItem = (itemName, itemDate) => {
    const newTodoItems = [...todoItems, { name: itemName, date: itemDate }];
    settodoItem(newTodoItems);
  };

  const DeleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name != todoItemName);
    settodoItem(newTodoItem);
  };


  return (
    <TodoItemsContext.Provider value={{
      todoItems: todoItems,
      addNewItem: addNewItem,
      DeleteItem: DeleteItem
      }}>
      <center className="todo_cont">
        <TodoName />
        <Addtodo />
        <Todoitems />
        <Welcome />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
