import React from 'react'
import TodoItem from "./TodoItem";

function Todoitems({todoItems, onDeleteClick}) {
  return (
    
    <div className="items_cont">
        {todoItems.map((item, index)=> <TodoItem todoName = {item.name} todoDate = {item.date} key={index} onDeleteClick = {onDeleteClick} />)}
        
        
      
    </div>
  )
}

export default Todoitems