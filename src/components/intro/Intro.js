import React from 'react';
import profile from '../../images/profile_image_cropped.jpg';

import './intro.scss';

const Intro = () => {
   return (
      <main className="intro d-flex">
         <div className="profile d-flex flex-column align-items-center">
            <div className="profile-image">
               <img src={profile} alt="Profile" />
            </div>
            <div className="profile-text">
               <h2 className="pt-center">Bruno Lima</h2>
               <p>Certified in Applied Software and Web Development at BCIT</p>
               <p>Focused on React development</p>
               <p>Looking for first experience as a React and React Native developer</p>
               <p className="pt-center">brunolima.cad@gmail.com</p>
               <p className="pt-center">(778) 682 7766</p>
            </div>
         </div>

         <div className="banner d-flex align-items-end">
            <div className="opacity-overlay"></div>
            <div className="banner-text">
               <p>Hi, I am</p>
               <h1>Bruno Lima</h1>
               <h3>Web developer</h3>
            </div>
         </div>
      </main>
   )
}

export default Intro
