
import { faHome } from '@fortawesome/free-solid-svg-icons';
import  Header from './components/header/header';
import Nav from './components/nav/nav';
import Home from './components/home/home';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Skill from './components/skills/skill';
import Contact from './components/contact/contact';
import Project from './components/projects/project';


function WebContent() {
    return(
        <div className='App'>
        <div className='bg-circle1'></div>
        <div className='bg circle2'></div>

        <Header/>
        <Nav/>
        <Home/>
        <About/>
        <Footer/>
        <Skill/>
        <Contact/>
        <Project/>
    

        </div>
    );
}


export default WebContent;

// import images from './images/IMG_3939.jpg';
// import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={images} className="App-logo" alt="logo" />
//         <p>
//           Hello <code>I'm Brenda</code> a Web Developer.
//         </p>
  
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
