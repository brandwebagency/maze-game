export interface GameHUDProps {
  score: number;
  lives: number;
  wave: number;
  enemiesSpawned: number;
  maxEnemies: number;
  enemiesKilled: number;
  speed: number;
  maxOnScreen: number;
  enemiesOnScreen: number;
  betweenWaves: boolean;
  gameRunning: boolean;
}
