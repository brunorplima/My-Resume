import React from 'react';
import ReactDOM from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri'

import './project-portal.scss';

const ProjectPortal = ({ setIsOpen, info, img }) => {

   function closePortal(e) {
      if (typeof e.target.className === 'string') {
         if (e.target.className.match(/project-portal/g))
            setIsOpen(false);
      }
   }

   function getPrivateRepoMessage(message) {
      return (
         <div className='private-repo d-flex'>
            <div className='private-repo-icon d-flex justify-content-center align-items-center'>
               <RiGitRepositoryPrivateLine />
            </div>

            <div className='private-repo-message'>
               <div>{message}</div>
            </div>
         </div>
      )
   }

   return ReactDOM.createPortal(
      <div className='project-portal d-flex justify-content-center align-items-center' onClick={e => closePortal(e)}>
         <div className='project-details'>
            <div className='close-bar d-flex justify-content-end'>
               <div
                  className='close-icon d-flex justify-content-center align-items-center'
                  onClick={() => setIsOpen(false)}
               >
                  <IoMdClose />
               </div>
            </div>
            <div className='content'>
               <div className='content-bg-img p-3 d-flex align-items-center' style={{background: `url(${img})`}}>
                  <div className='content-bg-img-shadow'></div>
                  <h2>{info.name}</h2>
               </div>

               <div className='p-3'>
                  <p>{info.summary}</p>
                  <p>
                     {info.gitLink ?
                        <a href={info.gitLink} target='_blank' rel="noopener noreferrer">Github repository</a> :
                        getPrivateRepoMessage('Github repository is private due to Inheritance Publications\' sensitive information')
                     }</p>
                  <p>Visit the project's <a href={info.link} target='_blank' rel="noopener noreferrer">website</a></p>
               </div>
            </div>
         </div>
      </div>,
      document.getElementById('project-portal')
   )
}

export default ProjectPortal
