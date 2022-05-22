import React from "react";
import { Link } from "react-router-dom";
import Cartblock from "../Cartblock/Cartblock";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="logo__title">
          Game Store
        </Link>
        <div className="cart_price">
          <Cartblock />
        </div>
      </div>
    </div>
  );
}

export default Header;
