import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from "../assets/img/gaming-logo-cover.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

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

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" />
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
            onClick={() => {
              onUpdateActiveLink("home");
            }}
          >
            Home
          </Nav.Link>

          <Nav.Link
            href="#skills"
            className={
              activeLink === "skills" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => {
              onUpdateActiveLink("skills");
            }}
          >
            Skills
          </Nav.Link>

          <Nav.Link
            href="#projects"
            className={
              activeLink === "projects" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => {
              onUpdateActiveLink("projects");
            }}
          >
            Projects
          </Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="#">
              <img src={navIcon1} alt="" />
            </a>
            <a href="#">
              <img src={navIcon2} alt="" />
            </a>
            <a href="#">
              <img src={n} alt="" />
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
