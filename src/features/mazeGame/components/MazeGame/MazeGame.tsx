import { Box, Grid } from "@radix-ui/themes";
import MazeGameGridItem from "../MazeGameGridItem/MazeGameGridItem";


const MazeGame: React.FC<{state: any}> = ({state}) => {
  return (
          <Box className="maze-container" height={"100%"}>
            <Grid
            m={"auto"}
              className="maze-grid"
              height={"100%"}
              columns={`repeat(${state.maze[0].length}, 1fr)`}
              rows={`repeat(${state.maze.length}, 1fr)`}
            >
              {state.maze.map((row, y) =>
                row.map((cell, x) => (
                  <MazeGameGridItem  cell={cell} state={state} x={x} y={y}/>
                ))
              )}
            </Grid>
          </Box>
  );
};

export default MazeGame;
