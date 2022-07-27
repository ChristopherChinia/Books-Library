import React from 'react'
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  background: "rgb(252, 116, 5)",
  color: "black",
  border: "none",
  padding: "10px 20px",
  margin: "5px",
  borderRadius: "5px",
  cursor: "pointer",
  textDecoration: "none",
  fontSize: "15px",
  fontFamily: "inherit",
  };

const NavBar = ({ isDarkMode, onDarkModeClick }) => {
  return (
    <div className='navbar'>
        <div className='navbar-top'>
        <h1>Book Libaries</h1>
       
        </div>
        
    <NavLink
    to="/"
    exact
    style={linkStyles}
    activeStyle={{
      background: "black",
      color:"rgb(252, 116, 5)",
    }}
  >
    Home
  </NavLink>
  <NavLink
    to="/bookstore"
    exact
    style={linkStyles}
    activeStyle={{
        background: "black",
        color:"rgb(252, 116, 5)",
      }}
  >
    BookStore
  </NavLink>
  <NavLink
    to="/about"
    exact
    style={linkStyles}
    activeStyle={{
        background: "black",
        color:"rgb(252, 116, 5)",
      }}
  >
    About
  </NavLink>
  <button className='btn' onClick={onDarkModeClick}> {isDarkMode ? "Dark" : "Light"}Mode</button>
</div>
  )
}

export default NavBar