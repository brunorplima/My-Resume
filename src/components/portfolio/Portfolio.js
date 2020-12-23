import React from 'react';
import Project from './Project'
import iplogo from '../../images/iplogo-bg.PNG';
import allan from '../../images/allan-project.PNG';
import minesweeper from '../../images/minesweeper.PNG';

import './portfolio.scss';

const Portfolio = () => {
   return (
      <div className="portfolio-container d-flex justify-content-center align-items-center">
         <div className='portfolio d-flex flex-wrap justify-content-around'>
            <Project
               img={iplogo}
               bgSize='18rem'
               description='Online Book Store for Inheritance Publications'
               layerColor={'#rgba(26,83,92,.3)'}
               info={{
                  name: 'Inheritance Publications Online Store',
                  summary: 'An ecommerce website for Inheritance Publications. I improved their old website turning it into a modern looking website with better user experience resulted from the capabilities of searching, filtering and sorting of all more than 9 thousand products. Since its implementation the website has been easier to maintain and adapt to new changes. It uses Paypal payment system API. All the feedback received was positive.',
                  gitLink: '',
                  link: 'http://inhpubl.net',
               }}
            />

            <Project 
               img={allan} 
               bgSize='17rem'
               description="My son's online baby shower"
               info={{
                  name: "Allan's Baby Shower",
                  summary: "In times of COVID-19 I had the idea of celebrating my son's baby shower online. The website allows our guests to interact with us by sending us a message. The message is stored into Firebase Firestore and it is rendered by '/admin' page using Firebase Authentication. The admin page allows the administrator to approve or delete any message.",
                  gitLink: 'https://github.com/brunorplima/AllanBaltazar',
                  link: 'https://allanestachegando.web.app',
               }}
            />

            <Project 
               img={minesweeper} 
               bgSize='17rem'
               description='Minesweeper game'
               info={{
                  name: 'Bruno\'s Minesweeper',
                  summary: 'Minesweeper is a game that requires logic and induction in order to win. Perhaps this is the reason I like it very much. I decided, then, to develop one with an interesting style (usually the style for this game is quite boring). The game has three different levels and it records the ten best times for each level separately',
                  gitLink: 'https://github.com/brunorplima/minesweeper',
                  link: 'https://brunosminesweeper.web.app',
               }}
            />
         </div>
      </div>
   )
}

export default Portfolio
