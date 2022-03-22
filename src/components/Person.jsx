const Person = (props) => {
  return (
    <div className="d-flex flex-row">
      <img
        src={props.person.image}
        alt="blank name"
        className="aboutImg"
        width="20%"
        height="20%"
      ></img>
      <div className="p-3">
        <h2 className="pb-2 mb-2">
          {props.person.name}
          {props.person.titles.length > 0 ? (
            <>, {props.person.titles}</>
          ) : (
            <></>
          )}
        </h2>
        <div className="d-flex">
          <img
            src="data:image/png;base64,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"
            alt="location icon"
            width="25em"
            height="25em"
          />
          <p className="">{props.person.location}</p>
        </div>
        <p>{props.person.about}</p>
      </div>
    </div>
  );
};
export default Person;
