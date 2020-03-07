import React from 'react';
import {FaRegArrowAltCircleUp} from 'react-icons/fa';
import { animateScroll } from 'react-scroll';

import './footer.scss';

const Footer = () => {
   return (
      <footer className="footer d-flex justify-content-between align-items-center">
         <span>© 2020 By Bruno Lima</span>
         <a href="#navbar" className="top-icon" onClick={() => animateScroll.scrollToTop()}><FaRegArrowAltCircleUp /></a>
      </footer>
   )
}

export default Footer
