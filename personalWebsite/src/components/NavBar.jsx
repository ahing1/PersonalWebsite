import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <nav className='fixed top-0 right-0 mt-5'>
            <NavLink className='px-4 mr-3' to="/">
                Home
            </NavLink>
            <NavLink className='px-4 mr-3' to="/about">
                About
            </NavLink>
            <NavLink className='px-4 mr-3' to="/projects">
                Projects
            </NavLink>
            <NavLink className='px-4 mr-12' to="/contact">
                Contact
            </NavLink>
        </nav>
    </div>
  )
}

export default NavBar