import { brand } from "@/constants/brandVariables/brandVariables";
import {  Flex, Heading } from "@radix-ui/themes";

const MazeGameHeader: React.FC = () => {
  return (
    <Flex width={"100%"} justify={"center"} align={"center"} mb={"4"}>
        <Heading align={"center"} as="h2" size={"8"}>Maze game</Heading>
    </Flex>
  );
};

export default MazeGameHeader;
