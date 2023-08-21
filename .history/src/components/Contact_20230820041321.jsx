import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const fromInitialDetails = {
    firstName: "",
    lasttName: "",
    email: "",
    phone: "",
    massage: "",
  };
  const [fromdetails, setfromDetails] = useState(fromInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  return (
    <section className="contact" id="content">
      <Container>
        <Row className="nav-pills mb-5 justify-content-center align-items-center">
          <Col size={12}></Col>
        </Row>
      </Container>
    </section>
  );
};
