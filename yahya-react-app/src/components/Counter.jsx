import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ backgroundColor: "lightblue", textAlign: "center" }}>
      <div>
        <h1>yahya</h1>
      </div>

      <h1>{count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        style={{ backgroundColor: "yellow" }}
      >
        Click me
      </button>
    </div>
  );
}


export default Counter;