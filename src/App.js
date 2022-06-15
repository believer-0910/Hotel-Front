import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

let count = 0;
let res = "";
const App = () => {
  const [timer, setTimer] = useState("");
  const [isBegin, setIsBegin] = useState(false);

  const begin = () => {
    setInterval(() => {
      count++;
      res += "  " + count;
      setTimer(res);
      console.log(count);
      if (count === 5) {
        count = 0;
        res = "";
      }
    }, 1000);
  };

  const reset = () => {
    count = 0;
    res = "";
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React</p>
        <button
          style={{ padding: "6px 20px", fontSize: "18px" }}
          onClick={() => {
            if (isBegin) reset();
            else {
              setIsBegin(true);
              begin();
            }
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