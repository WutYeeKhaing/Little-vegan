import React, { useState } from 'react'
import logo from "../Images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import './Nav.css'
const Nav = () => {
    const [menuOpen,setMenuOpen]=useState(false);
    const [toggleIcon,setToggleIcon]=useState(faBars);
    const toggleMenu = () =>{
         setMenuOpen(!menuOpen);
         setToggleIcon(menuOpen ? faBars : faXmark);
    }
    const handleDropItem =()=>{
        setMenuOpen(false);
        setToggleIcon(faBars)
    }

  return (
    <>
    <nav>
        <div className='header'>
        <img src={logo} alt="#logo"/>
          <h1> Little Vegan</h1> 
        </div>
       
        <ul className='links'>
            <li>
                <a href='/' >Home</a>
            </li>
            <li>
                <a href='/' >About</a>
            </li>
            <li>
                <a href='/' >Service</a>
            </li>
            <li>
                <a href='/' >Menu</a>
            </li>
            <li>
                <a href='/' >Rersvation</a>
            </li>
            <li>
                <a href='/' >Order Online</a>
            </li>
        </ul>
        <a href='/' class='login' >Login</a>
        <div className='toggle-btn' onClick={toggleMenu}>
        <FontAwesomeIcon icon={toggleIcon} />
        </div>
        <div className={`dropdown-menu ${menuOpen ? 'show' : ''}`} >
            
            <li>
                <a href='/' onClick={handleDropItem} >Home</a>
            </li>
            <li>
                <a href='/' onClick={handleDropItem} >About</a>
            </li>
            <li>
                <a href='/' onClick={handleDropItem} >Service</a>
            </li>
            <li>
                <a href='/' onClick={handleDropItem} >Menu</a>
            </li>
            <li>
                <a href='/' onClick={handleDropItem} >Rersvation</a>
            </li>
            <li>
                <a href='/' onClick={handleDropItem} >Order Online</a>
            </li>
            <li>
                <a href='/'class='login'onClick={handleDropItem} >Login</a>
            </li>
        </div>
    </nav>
    </>
  )
}

export default Nav