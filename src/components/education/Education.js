import React from 'react';
import Credential from './Credential'
import bcit from '../../images/bcit.png';
import greystone from '../../images/greystone.png';

import './education.scss';

const Education = () => {

   const web = {
      title: 'Applied Web Development',
      period: 'Aug, 2018 - Dec, 2019',
      description: [
         'Core courses provide a solid understanding of best practices in web page design, data modelling, planning, documentation and a variety of scripting tools with an emphasis on HTML5,CSS3, JavaScript, JQuery and creating web graphics.',
         'Elective choices include: Node.js, React and Modern JavaScript, IT Project Management, Android and Mobile Applications, and PHP.',
         'At the end of this program, graduates will be able to develop, build and manage web sites to industry standards.'
      ]
   }

   const software = {
      title: 'Applied Software Development',
      period: 'May, 2017 - June, 2018',
      description: [
         'This Associate Certificate from BCIT Computing focuses on writing code in multiple languages including Java, C#, C++, C and Swift. Elective options include QA and Agile.',
         'Successful completion of the ASD program provides skills in IT systems analysis, requirements discovery, critical thinking, process mapping, documentation, technical communication, presentations, and team work.',
         'Participants will gain hands-on experience and learn best practices from industry experts in the use of multiple programming languages and software development tools.'
      ]
   }

   const custService = {
      title: 'Customer Service',
      period: 'Mar, 2016 - Feb, 2017',
      description: [
         'Develop a solid foundation in customer service skills and prepare for entry into the hospitality, tourism and travel industries.',
         'Learn how to effectively build your product and service knowledge in order to provide relevant information to customers.',
         'Programs taught by industry professionals and highly-qualified instructors.'
      ]
   }

   return (
      <div id="education" className="edu-container">
         <div className="bcit-logo">
            <img src={bcit} alt="BCIT" />
         </div>
         <div className="bcit-credentials">
            <Credential title={web.title} period={web.period} description={web.description} isFirst={true}/>
            <Credential title={software.title} period={software.period} description={software.description} />
         </div>

         <div className="bcit-logo greystone-logo">
            <img src={greystone} alt="Greystone College" />
         </div>
         <div className="bcit-credentials">
            <Credential title={custService.title} period={custService.period} description={custService.description} isFirst={true}/>
         </div>
      </div>
   )
}

export default Education
