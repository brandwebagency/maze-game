import React, { useRef } from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import { useGameState } from "../../hooks/useGameState";
import { useEnemySpawner } from "../../hooks/useEnemySpawner";
import { useEnemyMovement } from "../../hooks/useEnemyMovement";
import { useWaveManager } from "../../hooks/useWaveManager";
import { useTypingInput } from "../../hooks/useTypingInput";
import { useWordPool } from "../../hooks/useWordPool";
import GameHUD from "../../components/GameHUD/GameHUD";
import GameArea from "../../components/GameArea/GameArea";
import PlayerInput from "../../components/PlayerInput/PlayerInput";
import StartScreen from "../../components/StartScreen/StartScreen";
import GameOver from "../../components/GameOver/GameOver";
import WaveTransition from "../../components/WaveTransition/WaveTransition";
import {
  calculateEnemiesPerWave,
  calculateMaxOnScreen,
} from "../../utils/gameHelpers";
import { GAME_CONFIG } from "../../constants/gameConfig";

const TypingShooterPage: React.FC = () => {
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { getRandomWord, reset: resetWordPool } = useWordPool();

  const {
    gameState,
    resetGame,
    loseLife,
    incrementScore,
    addEnemy,
    removeEnemy,
    updateEnemies,
    nextWave,
    startWaveTransition,
    setCurrentInput,
  } = useGameState();

  useEnemySpawner(
    gameState.gameRunning,
    gameState.gameOver,
    gameState.betweenWaves,
    gameState.wave,
    gameState.enemiesSpawned,
    gameState.enemies.length,
    addEnemy,
    getRandomWord
  );

  useEnemyMovement(
    gameState.gameRunning,
    gameState.gameOver,
    updateEnemies,
    loseLife,
    setCurrentInput
  );

  useWaveManager(
    gameState.gameRunning,
    gameState.gameOver,
    gameState.betweenWaves,
    gameState.wave,
    gameState.enemiesSpawned,
    gameState.enemiesKilled,
    gameState.enemies.length,
    startWaveTransition,
    nextWave
  );

  const { handleInputChange, isInputInvalid } = useTypingInput(
    gameState.enemies,
    gameState.gameRunning,
    gameState.gameOver,
    updateEnemies,
    removeEnemy,
    incrementScore,
    setCurrentInput
  );

  const startGame = () => {
    resetGame();
    resetWordPool();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Box
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <GameHUD
        score={gameState.score}
        lives={gameState.lives}
        wave={gameState.wave}
        enemiesSpawned={gameState.enemiesSpawned}
        maxEnemies={calculateEnemiesPerWave(gameState.wave)}
        enemiesKilled={gameState.enemiesKilled}
        speed={
          GAME_CONFIG.baseSpeed +
          gameState.wave * GAME_CONFIG.speedIncrement +
          (gameState.wave > GAME_CONFIG.highWaveThreshold
            ? (gameState.wave - GAME_CONFIG.highWaveThreshold) *
              GAME_CONFIG.highWaveSpeedBonus
            : 0)
        }
        maxOnScreen={calculateMaxOnScreen(gameState.wave)}
        enemiesOnScreen={gameState.enemies.length}
        betweenWaves={gameState.betweenWaves}
        gameRunning={gameState.gameRunning}
      />

      <GameArea enemies={gameState.enemies} gameAreaRef={gameAreaRef} />

      {gameState.betweenWaves && <WaveTransition wave={gameState.wave} />}

      {gameState.gameRunning && !gameState.gameOver && (
        <PlayerInput
          value={gameState.currentInput}
          onChange={handleInputChange}
          inputRef={inputRef}
          isInvalid={isInputInvalid}
          enemies={gameState.enemies}
          gameRunning={gameState.gameRunning}
        />
      )}

      {!gameState.gameRunning && !gameState.gameOver && (
        <StartScreen onStart={startGame} />
      )}

      {gameState.gameOver && (
        <GameOver
          score={gameState.score}
          wave={gameState.wave}
          onRestart={startGame}
        />
      )}

      <Flex
        direction="column"
        align="end"
        style={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          color: "white",
          fontSize: "14px",
          opacity: 0.75,
        }}
      >
        <Text size="2">Start typing any word to target an enemy</Text>
        <Text size="2">Complete the word to destroy it!</Text>
        <Text size="1" style={{ marginTop: "8px", color: "var(--yellow-9)" }}>
          ⚠️ Waves get exponentially harder!
        </Text>
      </Flex>
    </Box>
  );
};

export default TypingShooterPage;
