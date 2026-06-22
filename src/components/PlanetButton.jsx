import { useState } from "react";

function PlanetButton({ planet, isGlowing, onClick, disabled }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();

    if (disabled) return;

    setClicked(true);
    onClick(planet);

    setTimeout(() => {
      setClicked(false);
    }, 300);
  };

  return (
    <button
      type="button"
      className={`planet-button ${isGlowing ? "glowing" : ""} ${
        clicked ? "clicked" : ""
      }`}
      style={{ left: planet.x, top: planet.y }}
      onClick={handleClick}
      disabled={disabled}
    >
      <img src={planet.image} alt={planet.name} className="planet-img" />
      <small>{planet.name}</small>
    </button>
  );
}

export default PlanetButton;