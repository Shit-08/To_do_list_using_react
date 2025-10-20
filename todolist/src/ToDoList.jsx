import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function ToDoList() {
  let [toDoArr, setToDoArr] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTask, setNewTask] = useState("");

  let updateToDoList = () => {
    setToDoArr((prevToDos) => {
      return [...prevToDos, { task: newTask, id: uuidv4(), isDone: false }];
    });
    setNewTask("");
  };

  let deleteToDo = (id) => {
    let newToDo = toDoArr.filter((todo) => {
      return todo.id != id;
    });
    setToDoArr(newToDo);
  };

  let markAsDone = (id) => {
    let newToDo = toDoArr.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      } else {
        return todo;
      }
    });
    setToDoArr(newToDo);
  };

  let markAllDone = () => {
    setToDoArr((prevToDos) => {
      return prevToDos.map((todo) => ({ ...todo, isDone: true }));
    });
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
          return (
            <li key={todo.id}>
              <span
                style={todo.isDone ? { textDecoration: "line-through" } : {}}
              >
                {" "}
                {todo.task}{" "}
              </span>{" "}
              &nbsp; &nbsp;
              <button onClick={() => deleteToDo(todo.id)}>Delete</button>
              &nbsp;
              <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
            </li>
          );
        })}
      </ul>
      <button onClick={markAllDone}> Mark All task as Done</button>
    </div>
  );
}

// export { ToDoList };
