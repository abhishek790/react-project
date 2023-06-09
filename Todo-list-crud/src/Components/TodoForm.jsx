import React from "react";

function TodoForm({ handleSubmit, todo, setTodo, editId }) {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>{editId ? "Edit" : "Go"}</button>
    </form>
  );
}

export default TodoForm;
