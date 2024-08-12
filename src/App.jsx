import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='counter-box'>
        <span className='display-count'>{count}</span>
      </div>
      <h1>SIMPLE COUNTER</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          +INCREAMENT
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          -DECREMENT
        </button>
        <button onClick={() => setCount(0)}>
          RESET
        </button>
        </div>
    </>
  )
}

export default App