import { useState } from "react";
import "../styles/StartScreen.css";
import realisticBg from "../assets/planets/real/realistic.jpg";
import fantasyBg from "../assets/planets/fantasy/fantasy.jpg";

function StartScreen({ onStart }) {
  const [level, setLevel] = useState("cadet");
  const [rounds, setRounds] = useState("3");
  const [theme, setTheme] = useState("realistic");

  const handleStart = () => {
    onStart({
      level,
      rounds,
      theme,
    });
  };

  return (
    <div
      className="start-screen"
      style={{
        backgroundImage: `url(${
          theme === "fantasy"
            ? fantasyBg
            : realisticBg
        })`,
      }}
    >
      <div className="start-card">
        <h1>Navigate the Galaxy</h1>
        <p>Memorize the route. Guide your ship through space.</p>


        <div className="settings-card">
          <div className="setting-column">
            <label>Difficulty</label>
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="cadet">Easy</option>
              <option value="captain">Medium</option>
              <option value="admiral">Hard</option>
            </select>
          </div>

          <div className="setting-column">
            <label>Rounds</label>
            <select value={rounds} onChange={(e) => setRounds(e.target.value)}>
              <option value="3">3 Rounds</option>
              <option value="5">5 Rounds</option>
              <option value="unlimited">Unlimited</option>
            </select>
          </div>

          <div className="setting-column">
            <label>Galaxy Theme</label>
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value="realistic">Realistic Space</option>
              <option value="fantasy">Fantasy Galaxy</option>
            </select>
          </div>
        </div>

        <button className="start-button" onClick={handleStart}>
          Enter Portal
        </button>
      </div>
    </div>
  );
}

export default StartScreen;