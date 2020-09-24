import React from 'react';
import Skill from './Skill';
import { TiInputChecked } from 'react-icons/ti';

import './skills.scss';

const Skills = () => {
   return (
      <div className="skills">
         <div className="skills-intro d-flex flex-column align-items-center">
            <p className="skills-text">
               Ability to work in a team using personal and digital means to maintain communication, Design and development of web apps using various available tools to enhance and test user experience. Development using Javascript and React to give life to those designs.
            </p>
            <div className="list d-flex">
               <div className='list-item'><div><TiInputChecked /></div> <div>Quick learner</div></div>
               <div className='list-item'><div><TiInputChecked /></div> <div>Passionate about programming</div></div>
               <div className='list-item'><div><TiInputChecked /></div> <div>Hard worker</div></div>
               <div className='list-item'><div><TiInputChecked /></div> <div>Good communication</div></div>
               <div className='list-item'><div><TiInputChecked /></div> <div>Disciplined</div></div>
               <div className='list-item'><div><TiInputChecked /></div> <div>Organized</div></div>
               <div className='list-item'><div><TiInputChecked /></div> <div>Problem solver</div></div>
               <div className='list-item'><div><TiInputChecked /></div> <div>Detail oriented</div></div>
            </div>
         </div>
         
         <div className="d-flex justify-content-center">
            <div className="skills-container">
               <Skill skill="Web Design" width="60%" />
               <Skill skill="HTML" width="80%" />
               <Skill skill="CSS/SASS" width="70%" />
               <Skill skill="Javascript/ES6" width="80%" />
               <Skill skill="OO Programming" width="75%" />
               <Skill skill="SQL/NoSQL" width="70%" />
               <Skill skill="React" width="90%" />
               <Skill skill="Git" width="50%" />
            </div>
         </div>
      </div>
   )
}

export default Skills
