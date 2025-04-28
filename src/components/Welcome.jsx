import React from 'react'
import './Welcome.css'
import { TodoItemsContext } from '../store/todo-items-store';
import { useContext } from 'react';

function Welcome() {

  const { todoItems }= useContext(TodoItemsContext);
  
  return (
    todoItems.length ==0 && <h3>Enjoy Your Day</h3>
  )
}

export default Welcome