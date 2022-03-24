import PayPal from "../components/PayPal";

const Donate = (props) => {
  return (
    <div>
      <h1>Donate</h1>
      <p>
        Please consider donating to help cover material and server costs that
        have been accrued to provide this material for everyone in need.
      </p>
      <PayPal />
    </div>
  );
};

export default Donate;
