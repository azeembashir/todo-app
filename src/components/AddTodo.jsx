import React from "react";
import { useRef } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function Addtodo() {
  const { addNewItem }= useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClick = ()=>{
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addNewItem(todoName, todoDate)

  }


  return (
    <div class="container text-center">
      <div class="row items_row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo here" ref={todoNameElement} />
        </div>
        <div class="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success all_buttons" onClick={handleAddButtonClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
