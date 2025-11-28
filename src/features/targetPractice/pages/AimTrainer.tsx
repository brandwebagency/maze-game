import React, { useEffect } from "react";
import { Box, Container } from "@radix-ui/themes";
import { useAimTrainerTimeBased } from "../hooks/useAimTrainerTimeBased";
import AimTrainerResults from "../components/AimTrainerResults/AimTrainerResults";
import AimTrainerStart from "../components/AimTrainerStart/AimTrainerStart";
import AimTrainerGame from "../components/AimTrainerGame/AimTrainerGame";
import { useTheme } from "@/hooks/useTheme";
import { inzoneTheme } from "@/constants/theme/inzoneTheme";

const AimTrainer: React.FC = () => {
  const { update } = useTheme();

  useEffect(() => {
    update({
      ...inzoneTheme,
    });
  }, []);

  const {
    handleTargetClick,
    startGame,
    setGameState,
    score,
    gameState,
    targetPosition,
    targetsHit,
    gameAreaRef,
    timeLeft,
    scoreDetails,
  } = useAimTrainerTimeBased(15000); // 15 seconds time limit

  return (
    <Box style={{ minHeight: "100vh" }}>
      <AimTrainerStart gameState={gameState} startGame={startGame} />

      {gameState === "playing" && (
        <AimTrainerGame
          timeLeft={timeLeft}
          targetsHit={targetsHit}
          score={score}
          gameAreaRef={gameAreaRef}
          targetPosition={targetPosition}
          handleTargetClick={handleTargetClick}
        />
      )}

      {gameState === "results" && (
        <AimTrainerResults
          startGame={startGame}
          setGameState={setGameState}
          scoreDetails={scoreDetails}
          targetsHit={targetsHit}
        />
      )}
    </Box>
  );
};

export default AimTrainer;
