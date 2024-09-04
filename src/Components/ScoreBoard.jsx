import { useContext } from "react";
import { GameContext } from "../Context/GameContext";
import ScoreBox from "./ScoreBox";

const ScoreBoard = () => {
  const { playerXScore, playerOScore, draws } = useContext(GameContext);
  return (
    <div className="container flex text-black justify-between items-center mb-[40px] px-[20px]">
      <ScoreBox title="Player X" score={playerXScore} bg="bg-player1" />
      <ScoreBox title="Draw" score={draws} bg="bg-draw" />
      <ScoreBox title="Player O" score={playerOScore} bg="bg-player2" />
    </div>
  );
};

export default ScoreBoard;
