
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav >
        <NavLink to="/" style={{margin:10}}>Home</NavLink>
        <NavLink to="/kids" style={{margin:10}}>Kids</NavLink>
            <NavLink to="/mobile">Mobile</NavLink>
      </nav>
    </>
  )
}

export default NavBar
