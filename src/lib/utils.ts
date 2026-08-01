import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Sanitize user input to prevent XSS
export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

// Truncate string safely
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 1) + "…";
}

// Format market value
export function formatMarketValue(value: number | null): string {
  if (!value) return "N/A";
  if (value >= 1_000_000_000) return `€${(value / 1_000_000_000).toFixed(1)}B`;
  if (value >= 1_000_000) return `€${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `€${(value / 1_000).toFixed(0)}K`;
  return `€${value}`;
}

// Calculate age from DOB
export function calculateAge(dob: string): number {
  const birth = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

// Generate share text for social media
export function generateShareText(
  gameName: string,
  score: number,
  maxScore: number,
  streak: number,
  emojiGrid?: string
): string {
  const lines = [
    `⚽ ${gameName}`,
    `Score: ${score}/${maxScore}`,
  ];

  if (streak > 0) lines.push(`🔥 Streak: ${streak}`);
  if (emojiGrid) lines.push(emojiGrid);

  lines.push("", "Play at footballminigames.com");

  return lines.join("\n");
}

// Simple obfuscation for client-side payloads
export function obfuscatePayload(data: Record<string, unknown>): string {
  const json = JSON.stringify(data);
  return btoa(
    encodeURIComponent(json).replace(/%([0-9A-F]{2})/g, (_, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    )
  );
}

export function deobfuscatePayload(encoded: string): Record<string, unknown> {
  const decoded = decodeURIComponent(
    atob(encoded)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
  return JSON.parse(decoded);
}
