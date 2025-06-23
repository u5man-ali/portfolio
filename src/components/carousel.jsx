import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const SLIDE_DURATION = 5000; // 5 seconds

export default function Carousel({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef();

  useEffect(() => {
    if (isPaused) return;

    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const newProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        setProgress(0);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentSlide, isPaused, slides.length]);

  return (
    <div className="w-full mx-auto">
      {/* Pagination thumbnails */}
      <div className="flex justify-center items-center gap-2 mb-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setProgress(0);
            }}
            className={clsx(
              "w-16 h-10 rounded overflow-hidden border-2 transition-all",
              index === currentSlide ? "border-brand-primary-strong" : "border-neutral-regular"
            )}
          >
            {/* Placeholder thumbnail */}
            <div className="w-full h-full bg-neutral-bg flex items-center justify-center text-xs">
              {index + 1}
            </div>
          </button>
        ))}
      </div>

      {/* Slide container */}
      <div
        className="relative w-full h-64 overflow-hidden bg-neutral-tertiary flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0 flex items-center justify-center text-3xl text-gray-400">
          Slide {currentSlide + 1}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-300">
          <div
            ref={progressRef}
            className="h-full bg-brand-primary-rest transition-all duration-100 linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}