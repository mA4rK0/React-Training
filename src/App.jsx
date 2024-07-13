import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState("");

  async function getQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(`${data.content} - ${data.author}`);
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
      <div className='App'>
        <h1>{quote}</h1>
        <button onClick={getQuote}>Get Quote</button>
        </div>
    </>
  )
}

export default App;
