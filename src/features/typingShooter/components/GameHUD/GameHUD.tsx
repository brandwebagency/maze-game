import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import { GameHUDProps } from "./GameHUD.types";
import { brand } from "@/constants/brandVariables/brandVariables";

const GameHUD: React.FC<GameHUDProps> = ({
  score,
  lives,
  wave,
  enemiesSpawned,
  maxEnemies,
  enemiesKilled,
  speed,
  maxOnScreen,
  enemiesOnScreen,
  betweenWaves,
  gameRunning,
}) => {
  return (
    <>
      <Flex
        direction="column"
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          color: "white",
          zIndex: 10,
        }}
      >
        <Box mb="1">
          <img src={brand.logos.large} alt="Logo" width="120" height="26" />
        </Box>
        <Text size="6" weight="bold">
          Score: {score}
        </Text>
        <Text size="5">Lives: {"❤️".repeat(lives)}</Text>
        <Text size="5">Wave: {wave}</Text>
        <Text size="2" style={{ opacity: 0.75 }}>
          Spawned: {enemiesSpawned}/{maxEnemies} | Killed: {enemiesKilled}
        </Text>
        {wave > 1 && (
          <Text size="1" style={{ opacity: 0.6, marginTop: "4px" }}>
            Speed: {speed.toFixed(1)}x | Max: {maxOnScreen}
          </Text>
        )}
      </Flex>

      {gameRunning && (
        <Flex
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            color: "white",
            fontSize: "12px",
            opacity: 0.5,
            padding: "8px",
            borderRadius: "4px",
          }}
          gap="4"
        >
          <Text size="1">Enemies on screen: {enemiesOnScreen}</Text>
          <Text size="1">Between waves: {betweenWaves ? "Yes" : "No"}</Text>
          <Text size="1">Game running: {gameRunning ? "Yes" : "No"}</Text>
        </Flex>
      )}
    </>
  );
};

export default GameHUD;
