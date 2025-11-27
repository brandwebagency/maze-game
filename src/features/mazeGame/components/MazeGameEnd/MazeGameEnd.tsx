import { formatTime } from "@/features/mazeGame/helperFunctions/formatTime";
import { iconSize } from "@/features/mazeGame/pages/MazeGamePage";
import { ClockIcon, MoveIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";

const MazeGameEnd: React.FC<{
  state: any;
  dispatch: any;
  startGame: () => void;
  finalTime: number;
}> = ({ finalTime, state, dispatch, startGame }) => {
  return (
    <Card style={{ height: "100%" }}>
    <Box p={"5"}>
      <Flex
        height={"100%"}
        direction="column"
        align={"center"}
        justify={"center"}
        gap="4"
      >

        <Flex align="center" direction={"column"} gap="2">
          <Flex align={"baseline"} justify={"end"}>
            <StarFilledIcon width={iconSize+20 } height={iconSize+20 } />
            <StarFilledIcon
              color="gold"
              width={iconSize + 20 + 6}
              height={iconSize + 20 + 6}
            />
            <StarFilledIcon width={iconSize+20 } height={iconSize+20 } />
          </Flex>

          <Heading size="8">Congratulations!</Heading>
        </Flex>

        <Text size={"6"} color="gray">
          You completed the maze!
        </Text>

        <Grid columns={"2"} gap="4" width={"100%"} mb={"4"}>
          <Card style={{width: "100%"}}>
            <Flex direction={"column"} align={"center"} justify={"center"} gap="2">
              <ClockIcon width={iconSize} height={iconSize} />
              <Flex direction="row" align={"center"} justify={"center"} gap="3">
                <Text size="6" color="gray">
                  Time
                </Text>
                <Text size="6" weight="bold">
                  {formatTime(finalTime)}
                </Text>
              </Flex>
            </Flex>
          </Card>

          <Card style={{width: "100%"}}>
            <Flex direction={"column"} align={"center"} justify={"center"} gap="2">
              <MoveIcon width={iconSize} height={iconSize} />
              <Flex direction="row" align={"center"} justify={"center"} gap="3">
                <Text size="6" color="gray">
                  Moves
                </Text>
                <Text size="6" weight="bold">
                  {state.moves}
                </Text>
              </Flex>
            </Flex>
          </Card>
        </Grid>

        <Flex gap="2">
          <Button color="orange" size={"4"} onClick={() => dispatch({ type: "RESET" })}>
           PLAY AGAIN
          </Button>
        </Flex>
      </Flex>
    </Box>
    </Card>
  );
};

export default MazeGameEnd;
