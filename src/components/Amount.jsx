import React from "react";
import PropTypes from "prop-types";
const Amount = (props) => {
    return(
        <h1>$ {props.title}</h1>

    );
}
Amount.prototype = {
    title: PropTypes.string.isRequired,
};

export default Amount;