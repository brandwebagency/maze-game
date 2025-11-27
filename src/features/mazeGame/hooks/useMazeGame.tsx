import { useCallback, useEffect, useReducer, useState } from "react";
import { generateMaze } from "../helperFunctions/generateMazeLayout";
import { gameReducer } from "../helperFunctions/gameReducer";

const DIFFICULTIES = {
  easy: { width: 32, height: 19, label: 'Easy' },  // Horizontal maze
};

export const useMazeGame = () => {
  const [difficulty, setDifficulty] = useState('easy');
  const [state, dispatch] = useReducer(gameReducer, {
    maze: [],
    player: { x: 0, y: 0 },
    goal: { x: 0, y: 0 },
    moves: 0,
    status: 'idle',
    startTime: null,
    endTime: null
  });
  const [timer, setTimer] = useState(0);

  const startGame = useCallback(() => {
    const { width, height } = DIFFICULTIES[difficulty];
    const maze = generateMaze(width, height);
    
    // Find a valid goal position (farthest reachable path from start)
    let goal = { x: width - 1, y: height - 1 };
    
    // Search from bottom-right corner outward in a spiral
    if (maze[goal.y]?.[goal.x] === 1) {
      let found = false;
      const maxSearch = Math.max(width, height);
      
      // Try bottom-right area first, then expand search
      for (let radius = 1; radius < maxSearch && !found; radius++) {
        for (let dy = -radius; dy <= radius && !found; dy++) {
          for (let dx = -radius; dx <= radius && !found; dx++) {
            // Only check cells on the perimeter of current radius
            if (Math.abs(dx) !== radius && Math.abs(dy) !== radius) continue;
            
            const y = goal.y + dy;
            const x = goal.x + dx;
            
            if (y >= 0 && y < height && x >= 0 && x < width && maze[y][x] === 0) {
              goal = { x, y };
              found = true;
            }
          }
        }
      }
    }
    
    console.log('Goal position:', goal, 'Maze dimensions:', width, 'x', height);
    dispatch({ type: 'INIT_GAME', maze, goal });
  }, [difficulty]);

  useEffect(() => {
    if (state.status === 'playing' && state.startTime) {
      const interval = setInterval(() => {
        setTimer(Math.floor((Date.now() - state.startTime) / 1000));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [state.status, state.startTime]);

  useEffect(() => {
    // Victory detection or other status-based effects can go here
  }, [state.status]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (state.status !== 'playing') return;
      
      const moves = {
        'arrowup': { dx: 0, dy: -1 },
        'arrowdown': { dx: 0, dy: 1 },
        'arrowleft': { dx: -1, dy: 0 },
        'arrowright': { dx: 1, dy: 0 },
        'w': { dx: 0, dy: -1 },
        's': { dx: 0, dy: 1 },
        'a': { dx: -1, dy: 0 },
        'd': { dx: 1, dy: 0 }
      };
      
      const move = moves[e.key.toLowerCase()];
      if (move) {
        e.preventDefault();
        dispatch({ type: 'MOVE_PLAYER', ...move });
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.status]);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  return { difficulty, timer, state, dispatch, startGame, setDifficulty, reset } as const;
}