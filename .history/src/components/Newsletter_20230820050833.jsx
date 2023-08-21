import { Alert } from "bootstrap";
import { Col, Row } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  return (
    <Col>
      {" "}
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter<br></br> & Never miss latest updates
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && (
              <Alert variant="success">{message}</Alert>
            )}{" "}
          </Col>
        </Row>
      </div>
    </Col>
  );
};
