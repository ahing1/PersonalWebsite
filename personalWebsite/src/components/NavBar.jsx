import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { Link } from 'react-scroll'

function NavBar() {
  return (
    <div>
        <nav className='fixed top-0 right-0 mt-5'>
            <Link className='px-4 mr-3' to="home" smooth={true} duration={500}>
                Home
            </Link>
            <Link className='px-4 mr-3' to="about" smooth={true} duration={500}>
                About
            </Link>
            <Link className='px-4 mr-3' to="projects" smooth={true} duration={500}>
                Projects
            </Link>
            <Link className='px-4 mr-12' to="contact" smooth={true} duration={500}>
                Contact
            </Link>
        </nav>
    </div>
  )
}

export default NavBar