import React from "react";
import "./TodoStyles.css";
function Todo({ setTodoItem, addList, Edit, todolist, toggle, deleteItem }) {
  return (
    <div>
      <div className="border">
        <h1>Todo List App</h1>
        <div className="input-field">
          <input
            type="text"
            className="input"
            onChange={(e) => setTodoItem(e.target.value)}
          />
          <button className="edit go" onClick={addList}>
            {toggle ? "Go" : "edit"}
          </button>
        </div>

        {todolist.map((item) => {
          return (
            <div className="list-items">
              <p>{item.todoitem}</p>
              <div className="click">
                <button className="edit-list" onClick={() => Edit(item)}>
                  Edit
                </button>
                <button className="Delete" onClick={() => deleteItem(item.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
