import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
export const NavBar = () => {
  <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img src={''} alt="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggle-icons"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>;
};
