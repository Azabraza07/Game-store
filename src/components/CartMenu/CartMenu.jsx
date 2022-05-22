import React from "react";
import "./CartMenu.scss";
import { calcTotalPrice } from "../../utils";
import Button from "../UI/Button/Button";
import CartItem  from "../CartItem/CartItem";

function CartMenu({ items, onClick }) {
  return (
    <div className="cartMenu">
      <div className="cartMenu__games-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Корзина пустая"}
      </div>
      {items.length > 0 ? (
        <div className="cartMenu__arrange">
          <div className="cartMenu__total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)}</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default CartMenu;
