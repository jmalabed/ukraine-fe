import { useState, useEffect } from "react";
import PayPal from "../components/PayPal";
import { Card } from "react-bootstrap";

const Donate = (props) => {
  const [donations, setDonations] = useState(0);

  const getDonations = async () => {
    try {
      const donationAmount = await fetch(
        "http://ukrainebe.herokuapp.com/donation/"
      );
      const parsedDonations = await donationAmount.json();
      parsedDonations === 0
        ? setDonations(0)
        : setDonations(parsedDonations.amount);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDonations();
  }, []);

  return (
    <div>
      <h1 className="header">Donate</h1>
      <Card className="p-5 d-flex flex-column justify-content-center align-items-center">
        <p className="mb-5">
          Please consider donating to help cover medical material and
          operational technology costs that have been accrued to provide this
          material for everyone in need. Excess donations will be donated to a
          reputable organization.
        </p>
        <PayPal setDonations={setDonations} donations={donations} />
        <div className="text-center mt-5">
          <h2>Total donations to date:</h2>
          <h3>${donations}</h3>
        </div>
      </Card>
    </div>
  );
};

export default Donate;
