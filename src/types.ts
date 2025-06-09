// Player and Game State Types
import { PLAYER_COLORS } from './constants';

export type Player = 'X' | 'O';
export type Cell = Player | null;
export type Board = Cell[];

export type PlayerColor = typeof PLAYER_COLORS[keyof typeof PLAYER_COLORS];

export interface PlayerColorSelection {
  playerId: string;
  color: PlayerColor;
}

export interface ExtendedPlayer {
  id: string;
  name: string;
  symbol: Player;
  color: PlayerColor;
  isReady: boolean;
  score: number;
}

export interface GameState {
  id: string;
  board: Board;
  currentPlayer: Player;
  status: GameStatus;
  winner: Player | null;
  winningLine: readonly number[] | null;
  players: GamePlayer[];
  createdAt: Date;
  updatedAt: Date;
  moveHistory: GameMove[];
}

export interface GamePlayer {
  id: string;
  name: string;
  symbol: Player;
  isReady: boolean;
  score: number;
  color?: PlayerColor;
}

export interface ColorSelectionValidation {
  isValid: boolean;
  conflictingPlayerId?: string;
  availableColors: PlayerColor[];
}

export interface GameStateWithColors extends GameState {
  players: ExtendedPlayer[];
}

export interface GameMove {
  playerId: string;
  playerSymbol: Player;
  position: number;
  timestamp: Date;
}

export type GameStatus = 
  | 'waiting'    // Waiting for players to join
  | 'ready'      // Players joined, waiting to start
  | 'playing'    // Game in progress
  | 'finished'   // Game completed
  | 'abandoned'; // Game abandoned

// Room and Lobby Types
export interface Room {
  id: string;
  name: string;
  hostId: string;
  maxPlayers: number;
  currentPlayerCount: number;
  isPrivate: boolean;
  password?: string;
  gameMode: GameMode;
  status: RoomStatus;
  createdAt: Date;
}

export type RoomStatus = 'open' | 'full' | 'playing' | 'closed';

export type GameMode = 
  | 'classic'      // Standard 3x3
  | 'giant'        // 5x5 board
  | 'ultimate'     // 9 mini-boards
  | 'timed'        // Time-limited moves
  | 'tournament';  // Best of series

// Socket Events
export interface SocketEvents {
  // Client to Server
  'join-room': (roomId: string, password?: string) => void;
  'leave-room': (roomId: string) => void;
  'create-room': (roomData: CreateRoomData) => void;
  'make-move': (gameId: string, position: number) => void;
  'player-ready': (gameId: string) => void;
  'start-game': (gameId: string) => void;
  'send-message': (roomId: string, message: ChatMessage) => void;
  
  // Server to Client
  'room-joined': (room: Room, player: GamePlayer) => void;
  'room-left': (roomId: string) => void;
  'room-created': (room: Room) => void;
  'game-updated': (gameState: GameState) => void;
  'move-made': (move: GameMove, gameState: GameState) => void;
  'player-joined': (player: GamePlayer) => void;
  'player-left': (playerId: string) => void;
  'game-started': (gameState: GameState) => void;
  'game-ended': (gameState: GameState, stats: GameStats) => void;
  'message-received': (message: ChatMessage) => void;
  'error': (error: ErrorMessage) => void;
}

export interface CreateRoomData {
  name: string;
  maxPlayers: number;
  isPrivate: boolean;
  password?: string;
  gameMode: GameMode;
}

export interface ChatMessage {
  id: string;
  playerId: string;
  playerName: string;
  message: string;
  timestamp: Date;
  type: 'chat' | 'system' | 'game';
}

export interface ErrorMessage {
  code: string;
  message: string;
  details?: any;
}

// Statistics and Leaderboard
export interface PlayerStats {
  playerId: string;
  playerName: string;
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
  gamesDraw: number;
  winRate: number;
  averageGameDuration: number;
  favoriteGameMode: GameMode;
  totalPlayTime: number;
  streak: {
    current: number;
    best: number;
    type: 'win' | 'loss';
  };
}

export interface GameStats {
  duration: number;
  totalMoves: number;
  winner: GamePlayer | null;
  loser: GamePlayer | null;
  gameMode: GameMode;
  completedAt: Date;
}

export interface LeaderboardEntry {
  rank: number;
  player: GamePlayer;
  stats: PlayerStats;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ErrorMessage;
  timestamp: Date;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;