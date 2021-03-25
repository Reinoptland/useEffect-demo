import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  console.log("WHAT IS COUNT:", counter); // 0 -> 1 -> 2

  useEffect(() => {
    // het "effect"
    async function fetchQuote() {
      const response = await axios.get("https://api.kanye.rest/");
      setQuote(response.data.quote);
      setLoading(false);
    }

    fetchQuote();

    return () => {
      // clean up
      setLoading(true);
      setQuote("");
      console.log("I GET RUN BEFORE THE NEXT EFFECT TAKES PLACE");
    };
  }, [counter]); // "" => "Tesla is cool" => "Stare in the mirror"
  // wanneer moet dit effect opnieuw worden uitgevoerd?

  return (
    <div className="App">
      {loading && <h1>LOADING</h1>}
      <p>{quote}</p>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
