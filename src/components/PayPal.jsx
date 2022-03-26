import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPal = (props) => {
  const style = {
    layout: "horizontal",
    color: "gold",
    shape: "pill",
    label: "paypal",
    tagline: true,
  };
  const initialOptions = {
    "client-id":
      "AVNWl_Aeq_fOYJCIJ52k571ffit4cXHRPvNl2YifNKFS63Zu_gaoHNDq2xu18EVTVMKWux_xlXmh3hGf",
    currency: "USD",
    intent: "capture",
  };
  return (
    <div>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons style={style} />
      </PayPalScriptProvider>
    </div>
  );
};

export default PayPal;
