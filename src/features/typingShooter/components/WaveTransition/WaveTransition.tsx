import React from "react";
import { Flex, Box, Text } from "@radix-ui/themes";
import { WaveTransitionProps } from "./WaveTransition.types";

const WaveTransition: React.FC<WaveTransitionProps> = ({ wave }) => {
  return (
    <Flex
      style={{
        position: "absolute",
        inset: 0,
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <Flex
        justify="center"
        direction="column"
        align="center"
        gap="1"
        style={{
          textAlign: "center",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          padding: "32px",
          borderRadius: "8px",
        }}
      >
        <Text
          size="8"
          weight="bold"
          style={{ color: "var(--red-9)", marginBottom: "8px" }}
        >
          WAVE {wave} COMPLETE!
        </Text>
        <Text size="5">Preparing Wave {wave + 1}...</Text>
      </Flex>
    </Flex>
  );
};

export default WaveTransition;
