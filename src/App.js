
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import  { Projects } from "./Components/Projects";


function WebContent() {
  return (
    <div className="App">
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>

      <Header />
      <Nav />
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default WebContent;

