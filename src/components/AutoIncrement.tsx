import { useEffect, useState } from "react";

export default function AutoIncrementCount() {
  let [count, setCount] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);
  //   const interval = setTimeout(() => {
  //       setCount(count + 1);
  //     }, 1000);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
     
    }, 10000);
    console.log('count changed');
    
    return () => clearInterval(interval);
  }, [count]);
   

   function addCounter() {
      setCounter(counter + 1);
   }

  return (
      <div className="card w-50 m-auto my-5">
        <button className="btn btn-primary w-1000">count is {count}</button>
        <button className="btn btn-primary w-1000" onClick={addCounter}>count is {counter}</button>
      </div>
  );
}
