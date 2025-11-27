import { Enemy } from "../../types/game.types";

export interface GameAreaProps {
  enemies: Enemy[];
  children?: React.ReactNode;
  gameAreaRef: React.RefObject<HTMLDivElement>;
}
