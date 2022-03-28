import EMGLogo from "../resources/english/EMG-logo.png";
import { Button } from "react-bootstrap";

const Landing = (props) => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <img src={EMGLogo} className="emg-logo mt-3 mb-5"></img>
        <h2 className="text-center">Choose your language below:</h2>
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
