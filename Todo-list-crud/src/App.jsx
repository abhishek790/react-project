import Todo from "./Todo/Todo";
import { useState } from "react";

function App() {
  const [todolist, setTodoList] = useState([]);
  const [todoitem, setTodoItem] = useState("");
  const [toggle, setToggle] = useState(true);

  const Edit = (item) => {
    inp.value = item.todoitem;
    setToggle(!toggle);
  };

  const addList = () => {
    const add = {
      id: Date.now(),
      todoitem: todoitem,
    };
    setTodoList([...todolist, add]);
  };

  const deleteItem = (id) => {
    console.log(id);
    setTodoList(todolist.filter((item) => (item.id !== id ? true : false)));
  };

  return (
    <>
      <Todo
        setTodoItem={setTodoItem}
        addList={addList}
        Toggle={Edit}
        todolist={todolist}
        toggle={toggle}
        deleteItem={deleteItem}
      />
    </>
  );
}

export default App;
