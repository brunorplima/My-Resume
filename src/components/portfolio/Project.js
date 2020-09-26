import React, { useState } from 'react';
import ProjectPortal from './ProjectPortal';

import './project.scss'

const Project = ({ img, bgSize, description, layerColor, info }) => {

   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className='project-container'>
         <div className='project d-flex flex-column'>
            <div className='project-image' style={{backgroundImage: `url(${img})`, backgroundSize: bgSize}}>
               {
                  layerColor &&
                  <div className='pi-layer' style={{backgroundColor: layerColor}}></div>
               }
            </div>

            <div className='project-text d-flex flex-column justify-content-between text-center'>
               <div>{description}</div>
               <div 
                  className='read-more d-flex justify-content-around border-primary'
                  onClick={() => setIsOpen(!isOpen)}
               >
                  Read more
               </div>
            </div>
         </div>


         {/* PORTAL */}
         {
            isOpen && <ProjectPortal setIsOpen={setIsOpen} info={info} img={img}/>
         }
      </div>
   )
}

export default Project
