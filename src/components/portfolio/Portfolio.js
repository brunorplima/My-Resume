import React from 'react';
import iplogo from '../../images/iplogo.gif';
import app from '../../images/app-google-store.png';

import './portfolio.scss';

const Portfolio = () => {
   return (
      <div className="portfolio-container d-flex justify-content-around">
         <div className="work-container d-flex flex-column align-items-center">
             <img src={iplogo} alt="IP logo" className="ip-logo"/>
             <p>Inheritance Publications</p>
             <span>Ecommerce created for Inheritance Publication Inc. to improve the user experience and online presence of the company in order to increase sales</span>
         </div>

         <div className="work-container d-flex flex-column align-items-center">
            <img src={app} alt="IP logo" className="app-logo"/>
             <p>BBudget App</p>
             <span>An iOS and Android app that records user’s incomes and expenses keeping track of the user’s financial situation</span>
         </div>
      </div>
   )
}

export default Portfolio
