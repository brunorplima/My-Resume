import React from 'react';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti'

import './social-media.scss';

const SocialMedia = () => {
   return (
      <div className="social-media d-flex justify-content-center align-items-center">
         <div className="social-media-imgs d-flex justify-content-around">
            <a href="https://www.linkedin.com/mwlite/in/bruno-lima-673955159" target="_blank" rel="noopener noreferrer" ><FaLinkedin className="sm-icons fa-linkedin"/></a>
            <a href="https://www.facebook.com/profile.php?id=100002401369385&ref=bookmarks" target="_blank" rel="noopener noreferrer" ><FaFacebookSquare className="sm-icons fa-facebook"/></a>
            <a href="https://www.instagram.com/bruno.fg58/?hl=en" target="_blank" rel="noopener noreferrer" ><TiSocialInstagram className="sm-icons ti-insta" style={{fontSize: '45px', transform: 'translateY(-3px)'}}/></a>
         </div>
      </div>
   )
}

export default SocialMedia
