import React from 'react'
import TodoItem from "./TodoItem";
import { TodoItemsContext } from '../store/todo-items-store';
import { useContext } from 'react';

function Todoitems () {

  const { todoItems, DeleteItem }= useContext(TodoItemsContext);





  return (
    
    <div className="items_cont">
        {todoItems.map((item, index)=> <TodoItem todoName = {item.name} todoDate = {item.date} key={index} onDeleteClick = {DeleteItem} />)}
        
        
      
    </div>
  )
}

export default Todoitems