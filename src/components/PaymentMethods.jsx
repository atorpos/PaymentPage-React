import React, { useState } from 'react';
import CreditCard from './CreditCard';
import Paypal from "./Paypal.jsx"; // Assuming CreditCard is a JS component. If not, you need to convert that too.
import styled from "styled-components";
import PropTypes from "prop-types";
const PaymentMethods = (props) => {
    const [selectedMethod, setSelectedMethod] = useState(null);

    const handleSelectMethod = (method) => {
        setSelectedMethod(method);
    }

    const Button = styled.button`
        min-height: 32px;
        padding: 0px 32px;
        border-radius: 16px;
        border: none;
        color: white;
        font-size: 1rem;
        font-weight: 600;
        text-shadow: 1px 1px 0px #3a00df;
        background: linear-gradient(170deg, #359eff 5%, #3a00df 95%);
        margin: 5px 5px;
    `;

    return (
        <div>
            <h2>Select a payment method:</h2>
            <div>
                <Button onClick={() => handleSelectMethod('Credit Card')}>
                    Credit Card
                </Button>
                <Button onClick={() => handleSelectMethod('PayPal')}>
                    PayPal
                </Button>
                <Button onClick={() => handleSelectMethod('Bank Transfer')}>
                    Bank Transfer
                </Button>
                <Button onClick={() => handleSelectMethod('QR Code')}>
                    QR Payment
                </Button>
            </div>
            <div style={{marginTop: '10px'}}>
            {/* {selectedMethod && <div>Selected method: {selectedMethod}</div>} */}
            {selectedMethod === 'Credit Card' && (
                // eslint-disable-next-line react/prop-types
                <CreditCard amount={parseInt(props.amount + "00", 10)} ></CreditCard>
            )}
            {selectedMethod === 'PayPal' && (<Paypal></Paypal>)}
            {selectedMethod === 'Bank Transfer' && (<div>Bank Transfer</div>)}
            {selectedMethod === 'QR Code' && (<div>QR CODE</div>)}
            </div>
        </div>
    );
};
PaymentMethods.prototype = {
    amount: PropTypes.string.isRequired,
};

export default PaymentMethods;