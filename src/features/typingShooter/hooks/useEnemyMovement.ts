import { useEffect } from "react";
import { GAME_CONFIG } from "../constants/gameConfig";
import { Enemy } from "../types/game.types";

export const useEnemyMovement = (
  gameRunning: boolean,
  gameOver: boolean,
  updateEnemies: (updater: (enemies: Enemy[]) => Enemy[]) => void,
  loseLife: () => void,
  setCurrentInput: (input: string) => void
) => {
  useEffect(() => {
    if (!gameRunning || gameOver) return;

    const moveInterval = setInterval(() => {
      updateEnemies((prev) => {
        const newEnemies = prev
          .map((enemy) => ({
            ...enemy,
            y: enemy.y + enemy.speed,
          }))
          .filter((enemy) => {
            if (enemy.y > 100) {
              console.log(`Enemy reached bottom: "${enemy.word}"`);

              setCurrentInput("");
              setTimeout(() => {
                updateEnemies((current) =>
                  current.map((e) => ({ ...e, isActive: false }))
                );
              }, 0);

              loseLife();
              return false;
            }
            return true;
          });

        return newEnemies;
      });
    }, GAME_CONFIG.moveIntervalMs);

    return () => clearInterval(moveInterval);
  }, [gameRunning, gameOver, updateEnemies, loseLife, setCurrentInput]);
};
