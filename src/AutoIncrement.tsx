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
      <div className="card">
        <button>count is {count}</button>
      </div>
    </>
  );
}
