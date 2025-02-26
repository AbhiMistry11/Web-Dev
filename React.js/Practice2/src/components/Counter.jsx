import React from 'react'
import './Counter.css'
import { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
  return (
    <div className='counter1'>
      <p id='para'>You Have Clicked {count} Times</p>
      <button id='btn' onClick={()=>{
        setCount(count+1)
      }}>Click</button>
    </div>
  )
}

export default Counter
