import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap bg-white p-3 justify-center rounded-2xl gap-3 shadow-lg">
          <button onClick={() => setColor("red")} className='outline-none px-4 rounded-lg text-white' style={{backgroundColor : "red"}}>Red</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 rounded-lg text-white' style={{backgroundColor : "blue"}}>Blue</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 rounded-lg  text-white' style={{backgroundColor : "green"}}>Green</button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 rounded-lg  text-white' style={{backgroundColor : "pink"}}>Pink</button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 rounded-lg  text-white' style={{backgroundColor : "orange"}}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
