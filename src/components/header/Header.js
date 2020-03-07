import React from 'react';
import { Link } from 'react-scroll';

import './header.scss';

const Header = () => {
   return (
      <header id="navbar" className="container-fluid">
         <div className="row justify-content-between">
            <div className="col-3 offset-lg-1">
               <h1>BL</h1>
            </div>

            <div className="col-10 col-lg-8">
               <nav className="d-flex justify-content-around align-items-center">
                  <Link to="intro" smooth={true} duration={600} className="router-link">INTRO</Link>
                  <Link to="education" smooth={true} duration={700} className="router-link">EDUCATION</Link>
                  <Link to="portfolio" smooth={true} duration={800} className="router-link">PORTFOLIO</Link>
                  <Link to="skills" smooth={true} duration={900} className="router-link">SKILLS</Link>
                  <Link to="contact" smooth={true} duration={1000} className="router-link">CONTACT</Link>
               </nav>
            </div>
         </div>
      </header>
   )
}

export default Header
