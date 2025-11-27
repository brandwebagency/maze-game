import { GAME_CONFIG } from "../constants/gameConfig";

export const calculateEnemiesPerWave = (waveNum: number): number => {
  return Math.min(
    GAME_CONFIG.baseEnemiesPerWave +
      waveNum * GAME_CONFIG.enemiesPerWaveIncrement,
    GAME_CONFIG.maxEnemiesPerWave
  );
};

export const calculateEnemySpeed = (wave: number): number => {
  const baseSpeed =
    GAME_CONFIG.baseSpeed +
    wave * GAME_CONFIG.speedIncrement +
    (wave > GAME_CONFIG.highWaveThreshold
      ? (wave - GAME_CONFIG.highWaveThreshold) * GAME_CONFIG.highWaveSpeedBonus
      : 0);

  const speedVariation =
    Math.random() *
      (GAME_CONFIG.speedVariationMax - GAME_CONFIG.speedVariationMin) +
    GAME_CONFIG.speedVariationMin;

  return baseSpeed * speedVariation;
};

export const calculateMaxOnScreen = (wave: number): number => {
  return Math.min(
    GAME_CONFIG.baseMaxOnScreen + wave,
    GAME_CONFIG.maxOnScreenCap
  );
};

export const calculateSpawnInterval = (wave: number): number => {
  return Math.max(
    GAME_CONFIG.spawnIntervalBase - wave * GAME_CONFIG.spawnIntervalDecrement,
    GAME_CONFIG.spawnIntervalMin
  );
};

export const calculateScore = (wordLength: number): number => {
  return wordLength * GAME_CONFIG.pointsPerChar;
};

export const calculateSafeSpawnPosition = (wordLength: number): number => {
  // Estimate character width in monospace font (approximately 10px per character)
  // Add padding for the box (16px total) and emoji width
  const estimatedTextWidth = wordLength * 10 + 16;

  // Calculate minimum and maximum safe positions as percentages
  // Assuming viewport width, we need to leave room on both sides
  const minSafePercent = 10; // Leave 10% margin on the left
  const maxSafePercent = 90; // Leave 10% margin on the right

  // For very long words, increase the margins
  const additionalMargin = Math.max(0, (wordLength - 8) * 0.5);

  const adjustedMinPercent = minSafePercent + additionalMargin;
  const adjustedMaxPercent = maxSafePercent - additionalMargin;

  // Random position within safe range
  const range = adjustedMaxPercent - adjustedMinPercent;
  return adjustedMinPercent + Math.random() * range;
};
