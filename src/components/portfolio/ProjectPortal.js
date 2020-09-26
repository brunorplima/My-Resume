import React from 'react';
import ReactDOM from 'react-dom';
import { IoMdClose } from 'react-icons/io';

import './project-portal.scss';

const ProjectPortal = ({ setIsOpen, info, img }) => {

   function closePortal(e) {
      if (typeof e.target.className === 'string') {
         if (e.target.className.match(/project-portal/g))
            setIsOpen(false);
      }
   }

   return ReactDOM.createPortal(
      <div className='project-portal d-flex justify-content-center align-items-center' onClick={e => closePortal(e)}>
         <div className='project-details'>
            <div className='close-bar d-flex justify-content-end'>
               <div 
                  className='close-icon d-flex justify-content-center align-items-center'
                  onClick={() => setIsOpen(false)}
               >
                  <IoMdClose className=''/>
               </div>
            </div>
            <div className='content p-3'>
               <img src={img} alt={info.name} />
               <h2>{info.name}</h2>
               <p>{info.summary}</p>
               <p>Git repository: {info.gitLink}</p>
               <p>Visit the project's <a href={info.link} target='_blank'>website</a></p>
            </div>
         </div>
      </div>,
      document.getElementById('project-portal')
   )
}

export default ProjectPortal
