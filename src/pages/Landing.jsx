import { Button } from "react-bootstrap";

const Landing = (props) => {
  return (
    <div>
      <h1>Welcome</h1>
      <h2>Choose your language below:</h2>
      <div className="d-flex flex-column">
        <a href="/english">
          <Button>English</Button>
        </a>
        <a href="/ukrainian">
          <Button>украинец</Button>
        </a>
        <a href="/russian">
          <Button>русский</Button>
        </a>
      </div>
    </div>
  );
};

export default Landing;
