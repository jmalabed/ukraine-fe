import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";
import EMGLogo from "../resources/english/EMG-logo.png";
const English = (props) => {
  return (
    <div className="">
      <a href="/" className="title mw-50">
        <img src={EMGLogo} className="emg-logo mt-3 mb-3"></img>
      </a>
      <NavigationBar />
      <Outlet />
    </div>
  );
};
export default English;
