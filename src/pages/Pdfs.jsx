import ptcCourseManual from "../documents/english/PTC-Course-Manual-2018.pdf";

import { Button } from "react-bootstrap";

const Pdfs = (props) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Primary Trauma Care Manual</h2>
      <div className="mw-100 w-100 d-flex flex-column align-items-center ">
        <iframe src={ptcCourseManual} height="750vh" width="50%" />
      </div>
      <a href={ptcCourseManual} download target="_blank" rel="noreferrer">
        <Button variant="success" className="m-5">
          Download
        </Button>
      </a>
    </div>
  );
};
export default Pdfs;
