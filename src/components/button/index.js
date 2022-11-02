// Creating the buttons//

import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      {/* <a
        href="https://docs.google.com/document/d/1MpUSUXxuIyGfgtZbpxp4sNZTQfiPPP2xixU55urByfw/edit?usp=sharing"
        target="_blank"
        className="btn pri"
      >
        Resume
      </a> */}

      <a
        href="mailto:brenda.sosa@gmail.com"
        target="_blank"
        className="btn pri"
      >
        Contact me
      </a>
    </div>
  );
}

export default Buttons;
