// Building the skill session//

import "./skill.css";


const Skill = () => {
  return (
    <div>
      <h1>
        {" "}
        <span id="Skil" className="skill">
          Skills
        </span>
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
          <h1>React</h1>
        </div>

       
      </div>
    </div>
  );
};

export default Skill;
