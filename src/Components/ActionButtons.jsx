import { GameContext } from "../Context/GameContext";
import { useContext } from "react";

const ActionButtons = () => {
  const { setPlayerXScore, setPlayerOScore, setDraws, setStarted, setBoard } =
    useContext(GameContext);

  const handleResetScore = () => {
    setPlayerXScore(0);
    setPlayerOScore(0);
    setDraws(0);
    setBoard(Array(9).fill(null));
  };

  const handleNewGame = () => {
    setStarted(true);
  };

  return (
    <div className="flex flex-col gap-3 w-full justify-center items-center mt-7">
      <button
        className="btn bg-[#F4F6F5] hover:bg-[#F4F6F5]/80 transition-all duration-300 w-full text-black text-[16px] font-bold py-4 rounded-[10px]"
        onClick={handleNewGame}
      >
        New Game
      </button>
      <button
        className="btn bg-[#F4F6F5]/20 hover:bg-[#F4F6F5]/40 transition-all duration-300 w-full text-white text-[16px] font-bold py-4 rounded-[10px]"
        onClick={handleResetScore}
      >
        Reset Score
      </button>
    </div>
  );
};

export default ActionButtons;
