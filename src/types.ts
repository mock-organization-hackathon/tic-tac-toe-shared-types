// Core game types
export type Player = 'X' | 'O';
export type Cell = Player | null;
export type Board = Cell[];

// Game state types
export type GameStatus = 'playing' | 'won' | 'draw';
export type GameMode = 'human-vs-human' | 'human-vs-ai' | 'ai-vs-ai';

// AI player types
export type AIPlayer = {
  symbol: Player;
  difficulty: AIDifficulty;
  isThinking: boolean;
};

export type AIDifficulty = 'easy' | 'medium' | 'hard' | 'expert';

// Minimax algorithm types
export type MinimaxResult = {
  score: number;
  move: number;
  depth: number;
  nodesEvaluated: number;
};

export type MinimaxNode = {
  board: Board;
  depth: number;
  isMaximizing: boolean;
  alpha?: number;
  beta?: number;
};

export type GameTreeNode = {
  board: Board;
  score: number;
  move: number;
  children: GameTreeNode[];
  isMaximizing: boolean;
  depth: number;
};

// Game state
export type GameState = {
  board: Board;
  currentPlayer: Player;
  status: GameStatus;
  winner: Player | null;
  mode: GameMode;
  aiPlayer?: AIPlayer;
  moveHistory: number[];
  lastMove?: number;
};

// Move validation
export type MoveValidation = {
  isValid: boolean;
  error?: string;
};

// Game statistics
export type GameStats = {
  totalGames: number;
  wins: { X: number; O: number };
  draws: number;
  aiWins?: number;
  humanWins?: number;
};

// Configuration types
export type GameConfig = {
  boardSize: number;
  mode: GameMode;
  aiDifficulty?: AIDifficulty;
  enableSounds?: boolean;
  enableAnimations?: boolean;
  aiThinkingDelay?: number;
};

// Event types
export type GameEvent = 
  | { type: 'MOVE'; payload: { position: number; player: Player } }
  | { type: 'RESET' }
  | { type: 'CHANGE_MODE'; payload: { mode: GameMode } }
  | { type: 'SET_AI_DIFFICULTY'; payload: { difficulty: AIDifficulty } }
  | { type: 'AI_THINKING'; payload: { isThinking: boolean } };

// Utility types
export type Position = {
  row: number;
  col: number;
};

export type WinningLine = {
  positions: number[];
  player: Player;
};