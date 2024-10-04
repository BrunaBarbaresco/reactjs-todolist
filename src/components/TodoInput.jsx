import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodo, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        type="text"
        placeholder="Insira uma tarefa..."
      />
      <button
        onClick={() => {
          handleAddTodo(todoValue);
        }}
      >
        Adicionar
      </button>
    </header>
  );
}
