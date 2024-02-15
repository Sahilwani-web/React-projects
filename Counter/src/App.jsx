import { useState } from 'react'
import './App.css'

function App() {
 let [counter, setCounter] =   useState(5)



const addValue = () =>{
  console.log("added successfully", Math.random());
   counter =  counter + 1
   setCounter(counter)

}

const deleteValue = () =>{
  console.log("added successfully", Math.random());
   counter =  counter - 1
   setCounter(counter)

}
  return (
    <>
    
    <h1>Counter</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <button onClick={deleteValue}>Delete Value</button>
    </>
  )
}

export default App
