// Creating the footer session*/

import './footer.css'

import { BsInstagram, BsMouse } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';

function Footer() {
    return (
      <div id="footer" className="container footer-container">
        <h1>Thank you for checking out my portfolio</h1>

        <div className="social-links">
          <a href="">
            <BsInstagram className="social" />
          </a>

          <a href="">
            <AiOutlineGithub className="social" />
          </a>

          <a href="">
            <AiOutlineLinkedin className="social" />
          </a>
        </div>
      </div>
    );
}

export default Footer;