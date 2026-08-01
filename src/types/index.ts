export interface Player {
  id: string;
  full_name: string;
  short_name: string;
  nationality: string;
  country_code: string;
  current_club: string;
  league: string;
  position: string;
  shirt_number: number | null;
  date_of_birth: string;
  height_cm: number | null;
  foot: string | null;
  career_path: CareerEntry[];
  market_value: number | null;
  goals_total: number;
  assists_total: number;
  trophies: string[];
  is_active: boolean;
  is_legend: boolean;
  photo_url: string | null;
  blur_hash: string | null;
  created_at: string;
  updated_at: string;
}

export interface CareerEntry {
  club: string;
  from: string;
  to: string | null;
}

export interface Profile {
  id: string;
  display_name: string;
  avatar_url: string | null;
  is_guest: boolean;
  guest_ip: string | null;
  guest_fingerprint: string | null;
  created_at: string;
  updated_at: string;
}

export interface DailyChallenge {
  id: string;
  challenge_date: string;
  game_type: GameType;
  config: GameConfig;
  answer: GameAnswer;
  created_at: string;
}

export type GameType =
  | "guess_player"
  | "trivia"
  | "higher_lower"
  | "top10";

export interface GameConfig {
  player_id?: string;
  clue?: string;
  max_guesses?: number;
  time_limit_ms?: number;
  players?: string[];
  criteria?: string[];
  [key: string]: unknown;
}

export interface GameAnswer {
  correct_player_id?: string;
  correct_answer?: string;
  accepted_answers?: string[];
  [key: string]: unknown;
}

export interface GameSession {
  id: string;
  user_id: string | null;
  guest_id: string | null;
  game_type: GameType;
  challenge_id: string | null;
  is_daily: boolean;
  score: number;
  max_score: number;
  time_taken_ms: number | null;
  guesses: Guess[];
  result: GameResult | null;
  completed: boolean;
  is_correct: boolean;
  created_at: string;
}

export interface Guess {
  player_id: string;
  player_name: string;
  timestamp: number;
  is_correct: boolean;
  clues_revealed?: number;
}

export interface GameResult {
  won: boolean;
  score: number;
  max_score: number;
  time_taken_ms: number;
  streak?: number;
  share_text?: string;
  emoji_grid?: string;
}

export interface Streak {
  id: string;
  user_id: string;
  current_streak: number;
  longest_streak: number;
  last_played: string | null;
  total_games: number;
  total_correct: number;
  created_at: string;
  updated_at: string;
}

export interface LeaderboardEntry {
  id: string;
  user_id: string;
  display_name: string;
  avatar_url: string | null;
  total_score: number;
  games_played: number;
  avg_score: number;
  current_streak: number;
  longest_streak: number;
  rank: number | null;
  updated_at: string;
}

export interface GuestLimitInfo {
  games_played_today: number;
  max_games: number;
  remaining: number;
  can_play: boolean;
  resets_at: string;
}

export interface Hint {
  label: string;
  value: string;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

export interface TriviaQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  timeLimitMs: number;
}

export interface TriviaState {
  questions: TriviaQuestion[];
  currentIndex: number;
  score: number;
  streak: number;
  maxStreak: number;
  answers: { questionId: string; correct: boolean; timeMs: number }[];
  timeRemaining: number;
  gameOver: boolean;
}

export interface HigherLowerCard {
  playerId: string;
  playerName: string;
  shortName: string;
  club: string;
  nationality: string;
  position: string;
  statLabel: string;
  statValue: number;
  statFormatted: string;
  countryCode?: string;
}

export interface Top10Item {
  rank: number;
  playerName: string | null;
  playerId: string | null;
  value: number;
  valueLabel: string;
  revealed: boolean;
}
