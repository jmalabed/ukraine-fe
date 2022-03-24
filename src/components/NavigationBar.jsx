import { Link } from "react-router-dom";

const NavigationBar = (props) => {
  return (
    <nav className="d-flex flex-row justify-content-around">
      <Link to="">Home</Link>
      <Link to="videos">Videos</Link>
      <Link to="pdfs">Pdf's</Link>
      <Link to="suggest">Suggestions</Link>
      <Link to="aboutus">About Us</Link>
      <Link to="donate">Donate</Link>
    </nav>
  );
};

export default NavigationBar;
