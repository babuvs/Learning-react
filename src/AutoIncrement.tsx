import { useEffect, useState } from "react";

export default function AutoIncrementCount() {
  const [count, setCount] = useState<number>(0);
  //   const interval = setTimeout(() => {
  //       setCount(count + 1);
  //     }, 1000);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);
  return (
    <>
      <div className="card w-50 m-auto my-5">
        <button className="btn btn-primary w-1000">count is {count}</button>
      </div>
    </>
  );
}
