import ptcCourseSlidesPPT from "../resources/english/PTC-Course-Slides-2020.09.24.pptx";
import ptcCourseSlidesPDF from "../resources/english/PTC-Course-Slides-2020.09.24.pdf";
import { Button } from "react-bootstrap";

const Slides = (props) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex flex-row justify-content-between align-items-bottom my-3">
        <h1 className="">PTC Course Slides</h1>
        <a
          href={ptcCourseSlidesPPT}
          download="PTC_Slides"
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
          src={ptcCourseSlidesPDF}
          height="725vh"
          width="60%"
          title="Patient Trauma Care"
        />
      </div>
    </div>
  );
};
export default Slides;
