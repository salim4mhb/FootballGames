import { cn } from "@/lib/utils";

const AVATAR_COLORS = [
  "from-blue-400 to-blue-600",
  "from-emerald-400 to-emerald-600",
  "from-purple-400 to-purple-600",
  "from-amber-400 to-amber-600",
  "from-rose-400 to-rose-600",
  "from-cyan-400 to-cyan-600",
  "from-orange-400 to-orange-600",
  "from-pink-400 to-pink-600",
  "from-teal-400 to-teal-600",
  "from-indigo-400 to-indigo-600",
];

export function PlayerAvatar({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
  const colorIdx = Math.abs(name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)) % AVATAR_COLORS.length;
  return (
    <div
      className={cn(
        "rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold shrink-0",
        AVATAR_COLORS[colorIdx],
        className || "w-8 h-8 text-xs"
      )}
    >
      {initials}
    </div>
  );
}

export function FlagIcon({ countryCode, className }: { countryCode?: string; className?: string }) {
  if (!countryCode || countryCode.length < 2) return null;
  const code = countryCode.includes("-") ? countryCode.toLowerCase() : countryCode.substring(0, 2).toLowerCase();
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      alt=""
      className={className || "w-5 h-4 inline-block rounded-sm object-cover"}
      loading="lazy"
    />
  );
}
