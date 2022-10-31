// Creating the contact session//

import './contact.css'
import { AiOutlineLink } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'


function Contact(){
    return (
      <div className="container contact-container">
        <h1>Contact me</h1>
        <div className="contact-links">
          <a href="" className="contact-github">
            <AiOutlineGithub className="icon" />
            <h2>Github</h2>
          </a>

          <a href="" className="contact-instagram">
            <AiOutlineGithub className="icon" />
            <h2>Instagram</h2>
          </a>

          <a href="" className="contact-linkdein">
            <AiOutlineGithub className="icon" />
            <h2>LinkdeIn</h2>
          </a>

        </div>
      </div>
    );
        
}

export default Contact;