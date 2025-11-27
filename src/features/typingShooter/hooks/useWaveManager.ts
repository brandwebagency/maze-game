import { useEffect } from "react";
import { calculateEnemiesPerWave } from "../utils/gameHelpers";
import { GAME_CONFIG } from "../constants/gameConfig";

export const useWaveManager = (
  gameRunning: boolean,
  gameOver: boolean,
  betweenWaves: boolean,
  wave: number,
  enemiesSpawned: number,
  enemiesKilled: number,
  enemiesLength: number,
  startWaveTransition: () => void,
  nextWave: () => void
) => {
  useEffect(() => {
    if (!gameRunning || gameOver) return;

    const maxEnemiesThisWave = calculateEnemiesPerWave(wave);

    if (
      !betweenWaves &&
      enemiesSpawned >= maxEnemiesThisWave &&
      enemiesLength === 0
    ) {
      console.log(`Wave ${wave} complete! Starting next wave...`);
      startWaveTransition();

      setTimeout(() => {
        nextWave();
        console.log(`Starting wave ${wave + 1}`);
      }, GAME_CONFIG.waveTransitionDelayMs);
    }
  }, [
    enemiesLength,
    enemiesKilled,
    enemiesSpawned,
    wave,
    gameRunning,
    betweenWaves,
    gameOver,
    startWaveTransition,
    nextWave,
  ]);
};
