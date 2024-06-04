import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

import { FiAlignJustify } from "react-icons/fi";


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {

    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className='logo_img'>
        {/* <img src={logo} alt="" className='logo' /> */}

      </div>
      <ul className={mobileMenu? '':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} >سەرەکی</Link> </li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>کارەکانمان</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>دەربارەی ئێمە</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>وێنەکان</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>شایەتی کارەکانمان</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>پەیوەنی</Link></li>

      </ul>
      <FiAlignJustify className='menu-icon' onClick={toggleMenu} />

    </nav>
  )
}

export default Navbar
