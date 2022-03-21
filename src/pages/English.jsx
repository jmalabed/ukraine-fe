import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";

const English = (props) => {
  return (
    <div className="">
      <div className="d-flex flex-column justify-content-center">
        <a href="/" className="title d-flex justify-content-center">
          <h1 className="center-text">Ukraine Healthcare Resources</h1>
        </a>
      </div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};
export default English;
