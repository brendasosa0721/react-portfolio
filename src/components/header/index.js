//Creating the header//

import './header.css';

function Header() {
    return (
      <div id="home" className="container header-container">
        <div>
          <p className="waviy">
            {" "}
            <h2>
              {" "}
              Hello!, I'm <span>Brenda</span>{" "}
            </h2>
          </p>
          <h3> FullStack Web Developer</h3>
        </div>
      </div>
    );
}

export default Header;