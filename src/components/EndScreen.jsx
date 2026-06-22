import "../styles/EndScreen.css";
import realisticBg from "../assets/planets/real/realistic.jpg";
import fantasyBg from "../assets/planets/fantasy/fantasy.jpg";


function EndScreen({ scoreData, settings, onGoHome }) {
  const backgroundImage =
  settings?.theme === "fantasy"
    ? fantasyBg
    : realisticBg;

  return (
    <div
      className="end-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="end-card">
        <h1>Mission Report</h1>

        <p>Final Score: {scoreData.score}</p>
        <p>Rounds Finished: {scoreData.round}</p>

        {scoreData.completed ? (
          <h2>Galaxy Route Completed!</h2>
        ) : (
          <h2>Navigation Ended</h2>
        )}

        <button onClick={onGoHome}>Back to Home</button>
      </div>
    </div>
  );
}

export default EndScreen;