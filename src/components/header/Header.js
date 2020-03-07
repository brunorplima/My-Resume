import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
   return (
      <header className="container-fluid">
         <div className="row justify-content-between">
            <div className="col-3 offset-lg-1">
               <h1>BL</h1>
            </div>

            <div className="col-10 col-lg-8">
               <nav className="d-flex justify-content-around align-items-center">
                  <Link to="/" className="router-link">INTRO</Link>
                  <Link to="/" className="router-link">EDUCATION</Link>
                  <Link to="/" className="router-link">PORTFOLIO</Link>
                  <Link to="/" className="router-link">SKILLS</Link>
                  <Link to="/" className="router-link">CONTACT</Link>
               </nav>
            </div>
         </div>
      </header>
   )
}

export default Header
