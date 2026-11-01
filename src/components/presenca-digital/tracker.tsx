"use client";

import { useEffect } from "react";
import { track } from "./tracking";

// Registra a visita e, por delegação, os cliques em elementos com data-track.
export function LandingTracker() {
  useEffect(() => {
    track("landing_view", { page: window.location.pathname });

    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const el = target.closest<HTMLElement>("[data-track]");
      if (!el?.dataset.track) return;
      track(el.dataset.track, { label: el.dataset.label, location: el.dataset.location });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
