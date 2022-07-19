import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const webProjects = [
    {
      title: "Acelera Financial",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Mi Credi",
      description: "Development for Loans",
      imgUrl: projImg2,
    },
    {
      title: "BancaValor",
      description: "Development for Loans",
      imgUrl: projImg3,
    },
    {
      title: "Vive Tu Sueño",
      description: "Development for Loans",
      imgUrl: projImg4,
    },
    {
      title: "Hulu Clone",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Amazon Clone",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];
  const otherProjects = [
    {
      title: "Puzzle Game",
      description: "Development & Deployment",
      imgUrl: projImg7,
    },
    {
      title: "HTML Gamification",
      description: "Development & Deployment",
      imgUrl: projImg8,
    },
    {
      title: "HTML Gamification",
      description: "Development & Deployment",
      imgUrl: projImg9,
    },
    {
      title: "HTML Gamification",
      description: "Development & Deployment",
      imgUrl: projImg10,
    },
    {
      title: "HTML Gamification",
      description: "Development & Deployment",
      imgUrl: projImg11,
    },
    {
      title: "HTML Gamification",
      description: "Development & Deployment",
      imgUrl: projImg12,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>These are some of my works</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Others</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Mobile</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            webProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            otherProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Coming Soon</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
