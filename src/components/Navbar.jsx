import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars } from "react-icons/fa";
import './navbar.css'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }

    const closeDrower = () => {
         setIsOpen(false)
    }
    return (
        <div>
            <div className="navbar">
                <div className="navbar-logo">Wev dev mastry</div>
                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <button className='close-drawer' onClick={closeDrower}><FaTimes /></button>
                    <li><Link to={'/'} onClick={closeDrower}>Home</Link></li>
                    <li><Link to={'/about'} onClick={closeDrower}>About</Link></li>
                    <li><Link to={'/services'} onClick={closeDrower}>Services</Link></li>
                    <li><Link to={'/contact'} onClick={closeDrower}>Contact</Link></li>
                </ul>
                <div className='menu-icon' onClick={toggleMenu}>
                     <FaBars/>
                </div>
            </div>
        </div>
    ) 
}

export default Navbar