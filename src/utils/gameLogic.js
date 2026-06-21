import { planetThemes } from "../data/planetThemes";

export const difficultySettings = {
  cadet: {
    planetsVisible: 5,
    baseRouteLength: 3,
    maxRouteLength: 5,
    glowDuration: 1000,
    gapDuration: 300,
    mistakesAllowed: 2,
  },

  captain: {
    planetsVisible: 6,
    baseRouteLength: 4,
    maxRouteLength: 6,
    glowDuration: 750,
    gapDuration: 250,
    mistakesAllowed: 1,
  },

  admiral: {
    planetsVisible: 8,
    baseRouteLength: 5,
    maxRouteLength: 8,
    glowDuration: 500,
    gapDuration: 200,
    mistakesAllowed: 0,
  },
};

export function getDifficultySettings(level) {
  return difficultySettings[level] || difficultySettings.cadet;
}

export function getPlanets(theme, level) {
  const difficulty = getDifficultySettings(level);
  const allPlanets = planetThemes[theme] || planetThemes.realistic || [];

  return allPlanets.slice(0, difficulty.planetsVisible);
}

export function getRouteLength(level, round) {
  const difficulty = getDifficultySettings(level);

  return Math.min(
    difficulty.baseRouteLength + round - 1,
    difficulty.maxRouteLength
  );
}

export function generateRoute(planets, routeLength) {
  const shuffled = [...planets].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, routeLength);
}