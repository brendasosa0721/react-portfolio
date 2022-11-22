//Creating the home container//

import "./home.css";
import img from "../images/IMG_4900.jpg";
import Buttons from "../Button";
import { BsMouse } from "react-icons/bs";

function Home() {
  const toggle = (e) => {
     e.target.classList.toggle('active');
  }
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="main-img" onMouseEnter={toggle}>
          <span className="circle">HTML</span>
          <span className="circle">CSS</span>
          <span className="circle">React.js</span>
          <span className="circle">NoSQL</span>
          <span className="circle">Express.js</span>
          <span className="circle">MongoDB</span>
          <span className="circle">SQL</span>
          <span className="circle">JavaScript</span>
        </div>
        <img src={img} alt=""></img>
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>Find Out More</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>
  
       <h2>
        <span>About Me</span>
        <br />
        <p>
          I'm a team player,do very well under pressure and love building new
          projects. I became a web developer because I was passionate about the
          tech industry and I wanted to be part of the future. I transitioned
          from the medical field and it has been the best decision. I worked in
          the medical field for over 12 years and I learned diversity,
          leadership, working as a team and creating projects that helped the
          community. I am ready to learn and eager to keep expanding my
          knowledge.
        </p>
      </h2> 
      <br />
      <Buttons />
    </div>
  );
}



export default Home;
