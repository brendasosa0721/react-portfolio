// Building the skill session//

import "./skill.css";

const Skill = () => {
  return (
    <div>
      <h1>
        {" "}
        <span className="skill">Skills</span>
      </h1>
      <div className="skill-container">
        <div className="skills">
          <div className="content-html"></div>
          <h1>HTML</h1>
        </div>

        <div className="skills">
          <div className="content-css"></div>
          <h1>CSS</h1>
        </div>

        <div className="skills">
          <div className="content-javascript"></div>
          <h1>Javascript</h1>
        </div>

        <div className="skills">
          <div className="content-react"></div>
          <h1>React.js </h1>
        </div>

        <div className="skills">
          <div className="content-node.js"></div>
          <h1>Node.js</h1>
        </div>

        <div className="skills">
          <div className="content-nosql"></div>
          <h1>NoSQL</h1>
        </div>

        <div className="skills">
          <div className="content-mongodb"></div>
          <h1>MongoDB</h1>
        </div>
      </div>
    </div>
  );
};

export default Skill;
