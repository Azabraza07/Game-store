import React from "react";
import "./CartItem.scss";

function CartItem({ title, id, price }) {
  return (
    <div className="cartItem">
      <span>{title}</span>
      <div className="cartItem__price">
        <span>{price} .руб</span>
      </div>
    </div>
  );
}

export default CartItem;
