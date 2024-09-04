import { GameContext } from "../Context/GameContext";
import { useContext } from "react";

const GameOver = () => {
  const { over, winner } = useContext(GameContext);

  return (
    <>
      {over && (
        <div className="container px-[20px] relative">
          <div className="relative w-full px-[20px] bg-[#06802F] text-white font-bold py-[18px] rounded-[5px] text-center z-10">
            <h1>Game Over. {winner}</h1>
          </div>
          <img
            src="./left.png"
            alt="Left"
            className="absolute -left-4 -bottom-3 w-12 -z-10"
          />
          <img
            src="./right.png"
            alt="Right"
            className="absolute -right-4 -bottom-3 w-12 -z-10"
          />
        </div>
      )}
    </>
  );
};

export default GameOver;
