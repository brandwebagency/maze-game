import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";

const getRating = (ms: number) => {
  if (ms <= 200) return { label: "S+ (Insane)", color: "green" };
  if (ms <= 300) return { label: "S (Excellent)", color: "lime" };
  if (ms <= 400) return { label: "A (Great)", color: "cyan" };
  if (ms <= 550) return { label: "B (Good)", color: "yellow" };
  if (ms <= 800) return { label: "C (Slow)", color: "orange" };
  return { label: "F (Too Slow)", color: "red" };
};

const AimTrainerScoreBreakdown = ({
  scoreDetails,
  startGame,
  setGameState,
  targetsHit,
}) => {
  if (!scoreDetails.length) {
    return (
      <Flex
        direction="column"
        height="100vh"
        align="center"
        justify="center"
        width="100%"
      >
        <Heading as="h1" align={"center"} weight="bold">
          You didn't hit any targets!
        </Heading>
        <Button size="4" onClick={() => setGameState("start")}>
          Try again
        </Button>
      </Flex>
    );
  }

  return (
    <Flex
      p="9"
      minHeight="100vh"
      justify="center"
      align="center"
      width="100%"
      flexGrow="1"
    >
      <Flex direction="column" align="center" gap="8" justify="center">
        <img
          src="/static/images/tenants/inzone/inzone.webp"
          alt="Inzone Logo"
          width={250}
        />
        <Flex direction="column" align="center" gap="1">
          <Heading as="h1" m="0">
            The results are in!
          </Heading>
          <Text>You hit {targetsHit} targets!</Text>
        </Flex>
        <Flex direction="column" gap="3">
          <Text>Here's a breakdown of your reaction times:</Text>

          <Grid gap="3" columns="5">
            {scoreDetails
              .sort((a, b) => a.ms - b.ms)
              .map((entry, index) => {
                const rating = getRating(entry.ms);
                const percent = Math.min(1000 / Math.max(entry.ms, 1), 1) * 100; // bar visualization

                return (
                  <Card key={index}>
                    <Flex direction="column" gap="1">
                      {/* Reaction time + Rating */}
                      <Flex justify="between" gap="3">
                        <Text weight="bold">{entry.ms} ms</Text>
                        <Text color={rating.color as "cyan"}>
                          {rating.label}
                        </Text>
                      </Flex>

                      {/* Bar visualization */}
                      <Box
                        height="6px"
                        mt="2"
                        style={{
                          background: "#333",
                          borderRadius: "4px",
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          style={{
                            width: `${percent}%`,
                            height: "100%",
                            background: rating.color,
                          }}
                        />
                      </Box>

                      {/* Points awarded */}
                      <Text size="2" color="gray">
                        +{entry.points} points
                      </Text>
                    </Flex>
                  </Card>
                );
              })}
          </Grid>
        </Flex>
        <Button size="4" onClick={() => setGameState("start")}>
          Back to start
        </Button>
      </Flex>
    </Flex>
  );
};

export default AimTrainerScoreBreakdown;
