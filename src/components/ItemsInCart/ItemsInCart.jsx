import React from "react";
import './ItemsInCart.scss'

function ItemsInCart({ quantity = 0 }) {
  return quantity > 0 ? <div className="itemsInCart">{quantity}</div> : null;
}

export default ItemsInCart;
