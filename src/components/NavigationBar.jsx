import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = (props) => {
  const links = [
    ["videos", "Videos"],
    ["pdfs", "PDF's"],
    ["slides", "Slides"],
    ["suggest", "Suggestions"],
    ["aboutus", "About Us"],
    ["donate", "Donate"],
  ];

  const genNav = () => {
    return (
      <Nav className="me-auto">
        {links.map((link) => (
          <Link to={link[0]} className="nav-link">
            <p className="nav-link-css">{link[1]}</p>
          </Link>
        ))}
      </Nav>
    );
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/english" className="nav-link">
            <p className="nav-link-css">Home</p>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">{genNav()}</Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
