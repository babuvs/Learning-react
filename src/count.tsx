import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount((count) => count + 1);
  }
  function reduceCount() {
    setCount((count) => count - 1);
  }
  return (
    <>
      <div>
        <button onClick={addCount}>Add count</button>
        <button onClick={reduceCount}>Reduce count</button>
      </div>
      <div className="card">
        <button>count is {count}</button>
      </div>
    </>
  );
}
