// Creating the contact session//

import "./contact.css";
// import { AiOutlineLinkedin } from "react-icons/ai";
// import { AiOutlineGithub } from "react-icons/ai";
import React,{useState} from 'react';


function Contact() {
 const [nameState, nameSetState] = useState('');
 const [emailState, emailSetState] = useState('');
 const [messageState, messageSeState] = useState('')
  
  return (
    <div className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <form className="form" action="mailto:brenda.sosa@gmail.com" type='text/plain'>
          
            <label className="label">Name</label>
            <input type="text" value={nameState} onChange={e => nameSetState(e.target.value)}/>
            <label>Email</label>
            <input type="text" value={emailState} onChange={e => emailSetState(e.target.value)} />
            <label>Message</label>
            <input className="message" type="text" value={messageState} onChange={e => messageSeState(e.target.value)}/>
          <button className="btn-contact">Send </button>
        </form>
        
      </div>
    </div>
  );
}

export default Contact;
