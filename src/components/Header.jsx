import React from "react";
import PropTypes from "prop-types";


const Header = (props) => {
    return(
      <header>
          <h1>{props.title}</h1>
      </header>
    );
}

Header.prototype = {
    title: PropTypes.string.isRequired,
};

export default Header;