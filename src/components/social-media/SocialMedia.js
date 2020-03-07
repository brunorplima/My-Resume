import React from 'react';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti'

import './social-media.scss';

const SocialMedia = () => {
   return (
      <div className="social-media d-flex justify-content-center align-items-center">
         <div className="social-media-imgs d-flex justify-content-around">
            <FaLinkedin className="sm-icons fa-linkedin"/>
            <FaFacebookSquare className="sm-icons fa-facebook"/>
            <TiSocialInstagram className="sm-icons ti-insta" style={{fontSize: '45px', transform: 'translateY(-3px)'}}/>
         </div>
      </div>
   )
}

export default SocialMedia
