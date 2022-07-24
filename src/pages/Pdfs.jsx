import ptcCourseManualEn from "../resources/english/PTC-Course-Manual-2018.pdf";
import ptcCourseManualUkr from "../resources/ukrainian/Первинна_травматологічна_допомога_посібник.pdf";
import ptcCourseManualRu from "../resources/russian/RUSSIANTOPTC.pdf";
import LanguageSelector from "../components/LanguageSelector";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Pdfs = (props) => {
  const [lang, setLang] = useState("English");

  const resources = [
    {
      src: ptcCourseManualEn,
      title: "Primary Trauma Care Manual",
      download: "Download",
      language: "English",
    },
    {
      src: ptcCourseManualUkr,
      title: "Інструкція з первинної травматологічної допомоги",
      download: "завантажити",
      language: "українська",
    },
    {
      src: ptcCourseManualRu,
      title: "Руководство по первичной помощи при травмах",
      download: "скачать",
      language: "Русский",
    },
  ];

  const pdfList = resources
    .filter((res) => res.language === lang)
    .map((res) => (
      <div className=" d-flex flex-column justify-content-center">
        <div className="d-flex flex-row justify-content-between align-items-bottom my-3">
          <h1 className="">{res.title}</h1>
          <a
            className="d-flex align-items-center"
            href={res.src}
            download="PTC_Manual"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="success" className="mx-5">
              {res.download}
            </Button>
          </a>
        </div>
        <div className="mw-100 w-100 d-flex flex-column align-items-center ">
          <iframe className="pdf-frame" src={res.src} title={res.title} />
        </div>
      </div>
    ));

  return (
    <div className="d-flex flex-column">
      <LanguageSelector lang={lang} setLang={setLang} />
      {pdfList}
    </div>
  );
};
export default Pdfs;
