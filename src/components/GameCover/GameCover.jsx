import React from "react";
import "./GameCover.scss";

const GameCover = ({ image = "" }) => {
  return (
    <div className="gameCover" style={{ backgroundImage: `url(${image})` }} />
  );
};
export default GameCover;
