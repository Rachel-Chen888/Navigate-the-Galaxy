import "../styles/EndScreen.css";

function EndScreen({ scoreData, onGoHome }) {
  return (
    <div className="end-screen">
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