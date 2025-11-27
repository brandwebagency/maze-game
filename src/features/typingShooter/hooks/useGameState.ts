import { useState } from "react";
import { GameState, Enemy } from "../types/game.types";
import { GAME_CONFIG } from "../constants/gameConfig";

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>({
    enemies: [],
    score: 0,
    lives: GAME_CONFIG.initialLives,
    wave: GAME_CONFIG.initialWave,
    gameRunning: false,
    gameOver: false,
    enemiesSpawned: 0,
    enemiesKilled: 0,
    betweenWaves: false,
    currentInput: "",
  });

  const updateGameState = (updates: Partial<GameState>) => {
    setGameState((prev) => ({ ...prev, ...updates }));
  };

  const resetGame = () => {
    setGameState({
      enemies: [],
      score: 0,
      lives: GAME_CONFIG.initialLives,
      wave: GAME_CONFIG.initialWave,
      gameRunning: true,
      gameOver: false,
      enemiesSpawned: 0,
      enemiesKilled: 0,
      betweenWaves: false,
      currentInput: "",
    });
  };

  const loseLife = () => {
    setGameState((prev) => {
      const newLives = prev.lives - 1;
      if (newLives <= 0) {
        return {
          ...prev,
          lives: 0,
          gameOver: true,
          gameRunning: false,
        };
      }
      return { ...prev, lives: newLives };
    });
  };

  const incrementScore = (points: number) => {
    setGameState((prev) => ({ ...prev, score: prev.score + points }));
  };

  const addEnemy = (enemy: Enemy) => {
    setGameState((prev) => ({
      ...prev,
      enemies: [...prev.enemies, enemy],
      enemiesSpawned: prev.enemiesSpawned + 1,
    }));
  };

  const removeEnemy = (enemyId: number) => {
    setGameState((prev) => ({
      ...prev,
      enemies: prev.enemies.filter((e) => e.id !== enemyId),
      enemiesKilled: prev.enemiesKilled + 1,
    }));
  };

  const updateEnemies = (updater: (enemies: Enemy[]) => Enemy[]) => {
    setGameState((prev) => ({
      ...prev,
      enemies: updater(prev.enemies),
    }));
  };

  const nextWave = () => {
    setGameState((prev) => ({
      ...prev,
      wave: prev.wave + 1,
      enemiesSpawned: 0,
      enemiesKilled: 0,
      betweenWaves: false,
    }));
  };

  const startWaveTransition = () => {
    setGameState((prev) => ({ ...prev, betweenWaves: true }));
  };

  const setCurrentInput = (input: string) => {
    setGameState((prev) => ({ ...prev, currentInput: input }));
  };

  return {
    gameState,
    updateGameState,
    resetGame,
    loseLife,
    incrementScore,
    addEnemy,
    removeEnemy,
    updateEnemies,
    nextWave,
    startWaveTransition,
    setCurrentInput,
  };
};
