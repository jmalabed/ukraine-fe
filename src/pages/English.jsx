import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";

const English = (props) => {
  return (
    <div>
      <h1>Ukraine Healthcare Resources</h1>
      <NavigationBar />
      <Outlet />
    </div>
  );
};
export default English;
