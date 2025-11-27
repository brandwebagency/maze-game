import { ENEMY_IMAGES } from "../../constants/images";
import { WORDS } from "../../constants/words";
import {
  calculateEnemySpeed,
  calculateSafeSpawnPosition,
} from "../../utils/gameHelpers";
import { Enemy } from "../../types/game.types";

export const createEnemy = (wave: number): Enemy => {
  const word = WORDS[Math.floor(Math.random() * WORDS.length)];
  const startX = calculateSafeSpawnPosition(word.length);
  const image = ENEMY_IMAGES[Math.floor(Math.random() * ENEMY_IMAGES.length)];

  return {
    id: Math.random(),
    word,
    typedChars: 0,
    x: startX,
    y: -10,
    speed: calculateEnemySpeed(wave),
    isActive: false,
    image,
  };
};
