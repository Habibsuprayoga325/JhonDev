"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export function LiveClock() {
  const [timeStr, setTimeStr] = useState("11:00am");
  const [dateStr, setDateStr] = useState("5 Oktober, 2026");

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      // Format time: H:MMam/pm
      const hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const meridiem = hours >= 12 ? "pm" : "am";
      const displayHour = hours % 12 || 12;
      setTimeStr(`${displayHour}:${minutes}${meridiem}`);

      // Format date: D Month, YYYY
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
      };
      setDateStr(now.toLocaleDateString("id-ID", options));
    }

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      aria-label="Waktu lokal studio"
      className="hidden md:flex items-center gap-2 rounded-full border border-border/80 bg-white/70 backdrop-blur-md px-3.5 py-1.5 text-xs text-foreground/80 shadow-2xs select-none"
    >
      <Clock className="size-3.5 text-brand-primary" />
      <span className="text-muted-foreground font-medium">Waktu studio</span>
      <span className="font-mono font-semibold text-foreground tabular-nums">{timeStr}</span>
      <span className="text-muted-foreground/40 font-mono">/</span>
      <span className="text-muted-foreground font-medium hidden lg:inline">{dateStr}</span>
    </div>
  );
}
