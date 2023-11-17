import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import sitelogo from '../creativemoods.png'

import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className='logo-container'>
       <img src= {sitelogo} alt="cloud site logo"/>
        <div className="logo">
          Creative Moods
        </div>
        </div>

        <div className="menu-icon" onClick={handleShowNavbar}>
          ▲
         </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="new_moodboard">New Moodboard</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar