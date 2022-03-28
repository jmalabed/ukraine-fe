import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "bootstrap/dist/css/bootstrap.min.css";

const initialOptions = {
  "client-id":
    "AUPeNoXci3KJq-FMVBtyB4kfzOBFuuDASwLATHBH0kIX6LjtBncQ_LFKu-kDyKoNv9xezKkZf2QAgfV_",
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
