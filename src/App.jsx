import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './Box';
function App() {
  const [count, setCount] = useState(0);
  const posts = [];

  for (let index = 0; index <= count; index++) {
    posts.push(index);
    
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
     { posts.map((post, index) =>
    <Fragment key={index}>
      <Box ></Box>
    </Fragment>) }
     
     
    </>
  )
}

export default App
