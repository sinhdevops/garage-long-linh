"use client";

import { useEffect } from "react";

type Fbq = (cmd: string, event: string, params?: Record<string, string>) => void;

/**
 * Sends a Meta Pixel "Contact" event when someone taps an element with data-track
 * (Messenger, call, Zalo, directions). Does nothing when Pixel isn't installed.
 */
export function ContactTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      const fbq = (window as unknown as { fbq?: Fbq }).fbq;
      fbq?.("track", "Contact", { content_name: el.dataset.track ?? "contact" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
