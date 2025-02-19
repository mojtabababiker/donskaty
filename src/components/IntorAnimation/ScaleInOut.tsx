"use client";

import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  ease?: string;
  direction?: "in" | "out";
};

function ScaleInOut({
  children,
  duration = 0.5,
  delay = 0,
  ease = "ease-in-out",
  direction = "in",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          container.style.animation = `scale-${direction} ${duration}s ${delay}s ${ease} forwards`;
          observer.unobserve(container);
        }
      },
      {
        threshold: 0,
        rootMargin: "-150px",
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  });
  return (
    <div className={`scale-${direction}`} ref={containerRef}>
      {children}
    </div>
  );
}

export default ScaleInOut;
