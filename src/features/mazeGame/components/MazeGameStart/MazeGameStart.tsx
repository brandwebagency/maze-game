import { RocketIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { iconSize } from "../../pages/MazeGamePage";

const MazeGameStart: React.FC<{ state; startGame }> = ({
  state,
  startGame,
}) => {
  return (
    <Flex
      gap={"4"}
      width={"100%"}
      height={"100%"}
      direction={"column"}
      align={"center"}
      justify={"center"}
    >
      <Heading as="h2" size={"9"}>
        Welcome to Maze Game!
      </Heading>
      <Box mb={"4"}>
        <Text as="p" size={"6"} align={"center"}>
          Navigate from the green start to the red goal.
        </Text>
        <Text as="p" size={"6"} align={"center"}>
          Use arrow keys or WASD to move.
        </Text>
      </Box>

      {state.status === "idle" && (
        <Button
          size={"4"}
          color="orange"
          onClick={startGame}
          className="btn btn-primary"
        >
          <RocketIcon width={iconSize} height={iconSize} /> START GAME
        </Button>
      )}
    </Flex>
  );
};

export default MazeGameStart;
