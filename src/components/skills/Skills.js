import React from 'react';
import Skill from './Skill';

import './skills.scss';

const Skills = () => {
   return (
      <div className="skills">
         <div className="skills-intro d-flex flex-column align-items-center">
            <p className="skills-text">
               Ability to work in a team using personal and digital means to maintain communication, Design of web and mobile apps using various available tools to enhance and test user experience. Use of Javascript frameworks and libraries to give life to those designs.
            </p>
            <ul className="d-flex">
               <div>
                  <li>Quick learner</li>
                  <li>Passionate about programming and UI development</li>
                  <li>Hard worker</li>
                  <li>Good communication</li>
               </div>
               <div>
                  <li>Disciplined</li>
                  <li>Organized</li>
                  <li>Problem solver</li>
                  <li>Detail oriented</li>
               </div>
            </ul>
         </div>
         
         <div className="d-flex justify-content-center">
            <div className="skills-container">
               <Skill skill="Web Design" width="50%" time="2 years"/>
               <Skill skill="HTML" width="80%" time="3 years"/>
               <Skill skill="CSS/SASS" width="70%" time="3 years"/>
               <Skill skill="Javascript/ES6" width="80%" time="1 year"/>
               <Skill skill="OO Programming" width="85%" time="3 year"/>
               <Skill skill="SQL/NoSQL" width="70%" time="2 year"/>
               <Skill skill="React" width="85%" time="7 months"/>
               <Skill skill="Git" width="50%" />
               <span style={{color:'#aaa', fontSize:'.8rem'}}>Note: experience here means academic experience</span>
            </div>
         </div>
      </div>
   )
}

export default Skills
