// Board configuration
export const BOARD_SIZE = 9;
export const GRID_SIZE = 3;
export const WINNING_COMBINATIONS = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonals
  [0, 4, 8],
  [2, 4, 6],
];

// Game modes
export const GAME_MODES = {
  HUMAN_VS_HUMAN: 'human-vs-human',
  HUMAN_VS_AI: 'human-vs-ai',
  AI_VS_AI: 'ai-vs-ai',
} as const;

// AI difficulty levels
export const AI_DIFFICULTY = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
  EXPERT: 'expert',
} as const;

// AI difficulty configurations
export const AI_DIFFICULTY_CONFIG = {
  [AI_DIFFICULTY.EASY]: {
    name: 'Easy',
    description: 'Makes random moves most of the time',
    randomMoveChance: 0.7,
    maxDepth: 2,
  },
  [AI_DIFFICULTY.MEDIUM]: {
    name: 'Medium',
    description: 'Balanced between random and strategic moves',
    randomMoveChance: 0.3,
    maxDepth: 4,
  },
  [AI_DIFFICULTY.HARD]: {
    name: 'Hard',
    description: 'Mostly strategic with occasional random moves',
    randomMoveChance: 0.1,
    maxDepth: 6,
  },
  [AI_DIFFICULTY.EXPERT]: {
    name: 'Expert',
    description: 'Always plays optimally',
    randomMoveChance: 0,
    maxDepth: 9,
  },
} as const;

// Minimax scoring constants
export const MINIMAX_SCORES = {
  WIN: 10,
  LOSE: -10,
  DRAW: 0,
  INVALID_MOVE: -100,
} as const;

// Minimax configuration
export const MINIMAX_CONFIG = {
  MAX_DEPTH: 9,
  ALPHA_BETA_PRUNING: true,
  DEPTH_PENALTY: 1, // Subtract from score based on depth to prefer quicker wins
  POSITION_WEIGHTS: [
    3, 2, 3,
    2, 4, 2,
    3, 2, 3,
  ], // Center is most valuable, corners second, edges least
} as const;

// AI timing constants
export const AI_TIMING = {
  MIN_THINKING_TIME: 500, // Minimum time AI appears to "think"
  MAX_THINKING_TIME: 2000, // Maximum thinking time for realism
  MOVE_ANIMATION_DELAY: 300,
} as const;

// Player symbols
export const PLAYERS = {
  X: 'X',
  O: 'O',
} as const;

// Game status constants
export const GAME_STATUS = {
  PLAYING: 'playing',
  WON: 'won',
  DRAW: 'draw',
} as const;

// Default game configuration
export const DEFAULT_GAME_CONFIG = {
  boardSize: BOARD_SIZE,
  mode: GAME_MODES.HUMAN_VS_HUMAN,
  aiDifficulty: AI_DIFFICULTY.MEDIUM,
  enableSounds: true,
  enableAnimations: true,
  aiThinkingDelay: AI_TIMING.MIN_THINKING_TIME,
} as const;

// Error messages
export const ERROR_MESSAGES = {
  INVALID_MOVE: 'Invalid move',
  CELL_OCCUPIED: 'Cell is already occupied',
  GAME_OVER: 'Game is already over',
  INVALID_POSITION: 'Invalid board position',
  AI_ERROR: 'AI move calculation failed',
} as const;