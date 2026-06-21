import "../styles/PauseMenu.css";

function PauseMenu({ onResume, onEnd }) {
  return (
    <div className="pause-overlay">
      <div className="pause-card">
        <h2>Game Paused</h2>
        <button onClick={onResume}>Resume Mission</button>
        <button onClick={onEnd}>End Game Early</button>
      </div>
    </div>
  );
}

export default PauseMenu;