import { useState } from 'react'
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import MainHeader from './components/MainHeader'

function App() {
 

  return (
    <div>
      <div>
        <ul>
          <li><NavLink to="/" >HOME</NavLink></li>
          <li><NavLink to="/about">ABOUT</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
          <li><NavLink to="/users">USERS</NavLink></li>
        </ul>
      </div>
     <Routes>
      <Route  path="/" element={<MainHeader />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users" element={<User />} />
      <Route path="*" element={<div>Page Not Found</div>} />
</Route>
     </Routes>
    </div>
  )
}

export default App
