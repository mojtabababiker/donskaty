import clsx from "clsx";
import React from "react";

type Props = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  children: React.ReactNode;
  className?: string;
};

export function Heading({
  as: Comp = "h1",
  size = "lg",
  children,
  className,
}: Props) {
  return (
    <Comp
      className={clsx(
        "font-sans uppercase",
        size === "xl" && "~text-4xl/8xl",
        size === "lg" && "~text-4xl/7xl",
        size === "md" && "~text-3xl/5xl",
        size === "sm" && "~text-2x/4xl",
        size === "xs" && "~text-xl/3xl",
        className
      )}
    >
      {children}
    </Comp>
  );
}
