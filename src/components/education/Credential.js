import React from 'react';
import award from '../../images/award.png';

import './credential.scss';

const Credential = props => {
   return (
      <div className="bcit-credential" >
         {props.isFirst ? <img src={award} alt="Award" className="award-icon" /> : null}
         {props.isFirst ? <div className="post-point"></div> : null}
         <div className="point"></div>
         <div className="point-path"></div>
         <div className="d-flex justify-content-between">
            <h3>{props.title}</h3>
            <span>{props.period}</span>
         </div>
         {
            props.description.map((desc, i) => {
               return <p key={i} className="program-description">{desc}</p>
            })
         }
         {/* <p>{props.description}</p> */}
      </div>
   )
}

export default Credential
