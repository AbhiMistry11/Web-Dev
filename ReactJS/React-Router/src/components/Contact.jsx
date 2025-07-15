import React from 'react'
import { useNavigate } from 'react-router-dom'


const Contact = () => {
  const navigate = useNavigate();
 function clickHandler() {
  navigate('/about'); // Navigate to the About page
 }
  function backHandler() {
  navigate(-1); // Go back to the previous page
 }

  return (
    <div>
        <p>Welcome to the Contact Page!</p>
        <button onClick={clickHandler} >Move to About Page</button>
        <button onClick={backHandler} >Go Back</button>
    </div>
  )
}

export default Contact
