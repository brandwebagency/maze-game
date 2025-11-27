import { useEffect, useCallback, useRef } from "react";
import { ENEMY_IMAGES } from "../constants/images";
import {
  calculateEnemySpeed,
  calculateEnemiesPerWave,
  calculateMaxOnScreen,
  calculateSpawnInterval,
  calculateSafeSpawnPosition,
} from "../utils/gameHelpers";
import { Enemy } from "../types/game.types";

export const useEnemySpawner = (
  gameRunning: boolean,
  gameOver: boolean,
  betweenWaves: boolean,
  wave: number,
  enemiesSpawned: number,
  enemiesLength: number,
  addEnemy: (enemy: Enemy) => void,
  getRandomWord: () => string
) => {
  const enemiesSpawnedRef = useRef(enemiesSpawned);
  const enemiesLengthRef = useRef(enemiesLength);
  const currentMaxOnScreenRef = useRef(1); // Always start with 1
  const addEnemyRef = useRef(addEnemy);
  const getRandomWordRef = useRef(getRandomWord);

  // Keep refs in sync with props
  useEffect(() => {
    enemiesSpawnedRef.current = enemiesSpawned;
    enemiesLengthRef.current = enemiesLength;
    addEnemyRef.current = addEnemy;
    getRandomWordRef.current = getRandomWord;
  }, [enemiesSpawned, enemiesLength, addEnemy, getRandomWord]);

  // Reset currentMaxOnScreen when wave changes
  useEffect(() => {
    currentMaxOnScreenRef.current = 1;
  }, [wave]);

  const createEnemyFromRefs = useCallback((): Enemy => {
    const word = getRandomWordRef.current();
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
  }, [wave]);

  useEffect(() => {
    if (!gameRunning || gameOver || betweenWaves) return;

    const maxEnemiesThisWave = calculateEnemiesPerWave(wave);
    const finalMaxOnScreen = calculateMaxOnScreen(wave);
    const spawnInterval = calculateSpawnInterval(wave);

    // Spawn first enemy immediately if we can
    if (
      enemiesSpawnedRef.current < maxEnemiesThisWave &&
      enemiesLengthRef.current < currentMaxOnScreenRef.current
    ) {
      addEnemyRef.current(createEnemyFromRefs());
    }

    const interval = setInterval(() => {
      // Use finalMaxOnScreen directly - the spawn interval and game difficulty
      // already control the pacing, no need for artificial ramping
      currentMaxOnScreenRef.current = finalMaxOnScreen;

      if (
        enemiesSpawnedRef.current < maxEnemiesThisWave &&
        enemiesLengthRef.current < finalMaxOnScreen
      ) {
        addEnemyRef.current(createEnemyFromRefs());
      }
    }, spawnInterval);

    return () => clearInterval(interval);
  }, [gameRunning, wave, gameOver, betweenWaves, createEnemyFromRefs]);

  return { createEnemy: createEnemyFromRefs };
};
