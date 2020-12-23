import React from 'react';
import ipImage from '../../images/ip-homepage.PNG';

import './experience.scss';

const Experience = () => {
   return (
      <div className='exp-container d-flex justify-content-center align-items-center'>
         <div className='exp-left-bar'></div>
         
         <div className='exp d-flex'>
            <div className='exp-img'>
               <div className='exp-img-hover'>
                  <a 
                     className='exp-img-hover-button d-flex justify-content-center align-items-center'
                     href='https://inhpubli.now.sh/'
                     target='_blank'
                     rel="noopener noreferrer"
                  >
                     <div className='btn btn-light'>Visit website</div>
                  </a>
                  <img src={ipImage} alt='Inheritance Publication Online Store'/>
               </div>
            </div>

            <div className='exp-details'>
               <div className='exp-details-h3 d-flex justify-content-between align-items-center'>
                  <div className='exp-h3-bg'></div>
                  <h3>Inheritance Publications</h3>
                  <div>May 2020 - today</div>
               </div>
               <div className='exp-details-info'>
                  <p>I first started developing the company's website on October 2019 and it was completely delivered on May 2020. Before the final deployment I received a job offer from the CEO to be developer and maintainer of the website.</p>
                  <p>My duties as web developer at Inheritance Publications are, but not limited to:</p>
                  <ul>
                     <li>Develop new solutions to the company's website</li>
                     <li>Improve the architecture and layout of the website as well as determining the requirements needed to achieve such improvement</li>
                     <li>Create and optimize content for the website</li>
                     <li>Develop a database with all products data and other data essential to the correct functioning of the application</li>
                     <li>Maintain website and its database in order to ensure availability</li>
                     <li>Develop unit tests to ensure the correct functioning of the code logic</li>
                     <li>Perform security and quality controls</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Experience
