import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";

const initialOptions = {
    clientId : "test",
    currency: "CAD",
    intent: "capture"
};

export default function Paypal() {
    return (<PayPalScriptProvider options={initialOptions}>
        <PayPalButtons style={{layout: "horizontal"}}/>
    </PayPalScriptProvider>
);
}