"use client";

import { useState, useEffect, useRef } from "react";

interface UseTypewriterProps {
  text: string;
  speed?: number;
  isActive: boolean; // Only apply effect when active
}

export const useTypeWriter = ({
  text,
  speed = 30,
  isActive,
}: UseTypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    // If not active, show full text immediately
    if (!isActive) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    // Reset states when text changes
    setDisplayedText("");
    setIsComplete(false);
    indexRef.current = 0;

    const timer = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText(text.slice(0, indexRef.current + 1));
        indexRef.current += 1;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, isActive]);

  return { displayedText, isComplete };
};
