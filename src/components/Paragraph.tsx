import clsx from "clsx";
import React from "react";

type Props = {
  as?: "p" | "div" | "span" | "h3";
  size?: "lg" | "md" | "sm" | "xs";
  children: React.ReactNode;
  className?: string;
};

function Paragraph({
  as: Comp = "p",
  size = "md",
  children,
  className,
}: Props) {
  return (
    <Comp
      className={clsx(
        "font-mono leading-relaxed",
        size === "lg" && "~text-xl/3xl",
        size === "md" && "~text-lg/xl",
        size === "sm" && "~text-sm/lg",
        size === "xs" && "~text-xs/sm",
        className
      )}
    >
      {children}
    </Comp>
  );
}

export default Paragraph;
