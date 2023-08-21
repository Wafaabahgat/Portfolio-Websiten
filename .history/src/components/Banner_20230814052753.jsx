import { Col, Container, Row } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{"Hi, I am webdecoded"} <span className="wrap">Web dev</span></h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

