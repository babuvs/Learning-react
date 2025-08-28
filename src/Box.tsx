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
      <div className="card w-50 m-auto my-5 px-5 py-5">
        <input type="color" className="form-control form-control-lg" onChange={(e) => setColor(e.target.value)} />{" "}
        <button className="btn btn-primary w-50 m-auto" onClick={() => addBox()}>Add</button>
      </div>
      <div className="row mx-auto">
 {boxList.map((color, index) => (
  <div className="col-3">
        <div
          className="p-5 card h-10  my-2"
          key={index}
          style={{ borderColor: color, background: color }}
        ></div>
        </div>
      ))}
      </div>
     
    </>
  );
}
