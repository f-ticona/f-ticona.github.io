import { useState, useEffect, useRef } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export function TypingEffect({
  text,
  speed = 50,
  delay = 0,
  className = "",
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [started, setStarted] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText(text.slice(0, indexRef.current + 1));
        indexRef.current += 1;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  // Cursor blink animation
  useEffect(() => {
    if (!started || displayedText.length < text.length) return;
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, [started, displayedText, text]);

  return (
    <span className={className}>
      {displayedText}
      {started && (
        <span
          className="inline-block w-[2px] h-[1em] bg-abisal-400 ml-1 align-middle"
          style={{
            opacity: showCursor ? 1 : 0,
            transition: "opacity 0.2s",
          }}
        />
      )}
    </span>
  );
}
