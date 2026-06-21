import { useState } from "react";
import "../styles/StartScreen.css";

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
    <div className="start-screen">
      <div className="start-card">
        <h1>Navigate the Galaxy</h1>
        <p>Memorize the route. Guide your ship through space.</p>

        <label>Difficulty</label>
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="cadet">Easy</option>
          <option value="captain">Medium</option>
          <option value="admiral">Hard</option>
        </select>

        <label>Rounds</label>
        <select value={rounds} onChange={(e) => setRounds(e.target.value)}>
          <option value="3">3 Rounds</option>
          <option value="5">5 Rounds</option>
          <option value="unlimited">Unlimited</option>
        </select>

        <label>Galaxy Theme</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="realistic">Realistic Space</option>
          <option value="fantasy">Fantasy Galaxy</option>
        </select>

        <button onClick={handleStart}>~Enter Portal~</button>
      </div>
    </div>
  );
}

export default StartScreen;