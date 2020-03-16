import React from 'react';
import iplogo from '../../images/iplogo.gif';

import './portfolio.scss';

const Portfolio = () => {
   return (
      <div className="portfolio-container d-flex justify-content-around align-items-center flex-column  flex-md-row">
         <div>
            <a href="https://inheritance-publications.web.app/" target="_blank" rel="noopener noreferrer" className="work-container d-flex flex-column align-items-center">
               <img src={iplogo} alt="IP logo" className="ip-logo"/>
               <h4>Inheritance Publications</h4>
               <span>Ecommerce created for Inheritance Publication Inc. to improve the user experience and online presence of the company in order to increase sales</span>
            </a>
            <a className="project-details text-center d-flex justify-content-center" href="https://github.com/brunorplima/InhPubl" target="_blank" rel="noopener noreferrer">
               <span>Project Details - GitHub</span>
            </a>
         </div>

         {/* <div className="work-container d-flex flex-column align-items-center">
            <img src={app} alt="IP logo" className="app-logo"/>
             <h4>BBudget App</h4>
             <span>An iOS and Android app that records user’s incomes and expenses keeping track of the user’s financial situation</span>
         </div> */}
      </div>
   )
}

export default Portfolio
