import { Col, Container, Row } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Protfolio</span>
            <h1 {`Hi `}></h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
