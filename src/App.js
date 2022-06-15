import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [one, setOne] = useState("");
  let [two, setTwo] = useState("");
  let [three, setThree] = useState("");
  let [four, setFour] = useState("");
  let [five, setFive] = useState("");
  let [six, setSix] = useState("");
  let oneFunc = () => {
    setOne((one = ""));
    setTwo((two = ""));
    setThree((three = ""));
    setFour((four = ""));
    setFive((five = ""));
    setSix((six = 0));

    setInterval(() => {
      setOne((one = 1));
    }, 1000);

    setInterval(() => {
      setTwo((two = 2));
    }, 2020);

    setInterval(() => {
      setThree((three = 3));
    }, 2800);

    setInterval(() => {
      setFour((four = 4));
    }, 4423);

    setInterval(() => {
      setFive((five = 5));
    }, 5230);

    setInterval(() => {
      setSix((six = 6));
    }, 6300);
  };
  if (six === 6) {
    oneFunc();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React</p>
        <button
          style={{ padding: "6px 20px", fontSize: "18px" }}
          onClick={oneFunc}
        >
          Click
        </button>
        <pre>
          {one} {two} {three} {four} {five}
        </pre>
      </header>
    </div>
  );
}

export default App;