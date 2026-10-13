"use client";

import { useSyncExternalStore } from "react";
import { formatMinutes, nextFriday, sunsetMinutes } from "@/lib/sunset";

const subscribe = () => () => {};
const getFridayClose = () => formatMinutes(sunsetMinutes(nextFriday(new Date())) - 60);

// Sexta fecha 1h antes do pôr do sol; o valor muda ao longo do ano.
export function BusinessHours({ className }: { className?: string }) {
  const fridayClose = useSyncExternalStore(subscribe, getFridayClose, () => null);

  return (
    <ul className={className}>
      <li>Seg a qui: 08:00–12:00 e 13:00–18:00</li>
      <li>Sex: 08:00–12:00 e 13:00–{fridayClose ?? "…"}</li>
      <li>Sáb e dom: fechado</li>
    </ul>
  );
}
