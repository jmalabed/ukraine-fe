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
    "data-client-token": "abc123xyz==",
  };
  return (
    <div>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons style={style} />
      </PayPalScriptProvider>
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="7VCSU9UDZGATJ" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  );
};

export default PayPal;
