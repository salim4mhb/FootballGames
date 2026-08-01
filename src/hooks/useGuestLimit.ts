"use client";

import { useCallback, useEffect, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { hasGuestPlayedToday, markGuestPlayedToday } from "@/lib/guest-play";

export function useGuestLimit(gameId: string, initialIsAuthenticated = false) {
  const [isAuthenticated, setIsAuthenticated] = useState(initialIsAuthenticated);
  const [authResolved, setAuthResolved] = useState(initialIsAuthenticated);
  const [playedToday, setPlayedToday] = useState(() => hasGuestPlayedToday(gameId));
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    let mounted = true;
    try {
      const supabase = getSupabaseBrowserClient();
      supabase.auth
        .getUser()
        .then(({ data }) => {
          if (!mounted) return;
          setIsAuthenticated(!!data.user);
          setAuthResolved(true);
        })
        .catch(() => {
          if (!mounted) return;
          setAuthResolved(true);
        });
    } catch {
      if (!mounted) return;
      setAuthResolved(true);
    }
    return () => {
      mounted = false;
    };
  }, []);

  const blocked = authResolved && !isAuthenticated && playedToday;

  const onGameEnd = useCallback(() => {
    if (isAuthenticated) return;
    markGuestPlayedToday(gameId);
    setPlayedToday(true);
    setShowPrompt(true);
  }, [gameId, isAuthenticated]);

  const openPrompt = useCallback(() => setShowPrompt(true), []);
  const closePrompt = useCallback(() => setShowPrompt(false), []);

  return {
    isAuthenticated,
    authResolved,
    playedToday,
    blocked,
    showPrompt,
    onGameEnd,
    openPrompt,
    closePrompt,
  };
}
