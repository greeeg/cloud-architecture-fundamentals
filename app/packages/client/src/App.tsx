import React, { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL!}/assets`)
      .then((res) => res.json())
      .then((res) => {
        setText(res[0].name);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{text}</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
