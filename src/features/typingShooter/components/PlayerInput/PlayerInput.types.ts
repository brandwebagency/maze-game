import { Enemy } from "../../types/game.types";

export interface PlayerInputProps {
  value: string;
  onChange: (value: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  isInvalid?: boolean;
  enemies: Enemy[];
  gameRunning: boolean;
}
