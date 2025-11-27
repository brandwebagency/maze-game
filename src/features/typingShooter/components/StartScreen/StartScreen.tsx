import React from "react";
import { Flex, Heading, Text, Button } from "@radix-ui/themes";
import { StartScreenProps } from "./StartScreen.types";
import { brand } from "@/constants/brandVariables/brandVariables";

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <Flex
      style={{
        position: "absolute",
        inset: 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Flex
        direction="column"
        align="center"
        style={{ textAlign: "center", color: "white" }}
        gap="5"
      >
        <img src={brand.logos.large} alt="Logo" width="240" height="52" />
        <Flex direction="column" align="center" gap="2">
          <Heading size="9" m="0" weight="regular">
            TYPING SHOOTER
          </Heading>
          <Text size="5" weight="light">
            Type words to destroy the enemies!
          </Text>
        </Flex>
        <Button
          onClick={onStart}
          size="4"
          style={{
            backgroundColor: "var(--red-9)",
            cursor: "pointer",
          }}
        >
          START GAME
        </Button>
      </Flex>
    </Flex>
  );
};

export default StartScreen;
