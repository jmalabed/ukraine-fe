import ptcCourseManual from "../resources/english/PTC-Course-Manual-2018.pdf";

import { Button } from "react-bootstrap";

const Pdfs = (props) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex flex-row justify-content-between align-items-bottom my-3">
        <h2 className="">Primary Trauma Care Manual</h2>
        <a
          href={ptcCourseManual}
          download="PTC_Manual"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="success" className="mx-5">
            Download
          </Button>
        </a>
      </div>
      <div className="mw-100 w-100 d-flex flex-column align-items-center ">
        <iframe
          src={ptcCourseManual}
          height="750vh"
          width="50%"
          title="Patient Trauma Care"
        />
      </div>
    </div>
  );
};
export default Pdfs;
