import { Button } from "react-bootstrap";

const NotFound = (props) => {
  return (
    <div>
      <h1>Not Found :(</h1>
      <a href="/">
        <Button variant="primary">Return Home</Button>
      </a>
    </div>
  );
};

export default NotFound;
