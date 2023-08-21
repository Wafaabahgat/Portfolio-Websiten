import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="align-items-center">
            <MailchimpForm></MailchimpForm>
        </Row>
      </Container>
    </footer>
  );
};
