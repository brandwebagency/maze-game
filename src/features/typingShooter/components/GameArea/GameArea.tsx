import React from "react";
import { Box } from "@radix-ui/themes";
import { GameAreaProps } from "./GameArea.types";
import Enemy from "../Enemy/Enemy";

const GameArea: React.FC<GameAreaProps> = ({
  enemies,
  children,
  gameAreaRef,
}) => {
  return (
    <Box
      ref={gameAreaRef}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {enemies.map((enemy) => (
        <Enemy
          key={enemy.id}
          id={enemy.id}
          word={enemy.word}
          typedChars={enemy.typedChars}
          x={enemy.x}
          y={enemy.y}
          isActive={enemy.isActive}
          image={enemy.image}
        />
      ))}
      {children}
    </Box>
  );
};

export default GameArea;
