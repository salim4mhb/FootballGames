"use client";

import Link from "next/link";
import { Modal } from "./Modal";
import { Button } from "./Button";
import { GUEST_LIMIT_MESSAGE } from "@/lib/guest-play";

interface AuthPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export function AuthPromptModal({
  isOpen,
  onClose,
  message = GUEST_LIMIT_MESSAGE,
}: AuthPromptModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Free Play Used">
      <div className="text-center space-y-4">
        <div className="text-5xl">🔒</div>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
          {message}
        </p>

        <div className="bg-[var(--bg-secondary)] rounded-xl p-4 space-y-2 text-left">
          <h3 className="font-semibold text-sm text-center">Free Account Benefits</h3>
          <ul className="text-sm text-[var(--text-secondary)] space-y-1.5">
            <li className="flex items-center gap-2">
              <span>✅</span> Unlimited daily games
            </li>
            <li className="flex items-center gap-2">
              <span>✅</span> Save your 🔥 streaks
            </li>
            <li className="flex items-center gap-2">
              <span>✅</span> Global leaderboard
            </li>
            <li className="flex items-center gap-2">
              <span>✅</span> Custom profile & badges
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2.5 pt-2">
          <Link href="/auth/register" onClick={onClose}>
            <Button className="w-full">Create Free Account</Button>
          </Link>
          <Link href="/auth/login" onClick={onClose}>
            <Button variant="secondary" className="w-full">
              Log In
            </Button>
          </Link>
          <Button variant="ghost" onClick={onClose}>
            Maybe Later
          </Button>
        </div>
      </div>
    </Modal>
  );
}
