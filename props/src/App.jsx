import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {

  return (
    <>
    <h1 className='bg-green-400 text-white mb-4'>tailwind test</h1>
    <Cards username = "Sahil" bTnText ="Click me"/>
    <Cards username = "Wani" />
    </>
  )
}

export default App
