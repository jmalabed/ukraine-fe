import {
  PayPalScriptProvider,
  usePayPalScriptReducer,
  PayPalButtons,
} from "@paypal/react-paypal-js";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const PayPal = (props) => {
  const [amount, setAmount] = useState();
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  const style = {
    layout: "horizontal",
    color: "gold",
    shape: "pill",
    label: "paypal",
    tagline: true,
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
    if (e.target.value < 0) {
      alert("Please enter a value greater than 0.");
      setAmount();
    }
    if (e.target.value * 100 !== Math.floor(e.target.value * 100)) {
      alert("We have rounded your donation down to the nearest cent.");
      setAmount(Math.floor(e.target.value * 100) / 100);
    }
  };

  const makeDonation = async () => {
    try {
      const configs = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      };

      const donate = await fetch(
        "https://ukrainebe.herokuapp.com/donation/",
        configs
      );
      const parsedDonate = await donate.json();
      console.log(parsedDonate);
      props.setDonations(props.donations + parsedDonate);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Form onSubmit={(e) => e.preventDefault()} className="d-flex mb-3">
        <Form.Label htmlFor="amount" className="pt-2">
          $
        </Form.Label>
        <Form.Control
          onChange={handleChange}
          value={amount}
          type="number"
          id="amount"
          name="amount"
        />
      </Form>
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            makeDonation();
            alert("Order completed!");
          });
        }}
      />
    </div>
  );
};

export default PayPal;
