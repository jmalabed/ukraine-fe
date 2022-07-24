import { Dropdown } from "react-bootstrap";
import "./style/LanguageSelector.css";
const LanguageSelector = (props) => {
  const { lang, setLang } = props;

  const languageList = ["English", "українська", "Русский"];

  const availLanguages = languageList.filter((curLang) => curLang !== lang);
  console.log(availLanguages);

  const handleClick = (e) => {
    setLang(e.target.text);
  };

  const dropDownList = availLanguages.map((avail) => (
    <Dropdown.Item onClick={handleClick}>{avail}</Dropdown.Item>
  ));

  return (
    <div className="d-flex align-items-center selector-height">
      <p className="m-2 p-2">
        Current Language: <p className="language-font p-1">{lang}</p>
      </p>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Other Langauges
        </Dropdown.Toggle>

        <Dropdown.Menu>{dropDownList}</Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LanguageSelector;
