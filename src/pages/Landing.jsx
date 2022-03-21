import { Button } from "react-bootstrap";

const Landing = (props) => {
  return (
    <div>
      <h1 className="text-center">Trauma Care Resources</h1>
      <h2 className="text-center">Choose your language below:</h2>
      <div className="d-flex flex-column align-items-center">
        <a href="/english" className="p-3">
          <Button>English</Button>
        </a>
        <a href="/ukrainian" className="p-3">
          <Button>украинец</Button>
        </a>
        <a href="/russian" className="p-3">
          <Button>русский</Button>
        </a>
      </div>
    </div>
  );
};

export default Landing;
