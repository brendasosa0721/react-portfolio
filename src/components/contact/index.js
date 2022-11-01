// Creating the contact session//

import './contact.css'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'


function Contact(){
    return (
      <div className="container contact-container">
        <h1>Contact me</h1>
        <div className="contact-links">
          <a
            href="https://github.com/brendasosa0721"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-github"
          >
            <AiOutlineGithub className="icon" />
            <h2>Github</h2>
          </a>

          <a
            href="https://www.linkedin.com/in/brenda-sosa-826103104/"
            className="contact-linkdein"
          >
            <AiOutlineLinkedin className="icon" />
            <h2>LinkdeIn</h2>
          </a>
        </div>
      </div>
    );
        
}

export default Contact;

