// Building the project session//

import "./project.css";

const Project = () => {
  return (
    <div className="proj-ect">
      <h1>
        <span>My Projects</span>
      </h1>
      <div className="project-container">
        <div className="project">
          <h1 className="proj1">e-commerce-backend</h1>
          <br />
          <p>
            This application is working in the back-end of an e-commerce site.
            It is only focus in the back-end no front-end. I used the programs
            mentioned above for the built of this database application. I have
            attached a walkthrough video.
          </p>
          <br />
          <p>
            <strong>Link: </strong>
            <a
              target="_blank"
              href="https://github.com/brendasosa0721/e-commerce-backend"
            >
              Learn More{" "}
            </a>
            <br />
            <strong>Programs used:</strong> Express.js, Node.js, Jest, MySQL
            database Sequelize.
          </p>
        </div>

        <div className="project">
          <h1 className="proj1">Note Taker</h1>
          <br />
          <p>
            Note Taker deployed on Heroku which will allow the clients to write
            notes, delete and save them.
          </p>
          <br />
          <p>
            <strong>Link: </strong>
            <a
              target="_blank"
              href="https://polar-reaches-23538.herokuapp.com/"
            >
              Learn More{" "}
            </a>
            <br />
            <strong>Programs used:</strong> Express.js, Node.js, CSS,
            JavaScript, HTML.
          </p>
        </div>

        <div className="project">
          <h1 className="proj1">Password Generator</h1>
          <br />
          <p>
            I worked on making this website functional. When clicking password
            generate a series of questions will come up and based on your
            selection a random password will be created.
          </p>
          <br />
          <p>
            <strong>Link: </strong>
            <a
              target="_blank"
              href="https://brendasosa0721.github.io/password-generator/"
            >
              Learn More{" "}
            </a>
            <br />
            <strong>Programs used:</strong> CSS, JavaScript, HTML.
          </p>
        </div>

        <div className="project">
          <h1 className="proj1">Team Profile Generator</h1>
          <br />
          <p>
            This can be used to generate team profile through the terminal and
            translate to the browser.
          </p>
          <br />
          <p>
            <strong>Link: </strong>
            <a
              target="_blank"
              href="https://github.com/brendasosa0721/team-profile-generator"
            >
              Learn More{" "}
            </a>
            <br />
            <strong>Programs used:</strong> CSS, JavaScript, HTML, Node.js.
          </p>
        </div>

       
      </div>
    </div>
  );
};

export default Project;
