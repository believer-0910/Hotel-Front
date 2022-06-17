import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const onClickAction = () => {

    setCount(count+1);

    if (count === 5) {
      setCount(0);
    }
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello React</p>
        <button
          style={{ padding: "6px 20px", fontSize: "18px" }}
          onClick={onClickAction}
        >
          Click
        </button>
        <pre>{count}</pre>
      </header>
    </div>
  );
};

export default App;