import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavigationBar = (props) => {
  const links = [
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
        <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown
            title="Resources"
            id="nav-dropdown"
            className="nav-link-css"
            active={false}
          >
            <NavDropdown.Item>
              <Link to="videos" className="nav-link">
                <p className="nav-link-css">Videos</p>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="pdfs" className="nav-link">
                <p className="nav-link-css">PDF's</p>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="slides" className="nav-link">
                <p className="nav-link-css">Slideshow</p>
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          {genNav()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
