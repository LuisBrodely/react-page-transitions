import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo'>
            <Link className='nav-link' to={'/'}>Brodely.</Link>
        </div>
        <div className="nav-links">
            <Link className='nav-link' to={'/'}>Home</Link>
            <Link className='nav-link' to={'/about'}>About</Link>
            <Link className='nav-link' to={'/contact'}>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar