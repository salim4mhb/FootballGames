"use client";

import Link from "next/link";

interface GameCardProps {
  game: {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    href: string;
    badge: string | null;
  };
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link href={game.href} className="group block">
      <div className="relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-5 sm:p-6 hover:border-[var(--border-accent)] hover:bg-[var(--bg-card-hover)] transition-all duration-200 h-full">
        {game.badge && (
          <span className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-white/70">
            {game.badge}
          </span>
        )}
        <div
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center text-xl sm:text-2xl mb-4 group-hover:scale-110 transition-transform duration-200`}
        >
          {game.icon}
        </div>
        <h3 className="text-base sm:text-lg font-bold mb-1.5 group-hover:text-green-400 transition-colors">
          {game.title}
        </h3>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          {game.description}
        </p>
      </div>
    </Link>
  );
}
