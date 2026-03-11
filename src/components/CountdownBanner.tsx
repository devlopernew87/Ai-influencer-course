import { useState, useEffect } from "react";
import { Zap } from "lucide-react";

const getTargetDate = () => {
  const key = "countdown_target";
  const stored = localStorage.getItem(key);
  if (stored) {
    const date = new Date(stored);
    if (date.getTime() > Date.now()) return date;
  }
  // Set 3 days from now
  const target = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
  localStorage.setItem(key, target.toISOString());
  return target;
};

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = getTargetDate();
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      const hours = Math.floor(diff / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-accent/90 to-accent py-2 text-accent-foreground">
      <div className="section-container flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold">
        <Zap size={14} className="flex-shrink-0" />
        <span>50% OFF ends in</span>
        <div className="flex items-center gap-1 font-mono">
          <span className="bg-accent-foreground/20 rounded px-1.5 py-0.5">{pad(timeLeft.hours)}h</span>
          <span>:</span>
          <span className="bg-accent-foreground/20 rounded px-1.5 py-0.5">{pad(timeLeft.minutes)}m</span>
          <span>:</span>
          <span className="bg-accent-foreground/20 rounded px-1.5 py-0.5">{pad(timeLeft.seconds)}s</span>
        </div>
        <a href="#pricing" className="ml-2 underline underline-offset-2 hover:opacity-80 hidden sm:inline">
          Grab the deal →
        </a>
      </div>
    </div>
  );
};

export default CountdownBanner;
