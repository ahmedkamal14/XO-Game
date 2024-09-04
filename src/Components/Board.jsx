import { GameContext } from "../Context/GameContext";
import { useContext } from "react";

const Board = () => {
  const {
    board,
    setBoard,
    turn,
    setTurn,
    updateScores,
    started,
    setStarted,
    setOver,
    setWinner,
    over,
  } = useContext(GameContext);

  const handleClick = (index) => {
    if (!started) return;

    if (over) return;

    if (board[index] || checkWinner(board)) return;

    const newBoard = board.slice();
    newBoard[index] = turn;
    setBoard(newBoard);

    const winner = checkWinner(newBoard);

    if (winner) {
      updateScores(winner);
      setBoard(Array(9).fill(null));
      setOver(true);
      setWinner(winner);
      setTimeout(() => {
        setOver(false);
        setStarted(false);
      }, 5000);
    } else if (!newBoard.includes(null)) {
      updateScores("Draw");
      setBoard(Array(9).fill(null));
      setOver(true);
      setWinner("Draw");
      setTimeout(() => {
        setOver(false);
        setStarted(false);
      }, 5000);
    } else {
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  return (
    <div className="container flex flex-col text-black mb-[20px] h-[60%] w-full justify-between px-[20px]">
      {Array(3)
        .fill()
        .map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="row w-full min-h-[28%] flex justify-between items-center"
          >
            {board.slice(rowIndex * 3, rowIndex * 3 + 3).map((value, index) => (
              <button
                key={rowIndex * 3 + index}
                className="bg-[#43115B] w-[30%] h-[100%] rounded-[10px] relative group"
                onClick={() => handleClick(rowIndex * 3 + index)}
              >
                <h1
                  className={`flex justify-center items-center w-full h-full text-[60px] font-bold ${
                    value === "X" ? "text-player1" : "text-player2"
                  }`}
                >
                  {value}
                </h1>
                {/* Hover effect */}
                {!value && started && !over && (
                  <h1
                    className={`flex justify-center items-center w-full h-full text-[60px] font-bold absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-100 ${
                      turn === "X" ? "text-player1" : "text-player2"
                    }`}
                  >
                    {turn}
                  </h1>
                )}
              </button>
            ))}
          </div>
        ))}
    </div>
  );
};

const checkWinner = (board) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

export default Board;

{
  /*
        <div className="container flex flex-col text-black mb-[20px] h-[60%] w-full justify-between px-[20px]">
      
    </div>  
     <div className="row w-full min-h-[28%] flex justify-between items-center">
        <button
          className="bg-[#43115B] w-[30%] h-[100%] rounded-[10px]"
          onClick={() => handleClick(0)}
        >
          <h1
            className={`flex justify-center items-center w-full h-full text-[60px] font-bold ${board[0] === "X" ? "text-player1" : "text-player2"}`}
          >
            {board[0]}
          </h1>
        </button>
        <button
          className="bg-[#43115B] w-[30%] h-[100%] rounded-[10px]"
          onClick={() => handleClick(1)}
        >
          <h1>{board[1]}</h1>
        </button>
        <button
          className="bg-[#43115B] w-[30%] h-[100%] rounded-[10px]"
          onClick={() => handleClick(2)}
        >
          <h1>{board[2]}</h1>
        </button>
      </div>
      <div className="row w-full min-h-[28%] flex justify-between items-center">
        <button
          className="bg-[#43115B] w-[30%] h-[100%] rounded-[10px]"
          onClick={() => handleClick(3)}
        >
          <h1>{board[3]}</h1>
        </button>
        <button
          className="bg-[#43115B] w-[30%] h-[100%] rounded-[10px]"
          onClick={() => handleClick(4)}
        >
          <h1>{board[4]}</h1>
        </button>
        <button
          className="bg-[#43115B] w-[30%] h-[100%] rounded-[10px]"
          onClick={() => handleClick(5)}
        >
          <h1>{board[5]}</h1>
        </button>
      </div>
      <div className="row w-full min-h-[28%] flex justify-between items-center">
        <button
          className="bg-[#43115B] w-[30%] h-[100%] rounded-[10px]"
          onClick={() => handleClick(6)}
        >
          <h1>{board[6]}</h1>
        </button>
        <button
          className="bg-[#43115B] w-[30%] h-[100%] rounded-[10px]"
          onClick={() => handleClick(7)}
        >
          <h1>{board[7]}</h1>
        </button>
        <button
          className="bg-[#43115B] w-[30%] h-[100%] rounded-[10px] "
          onClick={() => handleClick(8)}
        >
          <h1>{board[8]}</h1>
        </button>
      </div> */
}
