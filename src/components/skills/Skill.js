import React from 'react';

import './skill.scss'

const Skill = props => {
   return (
      <div className="skill d-flex justify-content-between align-items-center">
         <span>{props.skill}</span>
         <div className="percent-bg">
            <div className="percent-actual" style={{width: props.width}}></div>
         </div>
      </div>
   )
}

export default Skill
