import React from 'react'
import './Counter.css'
import { useState } from 'react'

const Counter = (props) => {
    // const [count,setCount] = useState(0);
  return (
    // <div className='counter1'>
    //   <p id='para'>You Have Clicked {count} Times</p>
    //   <button id='btn' onClick={()=>{
    //     setCount(count+1)
    //   }}>Click</button>
    // </div>
    <div>
       <input type="text" onChange={(e)=> props.setName(e.target.value)} />
       <p>Name state variable ki value inside the card : {props.name}</p>
    </div>
  )
}

export default Counter
