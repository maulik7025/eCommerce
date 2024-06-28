import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '/images/logo/logo.png';

const NavItems = () => {
    // const [] = useState(false);

    const [addSticky, setAddSticky] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false)
    const [socialToggle, setSocialToggle] = useState(false)

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            setAddSticky(true)
        } else {
            setAddSticky(false)
        }
    });

  return (
    <header className={`header-section style-4 ${addSticky ? "header-fixed" : ""}`}>
        <div className={`header-top d-md-none ${socialToggle? "open" : ""}`}>
            <div className='container'>
                <div className='header-top-area'>
                    <Link to="/signup" className='lab-btn me-3'>Create Account</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>

        {/* header bottom */}
        <div className='header-bottom'>
            <div className='container'>
                <div className='header-wrapper'>
                    {/* Logo */}
                    <div className='logo-search-acte'>
                        <div className='logo'>
                            <Link to="/">
                                <img src={logo} alt="Logo"></img>
                            </Link>
                        </div>
                    </div>
                    {/* Menu */}
                    <div className='menu-area'>
                        <div className='menu'>
                            <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact us</Link></li>
                            </ul>                           
                        </div>
                        <Link to="/signup" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                        <Link to="/login" className='d-none-d-md-block'>Login</Link>

                        {/* menu toggle */}
                        <div onClick={()=>setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle? "active" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        {/* social toggle */}
                        <div onClick={()=> {setSocialToggle(!socialToggle)}} className='ellepsis-bar d-md-none'>
                            <i className='icofont-info-square'></i>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </header>
  )
}

export default NavItems
