import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './Box';
function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');
  const [boxList, setBoxList] = useState([]);
  function addBox() {
    const boxes = boxList || [];
    boxes.push(color);
    setBoxList([...boxes])

  }
  return (
    <>
      <div>
      <button onClick={() => setCount((count) => count + 1)}>
          Add count
        </button>
       <button onClick={() => setCount((count) => count - 1)}>
          Reduce count
        </button>
      </div>
      <div className="card">
        <button>
          count is {count}
        </button>
       
      </div>
      <div>
        <input type='color'  onChange={e => setColor(e.target.value)}/>  <button onClick={addBox}>
          Add
        </button>
      </div>
     { boxList.map((color, index) =>
    <Fragment key={index}>
      <Box  color={color}></Box>
    </Fragment>) }
     
     
    </>
  )
}

export default App
