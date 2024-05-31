/* eslint-disable no-unused-vars */


import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [sticky, setSticky]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 150 ? setSticky(true) : setSticky(false);
        })

    },[]);

     const [mobileMenu ,setMobileMenu] = useState(false);
    const toggleMenu = () =>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
  return (
    <nav className={`container  ${sticky ?'dark-nav' : '' }`}>
   
        <h1 className='logo'>LDRP</h1>
        <ul className={mobileMenu ?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}> Home</Link>  </li>
        <li> <Link to='program' smooth={true} offset={-300} duration={500}>Departments</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About </Link> </li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link> </li> 
        <li><Link to='activities' smooth={true} offset={-260} duration={500}>Activities </Link> </li>
  
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact</Link> </li>
        </ul>
        <img src="/src/assets/menu-icon.png" alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
