import React, { useState } from 'react';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti'

import './contact.scss'

const Contact = () => {

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [subject, setSubject] = useState('')
   const [message, setMessage] = useState('')
   
   const handleSendButton = (e) => {
      e.preventDefault();
      if(name && email && subject && message) {
         console.log('Approved');
      } else {
         console.log('disapproved');
      }
   }

   return (
      <div className="contact d-flex justify-content-between">
         <div className="contact-form d-flex justify-content-center align-items-center">
            <form className="d-flex flex-column">
               <div className="d-flex justify-content-between">
                  <input type="input" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required/>
                  <input type="input" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
               </div>
               <input type="input" name="subject" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} required/>
               <textarea name="message" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} required></textarea>
               <button onClick={(e) => handleSendButton(e)}>Send</button>
            </form>
         </div>

         <div className="contact-info d-flex flex-column justify-content-between">
            <div className="ci-text d-flex flex-column">
               <h2 className="mb-0">Bruno Lima</h2>
               <span className="lead">Front-End Developer</span>
               <div className="p-3"></div>
               <span className="font-weight-bold">Email:</span>
               <span>brunolima.cad@gmail.com</span>
               <span>bruno.reactdeveloper@gmail.com</span>
               <div className="p-2"></div>
               <span className="font-weight-bold">Phone:</span>
               <span>(778) 682 7766</span>
            </div>

            <div className="ci-social-media border border-info border-bottom-0 border-left-0 border-right-0">
               <div className="ci-s d-flex justify-content-between">
                  <span><FaLinkedin /></span>
                  <span><FaFacebookSquare /></span>
                  <span><TiSocialInstagram /></span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contact
