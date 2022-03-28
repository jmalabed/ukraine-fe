import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "bootstrap/dist/css/bootstrap.min.css";

const initialOptions = {
  "client-id":
    "AXZbDkVWvEmbxUhhmINcRDkoIU-_bB3CzL0CA_0_On7vUtGCJIWxX0cd3kEYpughAna217jSoOyPfof8",
  currency: "USD",
  intent: "capture",
};

ReactDOM.render(
  <Router>
    <PayPalScriptProvider options={initialOptions}>
      <App />
    </PayPalScriptProvider>
  </Router>,
  document.getElementById("root")
);
