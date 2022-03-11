import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Suggestions = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting data! ", input);
  };

  return (
    <div>
      <h1>Suggestions</h1>
      <p>Please share any suggestions for additional content below!</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            name="input"
            id="input"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Submit!</Button>
      </Form>
    </div>
  );
};
export default Suggestions;
