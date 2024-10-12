import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React + Deploy To Vercel</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          The app is for deployment to Vercel with the help of GitHub Actions
        </p>
      </div>
      <p className="read-the-docs">
        Click on Counter 
      </p>
    </>
  )
}

export default App
