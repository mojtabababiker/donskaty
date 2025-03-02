"use client";
import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  direction?: "left" | "right" | "top" | "bottom";
};

function SlideIn({
  children,
  duration = 0.5,
  delay = 0,
  direction = "left",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          container.style.animation = `slide-in-${direction} ${duration}s ${delay}s forwards`;
          observer.unobserve(container);
        }
      },
      { threshold: 0, rootMargin: "-50px" }
    );
    observer.observe(container);
    return () => observer.disconnect();
  });
  return (
    <div className={`slide-in slide-in-${direction}`} ref={containerRef}>
      {children}
    </div>
  );
}

export default SlideIn;
