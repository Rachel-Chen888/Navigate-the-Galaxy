import { useState } from "react";
import StartScreen from "./components/StartScreen";
import PortalTransition from "./components/PortalTransition";
import GameScreen from "./components/GameScreen";
import EndScreen from "./components/EndScreen";

function App() {
  const [screen, setScreen] = useState("start");
  const [settings, setSettings] = useState(null);
  const [finalScore, setFinalScore] = useState(null);

  const startGame = (chosenSettings) => {
    setSettings(chosenSettings);
    setScreen("portal");

    setTimeout(() => {
      setScreen("game");
    }, 2500);
  };

  const endGame = (scoreData) => {
    setFinalScore(scoreData);
    setScreen("end");
  };

  const goHome = () => {
    setSettings(null);
    setFinalScore(null);
    setScreen("start");
  };

  return (
    <>
      {screen === "start" && <StartScreen onStart={startGame} />}

      {screen === "portal" && <PortalTransition />}

      {screen === "game" && (
        <GameScreen settings={settings} onEndGame={endGame} />
      )}

      {screen === "end" && (
        <EndScreen scoreData={finalScore} onGoHome={goHome} />
      )}
    </>
  );
}

export default App;