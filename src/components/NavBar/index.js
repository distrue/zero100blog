import React from 'react'
import { Link } from 'gatsby'

const NavBar = ({ toggleNavbar, isActive }) => (
  <div>
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <h3 className='navbar-item'>
            <strong>Zero100</strong>
          </h3>
          <Link to='/' className='navbar-item'>
            <strong>About</strong>
          </Link>
          <Link to='/blog' className='navbar-item'>
            <strong>Blog</strong>
          </Link>
        </div> 
      </nav>
  </div>
)

export default NavBar
