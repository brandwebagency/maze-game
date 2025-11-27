import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import { EnemyProps } from "./Enemy.types";

const Enemy: React.FC<EnemyProps> = ({
  word,
  typedChars,
  x,
  y,
  isActive,
  image,
}) => {
  return (
    <Box
      style={{
        position: "absolute",
        transform: "translateX(-50%)",
        transition: "all 100ms",
        scale: isActive ? "1.1" : "1",
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      <Flex direction="column" align="center" gap="0">
        <Box
          className={isActive ? "pulse-animation" : ""}
          style={{
            marginBottom: "8px",
          }}
        >
          <img
            src={image}
            alt="Enemy"
            style={{
              maxWidth: "320px",
              maxHeight: "90px",
              width: "auto",
              height: "auto",
            }}
          />
        </Box>

        <Box
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            padding: "4px 8px",
            borderRadius: "4px",
            textAlign: "center",
            minWidth: "max-content",
          }}
        >
          <Text
            size="6"
            style={{ color: "var(--red-9)", fontFamily: "monospace" }}
          >
            {word.substring(0, typedChars)}
          </Text>
          <Text size="6" style={{ color: "white", fontFamily: "monospace" }}>
            {word.substring(typedChars)}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Enemy;
