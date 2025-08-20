import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
     
    </>
  )
}

export default App
