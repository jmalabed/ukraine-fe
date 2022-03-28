import {
  PayPalScriptProvider,
  usePayPalScriptReducer,
  PayPalButtons,
} from "@paypal/react-paypal-js";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const PayPal = (props) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);

  // This values are the props in the UI
  const amount = "100";

  const style = {
    layout: "horizontal",
    color: "gold",
    shape: "pill",
    label: "paypal",
    tagline: true,
  };
  const initialOptions = {
    "client-id":
      "AUPeNoXci3KJq-FMVBtyB4kfzOBFuuDASwLATHBH0kIX6LjtBncQ_LFKu-kDyKoNv9xezKkZf2QAgfV_",
    currency: "USD",
    intent: "capture",
  };

  function onCurrencyChange({ target: { value } }) {
    setCurrency(value);
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: "USD",
      },
    });
  }

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <div>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
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
            alert("Order completed!");
          });
        }}
      />
    </div>
  );
};

export default PayPal;
