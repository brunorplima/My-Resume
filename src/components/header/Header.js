import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { IoIosMenu, IoMdClose } from 'react-icons/io';
import logo from '../../images/logo-icone-azul.png';

import './header.scss';

const Header = () => {

   const [position, setPosition] = useState(0);
   const [menuPressed, setMenuPressed] = useState(false);

   window.addEventListener('scroll', () => {
      setPosition(window.scrollY)
   })

   return (
      <header id="navbar" className="container-fluid" style={position <= 300 ? {padding: '.8rem 0'} : {}}>
         <div className="row justify-content-between">
            <div className="col-1 offset-1">
               <img src={logo} alt="Bruno Lima logo" style={position > 300 ? {width: '2rem'} : {}}/>
            </div>

            <div className="col-9 col-md-8 col-lg-8">
               <nav className="justify-content-around align-items-center d-none d-md-flex">
                  <Link to="intro" smooth={true} duration={600} className="router-link d-none d-md-block">INTRO</Link>
                  <Link to="education" smooth={true} duration={700} className="router-link d-none d-md-block">EDUCATION</Link>
                  <Link to="portfolio" smooth={true} duration={800} className="router-link d-none d-md-block">PORTFOLIO</Link>
                  <Link to="skills" smooth={true} duration={900} className="router-link d-none d-md-block">SKILLS</Link>
                  <Link to="contact" smooth={true} duration={1000} className="router-link d-none d-md-block">CONTACT</Link>
               </nav>

               <div className="menu-icon-container d-flex d-md-none justify-content-end">
                  <div className="menu-icon" style={position >= 300 ? {fontSize: '23pt', paddingRight: 0} : {}} onClick={() => setMenuPressed(!menuPressed)}>
                     {menuPressed ?
                        <IoMdClose /> :
                        <IoIosMenu />
                     }
                  </div>
               </div>
            </div>
         </div>

         {menuPressed ?
         
            <div className="nav-screen" style={position >= 300 ? {left: 0} : {}}>
               <nav className="d-flex flex-column align-items-center">
                  <Link to="intro" smooth={true} duration={600} className="router-link" onClick={() => setMenuPressed(!menuPressed)}>INTRO</Link>
                  <Link to="education" smooth={true} duration={700} className="router-link" onClick={() => setMenuPressed(!menuPressed)}>EDUCATION</Link>
                  <Link to="portfolio" smooth={true} duration={800} className="router-link" onClick={() => setMenuPressed(!menuPressed)}>PORTFOLIO</Link>
                  <Link to="skills" smooth={true} duration={900} className="router-link" onClick={() => setMenuPressed(!menuPressed)}>SKILLS</Link>
                  <Link to="contact" smooth={true} duration={1000} className="router-link" onClick={() => setMenuPressed(!menuPressed)}>CONTACT</Link>
               </nav>
            </div>
             :
            null
         }
      </header>
   )
}

export default Header
