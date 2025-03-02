"use client";

import Logo from "@/components/Logo";
import { useProgress } from "@react-three/drei";
import clsx from "clsx";

function Loading() {
  const { progress } = useProgress();
  return (
    <div
      className={clsx(
        "absolute inset-0 max-h-screen bg-brand-purple text-brand-pink font-sans text-[15vw] flex flex-col items-center justify-center transition-opacity duration-1000",
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <Logo className="text-brand-pink w-[15vw] h-[7vw] animate-squiggle " />
      <p className="w-full content-center text-center leading-none text-brand-lime animate-squiggle">
        LOADING...
      </p>
    </div>
  );
}

export default Loading;
