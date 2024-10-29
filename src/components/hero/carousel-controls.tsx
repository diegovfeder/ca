"use client";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";

interface CarouselControlsProps {
  total: number;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
}

export function CarouselControls({
  total,
  current,
  setCurrent,
}: CarouselControlsProps) {
  const timerRef = useRef<NodeJS.Timeout>();

  const startTimer = useCallback(() => {
    // Clear existing timer if any
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    // Start new timer
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
  }, [setCurrent, total]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTimer, setCurrent, total]);

  const handleClick = (index: number) => {
    setCurrent(index);
    startTimer(); // Reset timer when button is clicked
  };

  return (
    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`h-2 w-2 rounded-xl transition-all ${
            index === current
              ? "bg-stone-50"
              : "bg-stone-50/60 hover:bg-stone-50/60"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
