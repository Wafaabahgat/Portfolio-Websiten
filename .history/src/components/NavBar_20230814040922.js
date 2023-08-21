import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scolled, setScolled] = useState("false");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScolled(true);
      } else {
        setScolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img src={""} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggle-icons"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            href="#home"
            className={
              activeLink === "home" ? "active navbar-link" : "navbar-link"
            }
            onClick={()}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#skills"
            className={
              activeLink === "skills" ? "active navbar-link" : "navbar-link"
            }
          >
            Skills
          </Nav.Link>
          <Nav.Link
            href="#projects"
            className={
              activeLink === "projects" ? "active navbar-link" : "navbar-link"
            }
          >
            Projects
          </Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="#">
              <img src={""} alt="" />
            </a>
            <a href="#">
              <img src={""} alt="" />
            </a>
            <a href="#">
              <img src={""} alt="" />
            </a>
          </div>
          <button className="ww" onClick={() => console.log("connect")}>
            <span>Let's Connect</span>
          </button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>;
};
