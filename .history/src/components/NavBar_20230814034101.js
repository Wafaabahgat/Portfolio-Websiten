import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
export const NavBar = () => {
  <Navbar bg="light">
    <Container>
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link></Nav.Link>
          <Nav.Link></Nav.Link>
          <NavDropdown>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another Action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated Link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>;
};
