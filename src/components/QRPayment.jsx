import React from "react";
import QRCode from "qrcode.react";
import PropTypes from "prop-types";

const QRPayment = (props) => {
    console.log(props.amount);
    return(
        <div>
            <h2>QR Payment</h2>
            <QRCode value={"https://www.google.com/t?=" + props.amount}></QRCode>
            <p className="read-the-docs">Please scan the QRCode.</p>
        </div>
    );
};
QRPayment.prototype = {
    amount: PropTypes.string.isRequired
};

export default QRPayment;