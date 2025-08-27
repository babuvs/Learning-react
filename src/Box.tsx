import { useState } from "react";
import "./App.css";
export default function Box() {
  const [color, setColor]: [string, any] = useState("red");
  const [boxList, setBoxList] = useState<string[]>([]);

  function addBox() {
    setBoxList([...boxList, color]);
  }
  return (
    <>
      <div>
        <input type="color" onChange={(e) => setColor(e.target.value)} />{" "}
        <button onClick={() => addBox()}>Add</button>
      </div>
      {boxList.map((color, index) => (
        <div
          className="box"
          key={index}
          style={{ borderColor: color, background: color }}
        ></div>
      ))}
    </>
  );
}
