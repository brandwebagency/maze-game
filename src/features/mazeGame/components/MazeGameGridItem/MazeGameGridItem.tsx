import { ExitIcon, RocketIcon } from "@radix-ui/react-icons";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";

const MazeGameGridItem: React.FC<{ cell; state; x; y }> = ({
  cell,
  state,
  x,
  y,
}) => {
  const isPlayer = x === state.player.x && y === state.player.y;
  const isGoal = x === state.goal.x && y === state.goal.y;
  return (
    <Flex align={"center"} justify={"center"}
      key={`${x}-${y}`}
      className={`cell ${cell === 1 ? "wall" : "path"} ${
        isPlayer ? "player" : ""
      } ${isGoal ? "goal" : ""}`}
    >
      {isPlayer && <RocketIcon width={24} height={24} />}
      {isGoal && <ExitIcon width={24} height={24} />}
    </Flex>
  );
};

export default MazeGameGridItem;
