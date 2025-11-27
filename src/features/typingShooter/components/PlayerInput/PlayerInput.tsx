import React from "react";
import { TextField } from "@radix-ui/themes";
import { PlayerInputProps } from "./PlayerInput.types";

const PlayerInput: React.FC<PlayerInputProps> = ({
  value,
  onChange,
  inputRef,
  isInvalid = false,
  enemies,
  gameRunning,
}) => {
  const handleChange = (newValue: string) => {
    // If game is not running, allow any input
    if (!gameRunning) {
      onChange(newValue);
      return;
    }

    // If user is deleting characters, allow it
    if (newValue.length < value.length) {
      onChange(newValue);
      return;
    }

    // Get the new character that was typed
    const newChar = newValue[newValue.length - 1]?.toLowerCase();
    if (!newChar) {
      onChange(newValue);
      return;
    }

    const lowerNewValue = newValue.toLowerCase();

    // Check if the new input matches any enemy word
    const activeEnemy = enemies.find((enemy) => enemy.isActive);

    // If there's an active enemy, only allow characters that match
    if (activeEnemy) {
      if (activeEnemy.word.toLowerCase().startsWith(lowerNewValue)) {
        onChange(newValue);
      }
      // Otherwise, ignore the input (don't update)
      return;
    }

    // If no active enemy, check if input could start any inactive enemy word
    const matchingEnemy = enemies.find(
      (enemy) =>
        !enemy.isActive && enemy.word.toLowerCase().startsWith(lowerNewValue)
    );

    if (matchingEnemy) {
      onChange(newValue);
    }
    // Otherwise, ignore the input (don't update)
  };

  return (
    <TextField.Root
      ref={inputRef}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      placeholder="Type to shoot..."
      autoFocus
      style={
        {
          position: "absolute",
          bottom: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "20px",
          fontFamily: "monospace",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          color: isInvalid ? "var(--red-9)" : "var(--green-9)",
          border: `2px solid ${isInvalid ? "var(--red-9)" : "var(--green-9)"}`,
          borderRadius: "4px",
        } as React.CSSProperties
      }
    />
  );
};

export default PlayerInput;
