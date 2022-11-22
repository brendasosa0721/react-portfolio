//Creating the header//

import './header.css';

function Header() {
    return (
      <div id="home" className="container header-container">
        <h2>
          <p className="waviy">
            {" "}
            I'm <span>Brenda</span>
          </p>
          <h3> FullStack Web Developer</h3>
        </h2>
      </div>
    );
}

export default Header;