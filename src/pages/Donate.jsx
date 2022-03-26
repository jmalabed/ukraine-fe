import PayPal from "../components/PayPal";

const Donate = (props) => {
  return (
    <div>
      <h1>Donate</h1>
      <p>
        Please consider donating to help cover medical material and server costs
        that have been accrued to provide this material for everyone in need.
        Excess donations will be donated to a reputable organization.
      </p>
      <PayPal />
    </div>
  );
};

export default Donate;
