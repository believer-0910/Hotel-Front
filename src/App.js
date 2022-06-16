import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

let count = 0;
let res = "";
const App = () => {
  const [timer, setTimer] = useState("");

  const begin = () => {
    res = ""; 
    res += "  " + count;
    count++;
    setTimer(res);
    console.log(count);
    if (count === 6) {
      count = 0;
    }
  };

  const onClick = () => {
    begin();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React</p>
        <button
          style={{ padding: "6px 20px", fontSize: "18px" }}
          onClick={() => {
            onClick();
          }}
        >
          Click
        </button>
        <pre>{timer}</pre>
      </header>
    </div>
  );
};

export default App;