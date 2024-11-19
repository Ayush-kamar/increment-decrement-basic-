import React from 'react'
import { useState } from 'react'
import './App.css'
const App = () => {
  const [state , Setstate] = useState(0)
  const incre = ()=>{
    Setstate(state+1)
  }
  const decre = ()=>{
    Setstate(state-1)
  }
  return (
    <>
       <div className='container'>
        <div className='count'>{state}
        <div className='btn'>
          <button onClick={incre}>increment</button>
          <button onClick={decre}>decrement</button>
        </div>
        </div>
        
       </div>
    </>
  )
}

export default App
