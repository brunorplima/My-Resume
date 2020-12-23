import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { IoIosMenu, IoMdClose } from 'react-icons/io';
import logo from '../../images/logo-icone-azul.png';

import './header.scss';

const Header = () => {

   const [position, setPosition] = useState(0);
   const [menuPressed, setMenuPressed] = useState(false);
   const [style, setStyle] = useState({});

   window.addEventListener('scroll', () => {
      setPosition(window.scrollY)
   })

   function clickMenu() {
      if (menuPressed) {
         setStyle({
            transform: 'translateX(3000px)',
            animationName: 'slide-out'
         });
         setMenuPressed(false);
      } else {
         setStyle({
            transform: 'translateX(0)',
            animationName: 'slide-in'
         })
         setMenuPressed(true);
      }
   }

   return (
      <header id="navbar" className="container-fluid" style={position <= 300 ? {padding: '.8rem 0'} : {}}>
         <div className="row justify-content-between">
            <div className="div-img col-1 offset-1">
               <img src={logo} alt="Bruno Lima logo" style={position > 300 ? {width: '2rem'} : {}}/>
            </div>

            <div className="col-9 col-md-8 col-lg-8">
               <nav className="justify-content-around align-items-center d-none d-md-flex">
                  <Link to="intro" smooth={true} duration={700} className="router-link d-none d-md-block">INTRO</Link>
                  <Link to="education" smooth={true} duration={700} className="router-link d-none d-md-block">EDUCATION</Link>
                  <Link to="skills" smooth={true} duration={700} className="router-link d-none d-md-block">SKILLS</Link>
                  <Link to="experience" smooth={true} duration={700} className="router-link d-none d-md-block">EXPERIENCE</Link>
                  <Link to="portfolio" smooth={true} duration={700} className="router-link d-none d-md-block">PORTFOLIO</Link>
                  <Link to="contact" smooth={true} duration={700} className="router-link d-none d-md-block">CONTACT</Link>
               </nav>

               <div className="menu-icon-container d-flex d-md-none justify-content-end">
                  <div className="menu-icon" style={position >= 300 ? {fontSize: '23pt', paddingRight: 0} : {}} onClick={clickMenu}>
                     {menuPressed ?
                        <IoMdClose /> :
                        <IoIosMenu />
                     }
                  </div>
               </div>
            </div>
         </div>

         <div className="nav-screen" style={style}>
            <nav className="d-flex flex-column align-items-center">
               <Link to="intro" smooth={true} duration={700} className="router-link" onClick={() => clickMenu()}>INTRO</Link>
               <Link to="education" smooth={true} duration={700} className="router-link" onClick={() => clickMenu()}>EDUCATION</Link>
               <Link to="skills" smooth={true} duration={700} className="router-link" onClick={() => clickMenu()}>SKILLS</Link>
               <Link to="portfolio" smooth={true} duration={700} className="router-link" onClick={() => clickMenu()}>EXPERIENCE</Link>
               <Link to="portfolio" smooth={true} duration={700} className="router-link" onClick={() => clickMenu()}>PORTFOLIO</Link>
               <Link to="contact" smooth={true} duration={700} className="router-link" onClick={() => clickMenu()}>CONTACT</Link>
            </nav>
         </div>
      </header>
   )
}

export default Header
