import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const slideDuration = 8000;

export default function Carousel({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef();
  const animationRef = useRef();
  const startTimeRef = useRef();
  const pauseTimeRef = useRef();
  const remainingTimeRef = useRef();

  const animateProgress = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;
    const newProgress = Math.min((elapsed / slideDuration) * 100, 100);
    
    setProgress(newProgress);

    if (newProgress >= 100) {
      setProgress(0);
      startTimeRef.current = null;
      remainingTimeRef.current = slideDuration;
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else {
      animationRef.current = requestAnimationFrame(animateProgress);
      remainingTimeRef.current = slideDuration - elapsed;
    }
  };

  useEffect(() => {
    if (isPaused) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      pauseTimeRef.current = Date.now();
      return;
    }

    if(pauseTimeRef.current) {
      const pauseDuration = Date.now() - pauseTimeRef.current;
      startTimeRef.current += pauseDuration;
      pauseTimeRef.current = null;
    }
    animationRef.current = requestAnimationFrame(animateProgress);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentSlide, isPaused, slides.length]);

  return (
    <div className="w-full mx-auto ">
      {/* Pagination thumbnails */}
      <div className="flex h-min justify-center items-center gap-2 mb-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setProgress(0);
              startTimeRef.current = null;
            }}
            className={clsx(
              "relative w-full before:block before:pb[100%] sm:w-[10%] sm:h-10x rounded border-2 transition-all",
              index === currentSlide ? "border-brand-primary-strong" : "border-neutral-regular"
            )}
          >
            {/* Placeholder thumbnail */}
            <div className="w-full h-min bg-neutral-bg flex items-center justify-center text-xs">
              {slides[index].title}
            </div>
          </button>
        ))}
      </div>

      {/* Slide container */}
      <div
        className="relative w-full h-[65vh] bg-neutral-tertiary flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0 flex items-center justify-center text-3xl text-neutral-placeholder">
          {slides[currentSlide]?.content || `Slide ${currentSlide + 1}`}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 rounded-pill bg-neutral-tertiary">
          <div
            ref={progressRef}
            className="h-full bg-brand-primary-rest"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}