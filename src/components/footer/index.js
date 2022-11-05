// Creating the footer session*/

import './footer.css'
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';

function Footer() {
    return (
      <div id="footer" className="container footer-container">
        <h2>For more information, please visit my social media below</h2>

        <div className="social-links">
          <a
            href="https://github.com/brendasosa0721"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub className="social" />
          </a>

          <a
            href="https://www.linkedin.com/in/brenda-sosa-826103104/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin className="social" />
          </a>
        </div>
      </div>
    );
}

export default Footer;