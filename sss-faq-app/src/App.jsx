import { useState } from 'react'
import './App.css'
import SssFaq from './SssFaq'

function App() {
  const [active, setActive] = useState("")


  return (
    
      <div>
        <h1>Sıkça Sorulan Sorular</h1>
        <SssFaq title="Soru 1" active={active} setActive={setActive}/>
        <SssFaq title="Soru 2" active={active} setActive={setActive}/>
        <SssFaq title="Soru 3" active={active} setActive={setActive}/>
        <SssFaq title="Soru 4" active={active} setActive={setActive}/>
        <SssFaq title="Soru 5" active={active} setActive={setActive}/>
      </div>
      
    
  )
}

export default App
