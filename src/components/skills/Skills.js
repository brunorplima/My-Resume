import React from 'react';
import Skill from './Skill';

import './skills.scss';

const Skills = () => {
   return (
      <div className="skills">
         <div className=" d-flex justify-content-center">
            <p className="skills-intro">Nulla leo nisi, rhoncus et vestibulum in, faucibus ut dolor. Nullam varius eu nisi convallis fermentum. Pellentesque facilisis in velit a ornare. Quisque odio elit, rutrum eget quam vitae, fermentum ultrices turpis. Nullam sit amet aliquam nunc. Maecenas ac lorem convallis, rutrum dui id, lacinia dolor. Aenean pellentesque massa id ligula venenatis faucibus.</p>
         </div>
         
         <div className="d-flex justify-content-center">
            <div className="skills-container">
               <Skill skill="HTML" width="80%" time="3 years"/>
               <Skill skill="CSS" width="90%" time="3 years"/>
               <Skill skill="Javascript/ES6" width="80%" time="1 year"/>
               <Skill skill="React" width="70%" time="7 months"/>
               <Skill skill="React Native" width="50%" time="4 months"/>
            </div>
         </div>
      </div>
   )
}

export default Skills
