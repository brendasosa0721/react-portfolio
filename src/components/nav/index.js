// Importating the icons from the react-icon library which was download with the following command npm install @react-icons/all-files --save//

import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { TbHandClick } from "react-icons/tb";

// Creating the NavBar session//
function Nav() {
  function changeactive() {
    let Icons = document.querySelectorAll(".icon");
    Icons.forEach((icon) => {
      icon.classList.remove("active-nav");
    });
  }
  let iconFn = (e) => {
    changeactive();
    e.target.classList.add("active-nav");
  };
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" onClick={iconFn} />
        <p className="icon-text">Home</p>
      </a>

      <a href="#contact">
        <BiMessageRoundedDots className="icon active-nav" onClick={iconFn} />
        <p className="icon-text">Contact</p>
      </a>

      <a href="#project">
        <AiOutlineProject className="icon active-nav" onClick={iconFn} />
        <p className="icon-text">Project</p>
      </a>

      <a
        href="https://docs.google.com/document/d/1MpUSUXxuIyGfgtZbpxp4sNZTQfiPPP2xixU55urByfw/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <TbHandClick className="icon active-nav" onClick={iconFn} />
        <p className="icon-text">Resume</p>
      </a>
    </div>
  );
}

export default Nav;
