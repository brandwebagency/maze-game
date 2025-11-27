import { FC } from "react";
import { useMazeGame } from "../hooks/useMazeGame";
import {  Box, Container, Flex } from "@radix-ui/themes";
import MazeGameStart from "../components/MazeGameStart/MazeGameStart";
import MazeGameEnd from "../components/MazeGameEnd/MazeGameEnd";
import "../styles/_mazegame.scss";
import MazeGame from "../components/MazeGame/MazeGame";
import MazeGameHud from "../components/MazeGameHud/MazeGameHud";
import MazeGameHeader from "../components/MazeGameHeader/MazeGameHeader";


export const iconSize = 46;

const MazeGamePage: FC = () => {
  const { timer, state, dispatch, startGame } =
    useMazeGame();

  const finalTime =
    state.endTime && state.startTime
      ? Math.floor((state.endTime - state.startTime) / 1000)
      : 0;

  return (
    <Box style={{ height: '100vh' }}>
      <Flex direction={"column"} height={"100%"} className="maze-game">
         <Container height={"100%"}>
        <MazeGameHeader/>

        {state.status === "idle" && state.maze.length === 0 && (
          <MazeGameStart startGame={startGame} state={state} />
        )}
        </Container>


        {state.status === "playing" && state.maze.length > 0 && (
          <Flex direction={"column"} gap={"6"} height={"100%"}>
            <Container>
              <MazeGameHud state={state} timer={timer} />
            </Container>
            <MazeGame state={state} />
          </Flex>
        )}

        {state.status === "won" && (
           <Container height={"100%"}>

             <MazeGameEnd
               state={state}
               dispatch={dispatch}
               startGame={startGame}
               finalTime={finalTime}
             />
           </Container>
        )}
      </Flex>
    </Box>
  );
};

export default MazeGamePage;
