import "./App.css";
import Addtodo from "./components/Addtodo";
import TodoItem from "./components/TodoItem";
import Todoitems from "./components/Todoitems";
import TodoName from "./components/TodoName";
import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {

  const [todoItems, settodoItem] = useState([]);

  const handleNewItem = (itemName, itemDate)=>{
    const newTodoItems = [...todoItems, { name: itemName, date: itemDate }];
    settodoItem(newTodoItems);
    
  };

  const handleDeleteItem = (todoItemName) =>{
    const newTodoItem = todoItems.filter((item) => item.name != todoItemName);
    settodoItem(newTodoItem);
    
  };


  return (
    <center className="todo_cont">
      <TodoName />
      <Addtodo onNewItem = {handleNewItem} />
      <Todoitems todoItems = {todoItems} onDeleteClick = {handleDeleteItem}/>
      {todoItems.length ==0 && <Welcome />}
      
    </center>
  );
}

export default App;
