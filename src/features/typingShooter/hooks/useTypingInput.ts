import { useCallback, useState } from "react";
import { Enemy } from "../types/game.types";
import { calculateScore } from "../utils/gameHelpers";

export const useTypingInput = (
  enemies: Enemy[],
  gameRunning: boolean,
  gameOver: boolean,
  updateEnemies: (updater: (enemies: Enemy[]) => Enemy[]) => void,
  removeEnemy: (enemyId: number) => void,
  incrementScore: (points: number) => void,
  setCurrentInput: (input: string) => void
) => {
  const [isInputInvalid, setIsInputInvalid] = useState(false);

  const handleInputChange = useCallback(
    (input: string) => {
      const lowerInput = input.toLowerCase();
      setCurrentInput(lowerInput);

      if (!gameRunning || gameOver) return;

      // Check if input matches any enemy
      const matchingEnemy = enemies.find(
        (enemy) =>
          !enemy.isActive && enemy.word.toLowerCase().startsWith(lowerInput)
      );

      if (matchingEnemy && lowerInput.length > 0) {
        setIsInputInvalid(false);
        updateEnemies((prev) =>
          prev.map((enemy) =>
            enemy.id === matchingEnemy.id
              ? { ...enemy, isActive: true, typedChars: lowerInput.length }
              : { ...enemy, isActive: false }
          )
        );

        if (lowerInput === matchingEnemy.word.toLowerCase()) {
          removeEnemy(matchingEnemy.id);
          incrementScore(calculateScore(matchingEnemy.word.length));
          setCurrentInput("");
        }
      } else if (lowerInput.length > 0) {
        const activeEnemy = enemies.find((enemy) => enemy.isActive);
        if (
          activeEnemy &&
          activeEnemy.word.toLowerCase().startsWith(lowerInput)
        ) {
          setIsInputInvalid(false);
          updateEnemies((prev) =>
            prev.map((enemy) =>
              enemy.id === activeEnemy.id
                ? { ...enemy, typedChars: lowerInput.length }
                : enemy
            )
          );

          if (lowerInput === activeEnemy.word.toLowerCase()) {
            removeEnemy(activeEnemy.id);
            incrementScore(calculateScore(activeEnemy.word.length));
            setCurrentInput("");
          }
        } else {
          setIsInputInvalid(true);
          updateEnemies((prev) =>
            prev.map((enemy) => ({ ...enemy, isActive: false }))
          );
        }
      } else {
        setIsInputInvalid(false);
        updateEnemies((prev) =>
          prev.map((enemy) => ({ ...enemy, isActive: false }))
        );
      }
    },
    [
      enemies,
      gameRunning,
      gameOver,
      updateEnemies,
      removeEnemy,
      incrementScore,
      setCurrentInput,
    ]
  );

  return { handleInputChange, isInputInvalid };
};
