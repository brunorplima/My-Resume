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
                  summary: 'This project was a free work that eventually led me to work for the Inheritance Publication as a webmaster',
                  gitLink: 'http://um_link.com',
                  link: 'http://inhpubl.net',
               }}
            />

            <Project 
               img={allan} 
               bgSize='17rem'
               description="My son's online baby shower"
               info={{
                  name: "Allan's Baby Shower",
                  summary: "In times of COVID-19 I had the idea of celebrating my son's baby shower online. I decided to allow some interaction from our guests (users) within the page",
                  gitLink: 'http://um_link.com',
                  link: 'https://allanestachegando.web.app',
               }}
            />

            <Project 
               img={minesweeper} 
               bgSize='17rem'
               description='Minesweeper game'
               info={{
                  name: 'Minesweeper',
                  summary: 'Minesweeper is an interesting game. Sometime in my life I started to enjoy playing it. Then I decided to develope a nice one.',
                  gitLink: 'http://um_link.com',
                  link: 'https://brunosminesweeper.web.app',
               }}
            />
         </div>
      </div>
   )
}

export default Portfolio
