"use client";

import Link from "next/link";
import { Button } from "./Button";
import { GUEST_LIMIT_MESSAGE } from "@/lib/guest-play";

interface GuestPlayBlockedProps {
  message?: string;
}

export function GuestPlayBlocked({ message = GUEST_LIMIT_MESSAGE }: GuestPlayBlockedProps) {
  return (
    <div className="max-w-lg mx-auto text-center animate-fade-in">
      <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8">
        <div className="text-5xl mb-4">🔒</div>
        <h2 className="text-xl font-bold mb-2">Daily Free Play Used</h2>
        <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
          {message}
        </p>

        <div className="flex flex-col gap-2.5">
          <Link href="/auth/register">
            <Button className="w-full">Create Free Account</Button>
          </Link>
          <Link href="/auth/login">
            <Button variant="secondary" className="w-full">
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
