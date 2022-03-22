import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Suggestions = (props) => {
  const [input, setInput] = useState({ body: "" });

  const handleChange = (e) => {
    setInput({ body: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeSuggestion(input);
    alert("Your suggestion has been received!");
  };

  const makeSuggestion = async (data) => {
    try {
      const configs = {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
      };
      const madeSuggestion = await fetch(
        "https://ukrainebe.herokuapp.com/suggestion/",
        configs
      );
      const parsedSuggestion = await madeSuggestion.json();
      console.log(parsedSuggestion);
    } catch (e) {
      console.log(e);
    } finally {
      setInput({ body: "" });
    }
  };

  return (
    <div>
      <h1>Suggestions</h1>
      <p>Please share any suggestions for additional content below!</p>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              name="input"
              id="input"
              onChange={handleChange}
              value={input.body}
              className="suggestion-box"
            ></Form.Control>
          </Form.Group>
          <Button type="submit" className="mt-3">
            Submit!
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Suggestions;
