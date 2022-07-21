import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <Col size={12} sm={6} className="px-1">
                    <p> Jorge Quintero Doria </p>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <p> Dir: Calle 44 # 18A-17 </p>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <p> Montería - Colombia </p>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <p>Email: jquintedori@gmail.com</p>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <p> Phone: +57 305 406 88 48</p>
                  </Col>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
