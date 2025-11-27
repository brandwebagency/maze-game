export interface Enemy {
  id: number;
  word: string;
  typedChars: number;
  x: number;
  y: number;
  speed: number;
  isActive: boolean;
  image: string;
}
export interface GameState {
  enemies: Enemy[];
  score: number;
  lives: number;
  wave: number;
  gameRunning: boolean;
  gameOver: boolean;
  enemiesSpawned: number;
  enemiesKilled: number;
  betweenWaves: boolean;
  currentInput: string;
}
