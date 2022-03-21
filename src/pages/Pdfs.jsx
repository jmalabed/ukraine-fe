import ptcCourseManual from "../documents/english/PTC-Course-Manual-2018.pdf";

import { Button } from "react-bootstrap";

const Pdfs = (props) => {
  return (
    <div>
      <h2>Primary Trauma Care Manual</h2>
      <a href={ptcCourseManual} download target="_blank" rel="noreferrer">
        <Button variant="success">Download</Button>
      </a>
    </div>
  );
};
export default Pdfs;
