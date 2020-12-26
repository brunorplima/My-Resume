import React from 'react';
import Skill from './Skill';
import { TiInputChecked } from 'react-icons/ti';
import webDesign from '../../images/web-design.jpg'

import './skills.scss';

const Skills = () => {
   return (
      <div className="skills">
         <div className="skills-intro d-flex flex-column align-items-center">
            <h3 className="skills-text">
               Personal qualifications
            </h3>
            <div className="list d-flex justify-content-center">
               <div className='list-item'><div><TiInputChecked /></div> <div>Quick learner</div></div>
               <div className='list-item'><div><TiInputChecked /></div> <div>Passionate about programming</div></div>
               <div className='list-item'><div><TiInputChecked /></div> <div>Hard worker</div></div>
               <div className='list-item'><div><TiInputChecked /></div> <div>Good communication</div></div>
               <div className='list-item'><div><TiInputChecked /></div> <div>Disciplined</div></div>
               <div className='list-item'><div><TiInputChecked /></div> <div>Problem solver</div></div>
               <div className='list-item'><div><TiInputChecked /></div> <div>Detail oriented</div></div>
            </div>
         </div>

         <br/>

         <div className='d-flex justify-content-center'>
            <h3 className="skills-text text-center">
               Professional skills
            </h3>
         </div>
            <br/>
            <div className="d-flex justify-content-center">
               <div className="skills-container d-flex justify-content-around flex-wrap">
                  <Skill skill="Web Design" image={webDesign} level='65%'/>
                  <Skill skill="CSS/SCSS" icon='css' iconColor='#2965f1' bgColor='#D8D8D8' level='75%' />
                  <Skill skill="HTML" icon='html' iconColor='#e34c26' bgColor='#FFFFEA' level='80%' />
                  <Skill skill="Javascript/ES6" icon='js' iconColor='#f0db4f' bgColor='#333' level='85%' />
                  <Skill skill="Typescript" icon='ts' iconColor='#007acc' bgColor='#fff' level='80%' />
                  <Skill skill="Next.js" icon='nextjs' iconColor='#333' bgColor='#efc' level='75%' />
                  <Skill skill="React" icon='react' iconColor='#61DBFB' bgColor='#333' level='100%' />
                  <Skill skill="NoSQL" icon='nosql' iconColor='white' bgColor='#00CECB' level='70%' />
                  <Skill skill="Git" icon='git' iconColor='#f34f29' bgColor='#5d4d20' fontSize='36pt' isLast={true} level='50%' />
               </div>
            </div>
      </div>
   )
}

export default Skills
