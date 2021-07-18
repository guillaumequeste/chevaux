import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderMobile extends Component {
  render() {
    return (
      <div className="bodyHeaderMobile">
        <div className="divHeaderMobile">
          <Link to="/" className="logo">
            <img
              src={require("../img/horse.png")}
              alt="horse"
              className="horse"
            />
          </Link>
          <Link to="/bilan" className="linkHeaderMobile3">
            B+
          </Link>
          <Link to="/credits" className="linkHeaderMobile1">
            Crédits
          </Link>
          <Link to="/contact" className="linkHeaderMobile2">
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

export default HeaderMobile;
