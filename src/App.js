import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [quote, setQuote] = useState("");

  console.log("WHAT IS COUNT:", counter); // 0 -> 1 -> 2

  useEffect(() => {
    // het "effect"
    async function fetchQuote() {
      const response = await axios.get("https://api.kanye.rest/");
      setQuote(response.data.quote);
    }

    fetchQuote();
  }, []); // wanneer moet dit effect opnieuw worden uitgevoerd?

  return (
    <div className="App">
      <p>{quote}</p>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
