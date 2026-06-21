import { useEffect, useState } from "react";
import PlanetButton from "./PlanetButton";
import PauseMenu from "./PauseMenu";
import { getPlanets, generateRoute, getRouteLength, getDifficultySettings } from "../utils/gameLogic";
import "../styles/GameScreen.css";


function GameScreen({ settings, onEndGame }) {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);

  const [route, setRoute] = useState([]);
  const [playerRoute, setPlayerRoute] = useState([]); 
  const [showRoute, setShowRoute] = useState(true);

  const [paused, setPaused] = useState(false);
  const [activePlanetId, setActivePlanetId] = useState(null);
  const planets = getPlanets(settings.theme, settings.level); 
  
  const difficulty = getDifficultySettings(settings.level);
  const [mistakes, setMistakes] = useState(0);

  useEffect(() => {
    startRound();
  }, [round]);

  const startRound = () => {
    const routeLength = getRouteLength(settings.level, round);
    const newRoute = generateRoute(planets, routeLength);

    setRoute(newRoute);
    setPlayerRoute([]);
    setShowRoute(true);
    setActivePlanetId(null);

    let index = 0;

    const playNextPlanet = () => {
      if (index >= newRoute.length) {
        setShowRoute(false);
        setActivePlanetId(null);
        return;
      }

      setActivePlanetId(newRoute[index].id);

      setTimeout(() => {
        setActivePlanetId(null);
        index++;

        setTimeout(playNextPlanet, difficulty.gapDuration);
      }, difficulty.glowDuration);
    };

    playNextPlanet();
  };


  const handlePlanetClick = (planet) => {
    if (showRoute || paused) return;

    const newPlayerRoute = [...playerRoute, planet];
    setPlayerRoute(newPlayerRoute);

    const currentIndex = newPlayerRoute.length - 1;

    if (planet.id !== route[currentIndex].id) {
      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);

      if (newMistakes > difficulty.mistakesAllowed) {
        finishGame(false);
      }

      return;
    }

    if (newPlayerRoute.length === route.length) {
      const newScore = score + 1;
      setScore(newScore);

      if (settings.rounds !== "unlimited" && round >= Number(settings.rounds)) {
        onEndGame({
          score: newScore,
          round,
          completed: true,
        });
      } else {
        setTimeout(() => {
          setRound(round + 1);
        }, 1000);
      }
    }
  };

  const finishGame = (completed) => {
    onEndGame({
      score,
      round,
      completed,
    });
  };

  return (
    <div className="game-screen">
      <button className="pause-button" onClick={() => setPaused(true)}>
        ☰
      </button>

      {paused && (
        <PauseMenu
          onResume={() => setPaused(false)}
          onEnd={() =>
            onEndGame({
              score,
              round,
              completed: false,
            })
          }
        />
      )}

      <h2>Mission {round}</h2>

      {showRoute ? (
        <p>Memorize the glowing route!</p>
      ) : (
        <p>Click the planets in the correct order.</p>
      )}

      <div className="galaxy-map">
        {planets.map((planet) => (
        <PlanetButton
          key={planet.id}
          planet={planet}
          isGlowing={showRoute && activePlanetId === planet.id}
          disabled={showRoute || paused}
          onClick={handlePlanetClick}
        />
      ))}
      </div>

      <p>Score: {score}</p>
    </div>
  );
}

export default GameScreen;