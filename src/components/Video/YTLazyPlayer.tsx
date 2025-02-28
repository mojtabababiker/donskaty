"use client";
import { ImageField, KeyTextField } from "@prismicio/client";
import { useEffect, useRef, useState } from "react";
import PlayIcon from "./PlayIcon";
import { PrismicNextImage } from "@prismicio/next";

type VideoProps = {
  youTubeID: KeyTextField;
  placeholderImage: ImageField;
};

export function YTLazyPlayer({ youTubeID, placeholderImage }: VideoProps) {
  const [play, setPlay] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { rootMargin: "1500px", threshold: 0 }
    );
    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
      observer.disconnect();
    };
  });
  return (
    <div className="relative h-full w-full overflow-hidden" ref={containerRef}>
      {!play && (
        <div className="absolute z-50 inset-0 flex items-center justify-center">
          <PrismicNextImage
            field={placeholderImage}
            fill
            className="h-full"
            alt=""
          />
          {/* <ScaleInOut direction="in" duration={0.5} delay={0.5}> */}
          <PlayIcon
            className="text-brand-lime z-30 border-4"
            onClick={() => setPlay(true)}
          />
          {/* </ScaleInOut> */}
        </div>
      )}
      {inView && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youTubeID}?autoplay=${
            play ? 1 : 0
          }&mute=1&loop=1&playlist=${youTubeID}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="pointer-events-none h-full w-full border-0"
        />
      )}
    </div>
  );
}
