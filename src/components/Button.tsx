import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { FaCartShopping, FaPlus } from "react-icons/fa6";
import { SkateboardIcon } from "@/components/ButtonLink";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onClick: VoidFunction;
  className?: string;
  size?: "lg" | "md" | "sm";
  color?: "orange" | "purple" | "lime";
  icon?: "cart" | "plus" | "skateboard";
};

function Button({
  onClick,
  size = "md",
  color = "orange",
  className,
  icon,
  children,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        "button-cutout relative group mx-4 inline-flex items-center bg-gradient-to-b from-25% to-75% bg-[length:100%_400%] font-bold transition-[filter,background-position] duration-300 hover:bg-bottom",
        size === "sm" && "gap-2.5 py-2 text-base",
        size === "md" && "gap-3 px-1 text-lg ~py-2.5/3",
        size === "lg" && "~text-lg/2xl ~gap-3/4 ~px-1/2 ~py-3/4",
        color === "orange" &&
          "from-brand-orange to-brand-lime text-black hover:text-black",
        color === "purple" &&
          "from-brand-purple to-brand-lime text-white hover:text-black",
        color === "lime" && "from-brand-lime to-brand-orange text-black",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {icon ? (
        <>
          <div
            className={clsx(
              "flex items-center justify-center transition-transform duration-100 group-hover:-rotate-[25deg] [&>svg]:h-full [&>svg]:w-full",
              size === "sm" && "size-5",
              size === "md" && "size-6",
              size === "lg" && "~size-6/8"
            )}
          >
            {icon === "skateboard" && <SkateboardIcon />}
            {icon === "cart" && <FaCartShopping />}
            {icon === "plus" && <FaPlus />}
          </div>
          <div className="w-px self-stretch bg-black/25" />
        </>
      ) : null}
      {children}
    </button>
  );
}

export default Button;
