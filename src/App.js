import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function App() {
  const username = "Erick Mutwiri";

  return (
    <>
      <Header />
      <hr/>
      <h1> {username} </h1>
      <p> Some description </p>
      <hr/>
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
