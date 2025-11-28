import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import React, { useEffect } from "react";

const AimTrainerStart: React.FC<{ gameState: any; startGame: any }> = ({
  gameState,
  startGame,
}) => {
  if (gameState === "start") {
    return (
      <Flex minHeight="100vh" justify="center" align="center" flexGrow="1">
        <Flex direction="column" align="center" gap="8" justify="center">
          <img
            src="/static/images/tenants/inzone/inzone.webp"
            alt="Inzone Logo"
            width={250}
          />
          <Flex direction="column" align="center" gap="1">
            <Heading as="h1" m="0">
              Aim Trainer
            </Heading>
            <Text>Shoot as many targets as you can in 15 seconds</Text>
          </Flex>
          <Button size="4" onClick={startGame}>
            Press to Start
          </Button>
        </Flex>
      </Flex>
    );
  }

  return null;
};

export default AimTrainerStart;
