import React, {useState} from 'react';
import PropTypes from "prop-types";
import ReactDOM from "react-dom/client";
import { loadStripe } from "@stripe/stripe-js";
import {
    PaymentElement,
    Elements,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(elements == null) {
            return;
        }

        const {error: submitError} = await elements.submit();
        if(submitError) {
            setErrorMessage(submitError.message);
            return;
        }

        const res = await fetch('./create-intent', {
            method: 'POST',
        });

        const {client_secret: clientSecret} = await res.json();

        const {error} = await stripe.confirmPayment({
           elements,
           clientSecret,
           confirmParams: {
               return_url: 'http://localhost/order/123/complete',
           },
        });

        if(error) {
            setErrorMessage(error.message);
        } else {
            //return url
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement></PaymentElement>
            <div style={{marginTop: '10px'}}></div>
                <button type="submit" disabled={!stripe || !elements}>Pay</button>
                {errorMessage && <div>{errorMessage}</div>}
        </form>
);
};


CheckoutForm.prototype = {
    amount: PropTypes.string.isRequired,
};

const stripePromis = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const CreditCard = (props) => {
    const options = {
    mode: 'payment',
    amount: props.amount,
    currency: 'cad',
};
    console.log(props.amount);
    return (<Elements stripe={stripePromis} options={options}>
        <CheckoutForm></CheckoutForm>
    </Elements>);
};
CreditCard.prototype = {
    amount: PropTypes.string.isRequired,
};

export default CreditCard;