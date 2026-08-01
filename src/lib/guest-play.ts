const STORAGE_PREFIX = "last_played_date_";

export const GUEST_LIMIT_MESSAGE =
  "You've used your 1 free play for today! Create a free account or sign in to keep playing unlimited games.";

export function getTodayKey(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getGuestPlayKey(gameId: string): string {
  return `${STORAGE_PREFIX}${gameId}`;
}

export function hasGuestPlayedToday(gameId: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(getGuestPlayKey(gameId)) === getTodayKey();
  } catch {
    return false;
  }
}

export function markGuestPlayedToday(gameId: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(getGuestPlayKey(gameId), getTodayKey());
  } catch {
    // Storage unavailable — fail open
  }
}
