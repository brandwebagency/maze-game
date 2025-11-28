import { Box, Card, Flex, Grid, Text } from "@radix-ui/themes";
import Target from "../Target";
import { AimTrainerGameProps } from "./AimTrainerGame.types";

const AimTrainerGame: React.FC<AimTrainerGameProps> = ({
  timeLeft,
  targetsHit,
  score,
  gameAreaRef,
  targetPosition,
  handleTargetClick,
}) => {
  return (
    <Flex
      direction="column"
      height="100vh"
      align="center"
      justify="center"
      width="100%"
    >
      <Flex height="5vh" py="4" px="4" gap="5" width="100%">
        <Grid columns="3" gap="3" width="100%">
          <Box gridColumn="1 / 2">
            <Card size="4">
              <Flex direction="column" gap="0">
                <Text size="2" color="gray">
                  Time
                </Text>
                <Text size="4" weight="bold">
                  {(timeLeft / 1000).toFixed(2)}s
                </Text>
              </Flex>
            </Card>
          </Box>
          <Box gridColumn="2 / 3">
            <Card size="4">
              <Flex direction="column" gap="0">
                <Text size="2" color="gray">
                  Score
                </Text>
                <Text size="4" weight="bold">
                  {Math.round(score)}
                </Text>
              </Flex>
            </Card>
          </Box>
          <Box gridColumn="3 / -1">
            <Card size="4">
              <Flex direction="column" gap="0">
                <Text size="2" color="gray">
                  Hits
                </Text>
                <Text size="4" weight="bold">
                  {targetsHit}
                </Text>
              </Flex>
            </Card>
          </Box>
        </Grid>
      </Flex>
      <Box height="95vh" width="100%">
        <div
          ref={gameAreaRef as any}
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
          onClick={() => {
            // clicking empty space should not spawn new target
          }}
        >
          <Target
            x={targetPosition.x}
            y={targetPosition.y}
            onClick={(e) => {
              e.stopPropagation();
              handleTargetClick(e);
            }}
          />
        </div>
      </Box>
    </Flex>
  );
};

export default AimTrainerGame;
