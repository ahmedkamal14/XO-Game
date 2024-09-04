import ScoreBoard from "../Components/ScoreBoard";
import Board from "../Components/Board";
import TurnDisplay from "../Components/TurnDisplay";
import ActionButtons from "../Components/ActionButtons";
import { GameContext } from "../Context/GameContext";
import { useContext } from "react";

const Home = () => {
  const { started } = useContext(GameContext);

  return (
    <div className="bg-primary min-h-screen relative justify-center items-center flex">
      <div className="container bg-[#2B0040] max-w-[500px] h-[800px] rounded-[50px] flex py-[60px] px-[40px] sm:px-[55px] justify-between items-start flex-col z-20">
        <ScoreBoard />
        <Board />
        {started ? <TurnDisplay /> : <ActionButtons />}
      </div>

      <img
        src="./back.png"
        alt="BackGround"
        className=" absolute left-0 bottom-0 w-[450px] h-[450px] z-0"
      />
    </div>
  );
};

export default Home;
