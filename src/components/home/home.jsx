//Creating the home container//


import './home.css';
import img from '../images/IMG_4900.jpg';
import Buttons from '../button/button';
import {BsMouse} from 'react-icons/bs';


function Home(){
    return (
      <div id="home" className="container home-container">
        <div className="logo">
          <div className="main-img">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
          <img src='{ img }' alt=''></img>
        </div>

        <a href='#footer' className='scroll-down'>
            <hr/>
            <h5>Scroll down</h5>
            <BsMouse className='scroll'/>
            <hr/>

        </a>

        <h2><span>About Me</span><br/>
        
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sunt, sint quisquam blanditiis aliquid aut quasi quis aspernatur inventore eveniet ullam numquam sit? Facere tempora expedita officiis possimus ea ad.
        </p>
        </h2>

        <Buttons/>
      </div>
    );
}

const toggle = document.querySelector('.main-img');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
});

export default Home;