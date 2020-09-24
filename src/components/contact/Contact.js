import React, { useState } from 'react';
import DownloadCVButton from '../util/DownloadCVButton';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import logo from '../../images/logo-bg-vbruno2.png';

import './contact.scss';

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
   console.log(process.env.REACT_APP_USER_ID)
   const handleSendButton = (e) => {
      e.preventDefault();

      if(name && email && subject && message) {
         const params = {
            name: name,
            to_email: email,
            subject: subject,
            message: message
         }
         window.emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            params,
            process.env.REACT_APP_USER_ID
         )
            .then(response => {
               setStatus(_status.sent);
               setName('');
               setEmail('');
               setSubject('');
               setMessage('');
               resetStatus(10000);
            }, 
            error => {
               console.log('Error: ');
               console.log(error);
               setStatus(_status.error);
               setError(error.text);
               resetStatus(25000);
            })
      } else {
         console.log('There is invalid value in the form');
         setStatus(_status.invalid);
         resetStatus(25000);
      }
   }

   const resetStatus = time => {
      setTimeout(() => {
         setStatus(_status.inactive);
      }, time);
   }

   return (
      <div className="contact d-flex flex-column flex-md-row justify-content-between">
         <div className="contact-form d-flex justify-content-center align-items-center">
            <form className="d-flex flex-column">
               <legend>Send me a message!</legend>
               <div className="d-flex justify-content-between">
                  <input type="input" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} style={!name && status === _status.invalid ? {border: '1.5px solid red'} : {}}/>
                  <input type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={!email && status === _status.invalid ? {border: '1.5px solid red'} : {}}/>
               </div>
               <input type="input" name="subject" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} style={!subject && status === _status.invalid ? {border: '1.5px solid red'} : {}}/>
               <textarea name="message" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} style={!message && status === _status.invalid ? {border: '1.5px solid red'} : {}}></textarea>
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

         <div className="contact-info d-flex flex-column align-items-center">
            <div>
               <div className="ci-text d-flex flex-column">
                  <div className="d-flex">
                     <img src={logo} alt="Logo" className="logo-img" />
                     <div>
                        <h2 className="mb-0">Bruno Lima</h2>
                        <span className="lead">Front-End Developer</span>
                     </div>
                  </div>
                  
                  <div className="p-3"></div>
                  <span className="font-weight-bold">Email:</span>
                  <span>brunolima.cad@gmail.com</span>
                  <span>bruno.reactdeveloper@gmail.com</span>
                  <div className="p-2"></div>
                  <span className="font-weight-bold">Phone:</span>
                  <span>(778) 682 7766</span>
                  <div className="p-2"></div>
                  <DownloadCVButton color="black" hover="hover2"/>
                  <div className="p-2"></div>
               </div>

               <div className="ci-social-media border border-info border-bottom-0 border-left-0 border-right-0">
                  <div className="ci-s d-flex justify-content-between">
                     <a href="https://www.linkedin.com/mwlite/in/bruno-lima-673955159" target="_blank" rel="noopener noreferrer">
                        <span><FaLinkedin /></span>
                     </a>
                     <a href="https://www.facebook.com/profile.php?id=100002401369385&ref=bookmarks" target="_blank" rel="noopener noreferrer" >
                        <span><FaFacebookSquare /></span>
                     </a>
                     <a href="https://www.instagram.com/bruno.fg58/?hl=en" target="_blank" rel="noopener noreferrer" >
                        <span><TiSocialInstagram /></span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contact
