import React, { useState } from 'react'
import logo from "../Images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import './Nav.css'
import { Link } from 'react-router-dom';
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
                <Link to='/' >Home</Link>
            </li>
            <li>
                <Link to='/' >About</Link>
            </li>
            <li>
                 <Link to='/'>Service</Link>
            </li>
            <li>
                <Link to='/' >Menu</Link>
            </li>
            <li>
                <Link to='/' >Rersvation</Link>
            </li>
            <li>
                <Link to='/'>Order Online</Link>
            </li>
        </ul>
        <a href='/' class='login' >Login</a>
        <div className='toggle-btn' onClick={toggleMenu}>
        <FontAwesomeIcon icon={toggleIcon} />
        </div>
        <div className={`dropdown-menu ${menuOpen ? 'show' : ''}`} >
            
            <li>
                <Link to='/' onClick={handleDropItem} >Home</Link>
            </li>
            <li>
                <Link to='/about'onClick={handleDropItem} >About</Link>
            </li>
            <li>
                 <Link to='/service' onClick={handleDropItem} >Service</Link>
            </li>
            <li>
                <Link to='/menu' onClick={handleDropItem} >Menu</Link>
            </li>
            <li>
                <Link to='/booking' onClick={handleDropItem} >Rersvation</Link>
            </li>
            <li>
                <Link to='/order' onClick={handleDropItem} >Order Online</Link>
            </li>
            <li>
                <Link to='/login'class='login'onClick={handleDropItem} >Login</Link>
            </li>
        </div>
    </nav>
    </>
  )
}

export default Nav