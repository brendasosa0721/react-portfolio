// Importating the icons from the react-icon library which was download with the following command npm install @react-icons/all-files --save//

import './nav.css'
import{AiOutlineHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
import{BiMessageRoundedDots} from 'react-icons/bi'
import{BsArrowDownCircle} from 'react-icons/bs'

// Creating the NavBar session//
function Nav() {
  function changeactive(){
    let Icons = document.querySelectorAll(".icon");
    Icons.forEach(icon => {
        icon.classList.remove('active-nav');
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
    </a>

    <a href="#about">
      <AiOutlineUser className="icon active-nav" onClick={iconFn} />
    </a>

    <a href="#contact">
      <BiMessageRoundedDots className="icon active-nav" onClick={iconFn} />
    </a>

    <a href="#project">
      <AiOutlineProject className="icon active-nav" onClick={iconFn} />
    </a>

    <a href="#footer">
      <BsArrowDownCircle className="icon active-nav" onClick={iconFn} />
    </a>
  </div>
);

}

// I am creating a hidden function//
// let Icons = document.querySelectorAll('.navigation .icon');
// Icons.forEach((icon) => {
//     icon.addEventListener ('click', () => {
//         changeactive();
//         icon.classList.add('active-nav');
//     });
// });

// function changeactive(){
//     Icons.forEach(icon => {
//         icon.classList.remove('active-nav');
//     });
// }

export default Nav;