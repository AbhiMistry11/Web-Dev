import React from 'react'
import me from '../assets/me.jpg'
import iron from '../assets/iron-man.webp'
import venom from '../assets/venom.webp'



const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='ME'>{props.name}</p>
        <img id='image' src={props.image} alt="me" />
        <p id='desc'>Description of  Abhi Mistry</p>
      
    </div>
  )
}

export default UserCard
