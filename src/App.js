import { useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [quote, setQuote] = useState("");

  console.log("WHAT IS COUNT:", counter); // 0 -> 1 -> 2

  const response = axios.get("https://api.kanye.rest/");
  response.then((json) => {
    setQuote(json.data.quote);
  });

  return (
    <div className="App">
      <p>{quote}</p>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
