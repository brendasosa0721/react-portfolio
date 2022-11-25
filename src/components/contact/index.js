// Creating the contact session//



import "./contact.css";
import img from "../../assets/images/IMG_3939.jpg";
import React,{useState} from 'react';
import Button from "react-bootstrap/Button";


function Contact() {
 const [nameState, nameSetState] = useState('');
 const [emailState, emailSetState] = useState('');
 const [messageState, messageSeState] = useState('')
  
  return (
    <div
      className="container contact-container"
      style={{ backgroundImage: `url(${img})` }} 
    >
     
      <h1>Contact Me</h1>
      <div className="contact-links">
        <form
          className="form"
          action="mailto:brenda.sosa@gmail.com"
          type="text/plain"
        >
          <label className="label">Name</label>
          <input
            type="text"
            value={nameState}
            onChange={(e) => nameSetState(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            value={emailState}
            onChange={(e) => emailSetState(e.target.value)}
          />
          <label>Message</label>
          <input
            className="message"
            type="text"
            value={messageState}
            onChange={(e) => messageSeState(e.target.value)}
          />
          <Button variant="primary" size="lg" id="btn-contact">
            Send
          </Button>{" "}
        </form>
      </div>
    </div>
  );
}

export default Contact;
