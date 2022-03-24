import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavigationBar = (props) => {
  /*
  <Navbar bg="light" expand="lg">
    <Container>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  */

  /*
  <nav className="d-flex flex-row justify-content-around">
    <Link to="">Home</Link>
    <Link to="videos">Videos</Link>
    <Link to="pdfs">Pdf's</Link>
    <Link to="ebook">E-Books</Link>
    <Link to="suggest">Suggestions</Link>
    <Link to="aboutus">About Us</Link>
    <Link to="donate">Donate</Link>
  </nav>
  */

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="videos" className="nav-link">
                Videos
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="pdfs" className="nav-link">
                PDF's
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="ebook" className="nav-link">
                E-Books
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="suggest" className="nav-link">
                Suggestions
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="aboutus" className="nav-link">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="donate" className="nav-link">
                Donate
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
