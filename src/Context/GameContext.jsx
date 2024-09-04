import { createContext } from "react";
import PropTypes from "prop-types";
import { useLocalStorage } from "react-use";

export const GameContext = createContext({
  playerXScore: 0,
  playerOScore: 0,
  draws: 0,
  updateScores: () => {},
});

export const GameProvider = ({ children }) => {
  const [playerXScore, setPlayerXScore] = useLocalStorage("playerXScore", 0);
  const [playerOScore, setPlayerOScore] = useLocalStorage("playerOScore", 0);
  const [draws, setDraws] = useLocalStorage("draws", 0);
  const [turn, setTurn] = useLocalStorage(
    "turn",
    Math.random() > 0.5 ? "X" : "O"
  );
  const [started, setStarted] = useLocalStorage("started", false);
  const [board, setBoard] = useLocalStorage("board", Array(9).fill(null));

  const updateScores = (result) => {
    if (result === "X") {
      setPlayerXScore(playerXScore + 1);
    } else if (result === "O") {
      setPlayerOScore(playerOScore + 1);
    } else if (result === "Draw") {
      setDraws(draws + 1);
    }
  };

  return (
    <GameContext.Provider
      value={{
        playerXScore,
        playerOScore,
        draws,
        setPlayerXScore,
        setPlayerOScore,
        setDraws,
        updateScores,
        turn,
        setTurn,
        started,
        setStarted,
        board,
        setBoard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
