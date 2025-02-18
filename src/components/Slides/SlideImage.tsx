"use client";
import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";

type Props = {
  bgImage: ImageField;
  fgImage: ImageField;
  className?: string;
};

function SlideImage({ bgImage, fgImage, className }: Props) {
  // const bgRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);
  const currentPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (fgRef.current) {
        const { innerWidth, innerHeight } = window;
        const xPercent = e.clientX / innerWidth - 0.5;
        const yPercent = e.clientY / innerHeight - 0.5;
        targetPos.current = {
          x: xPercent * -40,
          y: yPercent * -40,
        };
      }
    }
    function animateFg() {
      if (fgRef.current) {
        const newX =
          currentPos.current.x +
          (targetPos.current.x - currentPos.current.x) * 0.3;
        const newY =
          currentPos.current.y +
          (targetPos.current.y - currentPos.current.y) * 0.5;
        currentPos.current = { x: newX, y: newY };
        fgRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
      }
      requestAnimationFrame(animateFg);
    }

    window.addEventListener("mousemove", onMouseMove);
    const frameId = requestAnimationFrame(animateFg);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);
  return (
    <div className={clsx("w-full flex items-center justify-center", className)}>
      {/* bg */}
      <div className="w-full h-full">
        <PrismicNextImage
          field={bgImage}
          className="absolute animate-squiggle mx-auto inset-0 w-[100%] h-[100%] object-contain"
          alt=""
        />
      </div>
      {/* image */}
      <div
        ref={fgRef}
        className="relative md:h-full min-w-[340px] transition-transform ease-in-out duration-300"
      >
        <PrismicNextImage
          field={fgImage}
          alt=""
          className="relative w-full max-w-[460px]"
          width={600}
        />
      </div>
    </div>
  );
}

export default SlideImage;
