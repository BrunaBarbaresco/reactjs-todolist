import React from "react";

export default function TodoCard(props) {
  const { children, index, handleDeleteTodo, handleEditTodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
