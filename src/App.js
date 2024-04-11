import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";

export default function App() {
  const username = "Erick Mutwiri";
  // let count = 0;
  let [count, setCount] = useState(1);
  const [show, setShow] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Record Lectures',
      completed: true
    },
    {
      id: 2,
      name: 'Edit Lectures',
      completed: false
    },
    {
      id: 3,
      name: 'Watch Lectures',
      completed: false
    }
  ]);

  function handleAdd() {
    count++;
    setCount(count);
    // console.log(count);
  }

  function handleSub() {
    count--;
    setCount(count);
  }

  function handleDelete(id) {
    console.log(id);
    setTasks(tasks.filter((task) => id !== task.id));
  }

  return (
    <>
      <Header />
      <hr/>
      <h1> {username} </h1>
      <p> Some description </p>
      <hr/>
      <Footer />
      <hr/>
      <div className="box">
        <p> {count} </p>
        <button onClick={handleAdd} className="add"> ADD </button>
        <button onClick={handleSub} className="sub"> SUB </button>
      </div>
      <hr/>
      <h1> Task List </h1>
      <ul>
        { tasks.map(({id, name, completed}, index) => (
        <li key={id} className={completed ? 'completed': 'incomplete'}>
          <span>{id} - {name}</span>
          <button onClick={() => handleDelete(id)} className="sub">Delete</button>
        </li>
        )) }
      </ul>
      <hr/>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <ul>
        { show && tasks.map(({id, name, completed}, index) => (
        <li key={id}>
          <span>{id} - {name}</span>
          <button onClick={() => handleDelete(id)} className="sub">Delete</button>
        </li>
        )) }
      </ul>
    </>
  );
}

// export const App = () => {
//   return (
//     <div>Arrow function </div>
//   )
// }

// export default App;
