import React, { useState } from 'react';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';

import './contact.scss'

const _status = {
   inactive: 'inactive',
   sent: 'sent',
   invalid: 'invalid',
   error: 'error'
}
Object.freeze(_status);

const Contact = () => {

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [subject, setSubject] = useState('');
   const [message, setMessage] = useState('');
   const [status, setStatus] = useState(_status.inactive);
   const [error, setError] = useState('');
   
   const handleSendButton = (e) => {
      e.preventDefault();

      if(name && email && subject && message) {
         const params = {
            name: name,
            to_email: email,
            subject: subject,
            message: message
            }
         window.emailjs.send('default_service', 'contact_my_resume', params)
            .then(response => {
               setStatus(_status.sent);
               setName('');
               setEmail('');
               setSubject('');
               setMessage('');
               resetStatus(10000);
            }, 
            error => {
               console.log('Error: ' + error);
               setStatus(_status.error);
               setError(error);
               resetStatus(25000);
            })
      } else {
         console.log('There is invalid value in the form');
         setStatus(_status.invalid);
         resetStatus(25000);
      }

      // if (status !== _status.inactive) {
      //    setTimeout(() => {
      //       setStatus(_status.inactive);
      //    }, 2000);
      // }
   }

   const resetStatus = time => {
      setTimeout(() => {
         setStatus(_status.inactive);
      }, time);
   }

   return (
      <div className="contact d-flex justify-content-between">
         <div className="contact-form d-flex justify-content-center align-items-center">
            <form className="d-flex flex-column">
               <div className="d-flex justify-content-between">
                  <input type="input" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} style={!name && status === 'invalid' ? {border: '1.5px solid red'} : {}}/>
                  <input type="input" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={!email && status === 'invalid' ? {border: '1.5px solid red'} : {}}/>
               </div>
               <input type="input" name="subject" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} style={!subject && status === 'invalid' ? {border: '1.5px solid red'} : {}}/>
               <textarea name="message" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} style={!message && status === 'invalid' ? {border: '1.5px solid red'} : {}}></textarea>
               <button onClick={(e) => handleSendButton(e)}>Send</button>
               
               {status === _status.sent ?
                  <div className="form-feedback email-sent">
                     <span>Thank you! Message sent.</span>
                  </div> :
                  null
               }
               {status === _status.invalid ?
                  <div className="form-feedback email-invalid">
                     <span>All fields are required.</span>
                  </div> :
                  null
               }
               {status === _status.error ?
                  <div className="form-feedback email-invalid">
                     <span>Error: {error}.</span>
                  </div> :
                  null
               }

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
