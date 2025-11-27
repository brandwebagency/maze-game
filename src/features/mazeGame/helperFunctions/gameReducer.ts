export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'INIT_GAME':
      return {
        ...state,
        maze: action.maze,
        player: { x: 0, y: 0 },
        goal: action.goal,
        moves: 0,
        status: 'playing',
        startTime: Date.now()
      };
    case 'MOVE_PLAYER':
      const newX = state.player.x + action.dx;
      const newY = state.player.y + action.dy;
      
      if (newX < 0 || newX >= state.maze[0].length || 
          newY < 0 || newY >= state.maze.length || 
          state.maze[newY][newX] === 1) {
        return state;
      }
      
      const won = newX === state.goal.x && newY === state.goal.y;
      
      return {
        ...state,
        player: { x: newX, y: newY },
        moves: state.moves + 1,
        status: won ? 'won' : 'playing',
        endTime: won ? Date.now() : state.endTime
      };
    case 'RESET':
      return {
        maze: [],
        player: { x: 0, y: 0 },
        goal: { x: 0, y: 0 },
        moves: 0,
        status: 'idle',
        startTime: null,
        endTime: null
      };
    default:
      return state;
  }
};