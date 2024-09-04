import { GameContext } from "../Context/GameContext";
import { useContext } from "react";

const TurnDisplay = () => {
  const { turn } = useContext(GameContext);

  return (
    <div className="container w-full px-[20px] my-12 ">
      <div
        className={`flex justify-center items-center w-full ${
          turn === "X" ? "bg-player1" : "bg-player2"
        }`}
      >
        <h1 className="text-black text-[24px] font-bold">{turn} Turn</h1>
      </div>
    </div>
  );
};

export default TurnDisplay;
