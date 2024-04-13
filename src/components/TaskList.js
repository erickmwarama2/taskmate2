import { useState } from "react";
import { TaskCard } from "./TaskCard";

export const TaskList = (props) => {
  const [show, setShow] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Record Lectures",
      completed: true,
    },
    {
      id: 2,
      name: "Edit Lectures",
      completed: false,
    },
    {
      id: 3,
      name: "Watch Lectures",
      completed: false,
    },
  ]);

  function handleDelete(id) {
    console.log(id);
    setTasks(tasks.filter((task) => id !== task.id));
  }

  return (
    <>
      <h1> Task List {props.title} {props.subtitle} </h1>
      <ul>
        {tasks.map((task, index) => (
            <TaskCard task={task}/>
        ))}
      </ul>
      <hr />
      <button onClick={() => setShow(!show)}>Toggle</button>
      <ul>
        {show &&
          tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
          ))}
      </ul>
    </>
  );
};
