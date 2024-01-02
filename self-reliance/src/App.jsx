import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SelfReliance from './SelfReliance'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <SelfReliance/>
      </div>
    
    </>
  )
}

export default App
