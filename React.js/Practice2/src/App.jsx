import { useState } from 'react'
import './App.css'
import Counter from './components/Counter';

function App() {
  const[name,setName] = useState('');
  return (
   <div>
      <Counter name={name} setName={setName} />
      <p>i am inside the parent container : {name}</p>
   </div>
  )
}

export default App
