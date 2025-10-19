import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function ToDoList() {
  let [toDoArr, setToDoArr] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTask, setNewTask] = useState("");

  let updateToDoList = () => {
    setToDoArr([...toDoArr, { task: newTask, id: uuidv4() }]);
    setNewTask("");
  };

  return (
    <div>
      <input
        placeholder="Add a task"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      ></input>
      <button onClick={updateToDoList}> Add Task</button>
      <br />
      <hr></hr>
      <h4>To Do List</h4>
      <ul>
        {toDoArr.map((todo) => {
          return <li key={todo.id}>{todo.task}</li>;
        })}
      </ul>
    </div>
  );
}

// export { ToDoList };
