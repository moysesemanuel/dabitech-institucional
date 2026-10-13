"use client";

import { useEffect } from "react";

/** Ao chegar na página sem âncora na URL, começa pelo topo (evita herdar a posição da página anterior). */
export function ScrollReset() {
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return null;
}
