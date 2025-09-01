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
      <div className="text-center mt-5">
        <button className="btn btn-primary mx-3" onClick={addCount}>Add count</button>
        <button className="btn btn-info" onClick={reduceCount}>Reduce count</button>
      </div>
      <div className="card m-5 w-50 mx-auto">
        <button className="btn btn-outline-info">count is {count}</button>
      </div>
    </>
  );
}
