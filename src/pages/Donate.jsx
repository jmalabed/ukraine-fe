import PayPal from "../components/PayPal";
import { Card } from "react-bootstrap";
const Donate = (props) => {
  return (
    <div>
      <h1 className="header">Donate</h1>
      <Card className="p-5 d-flex flex-column justify-content-center align-items-center">
        <p>
          Please consider donating to help cover medical material and
          operational technology costs that have been accrued to provide this
          material for everyone in need. Excess donations will be donated to a
          reputable organization.
        </p>
        <PayPal />
      </Card>
    </div>
  );
};

export default Donate;
