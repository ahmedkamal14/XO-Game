import "./Styles/App.css";
import Home from "./Pages/Home";
import { GameProvider } from "./Context/GameContext";

function App() {
  return (
    <>
      <GameProvider>
        <Home />
      </GameProvider>
    </>
  );
}

export default App;
