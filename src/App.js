import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { TaskList } from "./components/TaskList";
import { BoxCard } from "./components/BoxCard";

export default function App() {
  const username = "Erick Mutwiri";
  // let count = 0;
  let [count, setCount] = useState(1);


  function handleAdd() {
    count++;
    setCount(count);
    // console.log(count);
  }

  function handleSub() {
    count--;
    setCount(count);
  }

  return (
    <>
      <Header />
      <hr/>
      <h1> {username} </h1>
      <p> Some description </p>
      <hr/>
      <div className="box">
        <p> {count} </p>
        <button onClick={handleAdd} className="add"> ADD </button>
        <button onClick={handleSub} className="sub"> SUB </button>
      </div>
      <hr/>
      <TaskList title="Random" subtitle="Test"/>
      <hr />
      <BoxCard result="success">
      <p className="title">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, accusamus.</p>
      </BoxCard>
      <BoxCard result="alert">
        <div className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, velit! Aspernatur minima itaque voluptates sit distinctio aperiam vel exercitationem accusamus est, deserunt cum ut sed.</p>
      </BoxCard>
      {/* <div className="box warning">
        <p className="title">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, accusamus.</p>
      </div>
      <div className="box alert">
        <p className="title">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, totam? Earum velit magnam saepe exercitationem amet corporis quod explicabo omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, accusamus.</p>
      </div> */}
      <Footer />
    </>
  );
}

// export const App = () => {
//   return (
//     <div>Arrow function </div>
//   )
// }

// export default App;
