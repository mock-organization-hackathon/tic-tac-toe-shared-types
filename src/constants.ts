import { PlayerColor } from './types';

// Color Constants
export const COLORS = {
  // Primary Theme Colors
  PRIMARY: '#3B82F6',
  SECONDARY: '#10B981',
  ACCENT: '#8B5CF6',
  
  // Semantic Colors
  SUCCESS: '#10B981',
  WARNING: '#F59E0B',
  ERROR: '#EF4444',
  INFO: '#3B82F6',
  
  // Neutral Colors
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GRAY: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827'
  },
  
  // Player Colors
  PLAYER: {
    X: '#EF4444',     // Red
    O: '#3B82F6',     // Blue
    TRIANGLE: '#10B981', // Green
    SQUARE: '#F59E0B',   // Orange
    STAR: '#8B5CF6',     // Purple
    DIAMOND: '#EC4899',  // Pink
    CIRCLE: '#06B6D4',   // Cyan
    HEART: '#F97316'     // Orange-red
  } as Record<PlayerColor, string>,
  
  // Game State Colors
  BOARD: {
    BACKGROUND: '#F3F4F6',
    BORDER: '#D1D5DB',
    CELL_EMPTY: '#FFFFFF',
    CELL_HOVER: '#F9FAFB',
    WINNING_LINE: '#FEF3C7'
  }
} as const;

// Theme Configuration
export const THEMES = {
  LIGHT: {
    name: 'light',
    colors: {
      background: COLORS.WHITE,
      surface: COLORS.GRAY[50],
      text: COLORS.GRAY[900],
      textSecondary: COLORS.GRAY[600],
      border: COLORS.GRAY[200],
      accent: COLORS.PRIMARY
    }
  },
  DARK: {
    name: 'dark',
    colors: {
      background: COLORS.GRAY[900],
      surface: COLORS.GRAY[800],
      text: COLORS.WHITE,
      textSecondary: COLORS.GRAY[300],
      border: COLORS.GRAY[700],
      accent: COLORS.PRIMARY
    }
  }
} as const;

// Game Configuration
export const GAME_CONFIG = {
  BOARD_SIZE: {
    CLASSIC: 9,
    GIANT: 25,
    ULTIMATE: 81
  },
  WINNING_LINES: {
    CLASSIC: [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ],
    GIANT: [
      // Rows
      [0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24],
      // Columns
      [0, 5, 10, 15, 20], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24],
      // Diagonals
      [0, 6, 12, 18, 24], [4, 8, 12, 16, 20]
    ]
  },
  MAX_PLAYERS: {
    CLASSIC: 2,
    TOURNAMENT: 8
  },
  TIME_LIMITS: {
    TIMED_MOVE: 30 * 1000,      // 30 seconds per move
    GAME_TIMEOUT: 15 * 60 * 1000, // 15 minutes total
    RECONNECT_TIMEOUT: 2 * 60 * 1000 // 2 minutes to reconnect
  }
} as const;

// Socket Event Names
export const SOCKET_EVENTS = {
  // Connection
  CONNECTION: 'connection',
  DISCONNECT: 'disconnect',
  
  // Room Management
  JOIN_ROOM: 'join-room',
  LEAVE_ROOM: 'leave-room',
  CREATE_ROOM: 'create-room',
  ROOM_JOINED: 'room-joined',
  ROOM_LEFT: 'room-left',
  ROOM_CREATED: 'room-created',
  
  // Game Events
  MAKE_MOVE: 'make-move',
  PLAYER_READY: 'player-ready',
  START_GAME: 'start-game',
  GAME_UPDATED: 'game-updated',
  MOVE_MADE: 'move-made',
  GAME_STARTED: 'game-started',
  GAME_ENDED: 'game-ended',
  
  // Player Events
  PLAYER_JOINED: 'player-joined',
  PLAYER_LEFT: 'player-left',
  
  // Chat
  SEND_MESSAGE: 'send-message',
  MESSAGE_RECEIVED: 'message-received',
  
  // Error Handling
  ERROR: 'error'
} as const;

// Error Codes
export const ERROR_CODES = {
  // Authentication
  UNAUTHORIZED: 'UNAUTHORIZED',
  INVALID_TOKEN: 'INVALID_TOKEN',
  
  // Room Errors
  ROOM_NOT_FOUND: 'ROOM_NOT_FOUND',
  ROOM_FULL: 'ROOM_FULL',
  ROOM_PRIVATE: 'ROOM_PRIVATE',
  INVALID_PASSWORD: 'INVALID_PASSWORD',
  ALREADY_IN_ROOM: 'ALREADY_IN_ROOM',
  NOT_IN_ROOM: 'NOT_IN_ROOM',
  
  // Game Errors
  GAME_NOT_FOUND: 'GAME_NOT_FOUND',
  GAME_NOT_STARTED: 'GAME_NOT_STARTED',
  GAME_FINISHED: 'GAME_FINISHED',
  NOT_YOUR_TURN: 'NOT_YOUR_TURN',
  INVALID_MOVE: 'INVALID_MOVE',
  POSITION_OCCUPIED: 'POSITION_OCCUPIED',
  
  // Player Errors
  PLAYER_NOT_FOUND: 'PLAYER_NOT_FOUND',
  INVALID_PLAYER_NAME: 'INVALID_PLAYER_NAME',
  PLAYER_NOT_READY: 'PLAYER_NOT_READY',
  
  // General
  INVALID_REQUEST: 'INVALID_REQUEST',
  SERVER_ERROR: 'SERVER_ERROR',
  VALIDATION_ERROR: 'VALIDATION_ERROR'
} as const;

// Game Messages
export const GAME_MESSAGES = {
  WAITING_FOR_PLAYER: 'Waiting for another player to join...',
  GAME_STARTING: 'Game is starting!',
  YOUR_TURN: "It's your turn!",
  OPPONENT_TURN: "Waiting for opponent's move...",
  GAME_WON: 'Congratulations! You won!',
  GAME_LOST: 'Game over. Better luck next time!',
  GAME_DRAW: "It's a draw!",
  PLAYER_DISCONNECTED: 'Player disconnected. Game paused.',
  PLAYER_RECONNECTED: 'Player reconnected. Game resumed.',
  GAME_ABANDONED: 'Game has been abandoned.'
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  REGISTER: '/api/auth/register',
  
  // Rooms
  ROOMS: '/api/rooms',
  ROOM_BY_ID: (id: string) => `/api/rooms/${id}`,
  JOIN_ROOM: (id: string) => `/api/rooms/${id}/join`,
  LEAVE_ROOM: (id: string) => `/api/rooms/${id}/leave`,
  
  // Games
  GAMES: '/api/games',
  GAME_BY_ID: (id: string) => `/api/games/${id}`,
  GAME_MOVES: (id: string) => `/api/games/${id}/moves`,
  
  // Players
  PLAYERS: '/api/players',
  PLAYER_STATS: (id: string) => `/api/players/${id}/stats`,
  LEADERBOARD: '/api/leaderboard',
  
  // Health
  HEALTH: '/api/health'
} as const;

// UI Constants
export const UI_CONFIG = {
  ANIMATION_DURATION: 300,
  TOAST_DURATION: 3000,
  BOARD_CELL_SIZE: 80,
  COLORS: {
    PRIMARY: '#3B82F6',
    SECONDARY: '#10B981',
    DANGER: '#EF4444',
    WARNING: '#F59E0B',
    SUCCESS: '#10B981',
    INFO: '#3B82F6'
  },
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280
  }
} as const;