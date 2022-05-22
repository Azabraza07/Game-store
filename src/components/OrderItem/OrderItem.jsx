import React from "react";
import { useDispatch } from "react-redux";
import GameCover from "../GameCover/GameCover";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { deleteItemFromCart } from "../../redux/cart/reducer";
import "./OrderItem.scss";

function OrderItem({ game }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };
  return (
    <div className="orderItem">
      <div className="orderItem__cover">
        <GameCover image={game.image} />
      </div>
      <div className="orderItem__title">
        <span>{game.title}</span>
      </div>
      <div className="orderItem__price">
        <span>{game.price} .руб</span>
        <AiOutlineCloseCircle
          size={25}
          className="cartItem__delete-icon"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default OrderItem;
