import React from "react";

function TodoItem({todoName, todoDate, onDeleteClick}) {
    
  return (
    <div class="container">
      <div class="row items_row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger all_buttons" onClick={() => onDeleteClick(todoName)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
