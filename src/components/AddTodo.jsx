import React from "react";
import { useState } from "react";

function Addtodo({onNewItem}) {
  const [todoName, settodoName] = useState("");
  const [todoDate, setDueDate] = useState("");

  const handleNameChange = (e)=>{
    settodoName(e.target.value);
    
  };
  const handleDateChange = (e)=>{
    setDueDate(e.target.value);
    
  };

  const handleAddButtonClick = ()=>{
    onNewItem(todoName, todoDate)
    settodoName("");
    setDueDate("");

  }


  return (
    <div class="container text-center">
      <div class="row items_row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo here" onChange={handleNameChange} value={todoName} />
        </div>
        <div class="col-4">
          <input type="date" onChange={handleDateChange} value={todoDate}/>
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
