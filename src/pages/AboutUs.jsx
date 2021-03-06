import { useState, useEffect } from "react";
import Person from "../components/Person";

const AboutUs = (props) => {
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    try {
      const foundPeople = await fetch(
        "https://ukrainebe.herokuapp.com/person/"
      );
      const parsedPeople = await foundPeople.json();
      setPeople(parsedPeople);
    } catch (e) {
      console.log(e);
    }
  };

  const list = people ? (
    people.map((person, idx) => (
      <div key={idx}>
        <Person person={person} />
        <hr className="divider" />
      </div>
    ))
  ) : (
    <div>
      <p>no people loaded yet :(</p>
    </div>
  );

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div>
      <h1 className="header">About Us</h1>
      <h2>
        ** There is a{" "}
        <a
          href="https://docs.google.com/spreadsheets/d/1avr1swLuMXuCaM1h3CtYi9OWcTOYc7oQMwg2epe9CB8/edit?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          google doc
        </a>{" "}
        to add your info to. **
      </h2>
      {list}
    </div>
  );
};

export default AboutUs;
