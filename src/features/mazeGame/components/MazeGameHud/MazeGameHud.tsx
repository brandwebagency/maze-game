import { ClockIcon, MoveIcon } from "@radix-ui/react-icons";
import { Box, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { formatTime } from "../../helperFunctions/formatTime";
import { iconSize } from "../../pages/MazeGamePage";

const MazeGameHud: React.FC<{ timer; state }> = ({ timer, state }) => {
  return (
    <Grid gap={"4"} columns={"2"} >
      <Card style={{width: "100%"}}>
        <Flex gap={"3"} direction={"row"} align={"center"} justify={"center"}>
          <ClockIcon width={iconSize} height={iconSize} />
          <Text as="p" size={"6"}>{formatTime(timer)}</Text>
        </Flex>
      </Card>
      <Card style={{width: "100%"}}>
        <Flex gap={"3"} direction={"row"} align={"center"} justify={"center"}>
        <MoveIcon width={iconSize} height={iconSize} />
        <Text as="p" size={"6"}>{state.moves} moves</Text>
        </Flex>
      </Card>
    </Grid>
  );
};

export default MazeGameHud;
