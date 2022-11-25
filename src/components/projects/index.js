// Building the project session//

import "./project.css";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/images/AIDream.png";
import projImg2 from "../../assets/images/employertracker.png";
import projImg3 from "../../assets/images/notetaker.png";
import projImg4 from "../../assets/images/teamgenerator.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "AI Dream",
      description:
        "An AI-powered creative design platform, which allows users to create original graphics , logos, product concept images, art and realistic images. Graphic design is so important for the success of a business. Creating marketing materials can be a process and can take anywhere from 4 to 6 weeks to even months, to complete.",
      imgUrl: projImg1,
      
    
    },
    {
      title: "Employer Tracker",
      description:
        "This is a command-line application created to get track of employees information such as salary, name, departments, and roles ID.",
      imgUrl: projImg2,
    },
    {
      title: "Note Taker",
      description:
        "Note Taker deployed on Heroku which will allow the client to write notes, delete and save them.",
      imgUrl: projImg3,
    },
    {
      title: "Team Generator",
      description:
        "This can be used to generate team profile through the terminal and translate to the browser.",
      imgUrl: projImg4,
    },
  ];
  console.log(Projects);
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                     
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

