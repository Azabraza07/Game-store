import React from "react";
import GameCover from "../GameCover/GameCover";
import GameGenre from "../GameGentre/GameGenre";
import GameBuy from "../GameBuy/GameBuy";
import { useNavigate } from "react-router-dom";
import { setCurrentGame } from "../../redux/games/reducer";
import { useDispatch } from "react-redux";
import "./GameItem.scss";


function GameItem({ game }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`);
  };

  return (
    <div className="gameItem" onClick={handleClick}>
      <GameCover image={game.image} />
      <div className="gameItem__inner">
        <span className="gameItem__title">{game.title}</span>
        <div className="gameItem__genre">
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <GameBuy game={game}/>
      </div>
    </div>
  );
}

export default GameItem;
